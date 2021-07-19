const express = require("express");
const router = express.Router();
const User = require("../models/User")
const CrytoJS = require("crypto-js")
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const {username, email , password} = req.body

    //Simple Validation
    if (!username || !password || !email) {
        return res.status(400).json({success: false, message: 'Missing username and/or password!'})
    }

    try {
        // Check for existing user
        const user = await User.findOne({email})

        if (user) {
            return res.status(400).json({success: false, message: 'Email already taken'})
        }

        // All good
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CrytoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        })
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
})

//LOGIN
router.post("/login", async (req, res) =>{
    //Simple Validation
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({success: false, message: 'Missing email and/or password!'})
    }

    try {
        // Check for existing user
        const user = await User.findOne({email: req.body.email})

        if (!user) {
            return res.status(400).json({success: false, message: 'Incorrect email or password!'})
        }
        // Email found
        const bytes = CrytoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CrytoJS.enc.Utf8);
        if (originalPassword !== req.body.password) {
            return res.status(400).json({success: false, message: 'Incorrect email or password!'});
        }
        
        //Return Token
        const accessToken = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin}, 
            process.env.SECRET_KEY,
            { expiresIn: '5d'}
        )

        // All good
        // not return password
        const { password, ...info } = user._doc;

        res.status(200).json({ ...info, accessToken});
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
