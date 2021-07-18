const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")

dotenv.config();

const app = express();
const MONGO_URL = process.env.MONGO_URL

const connectDB = async () => {
    try {
        mongoose.connect(MONGO_URL, {
            useCreateIndex: true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify: false
        })
        console.log("Connect MongoDB successful!")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/movies", movieRoute)
app.use("/api/lists", listRoute)

PORT = process.env.PORT || 8800;

app.listen(PORT, () => console.log(`This server is running at PORT ${PORT}`))