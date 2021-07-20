import { loginFailure, loginStart, loginSuccess } from "./authActions"
import axios from 'axios'

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/auth/login", user);
        res.data.isAdmin && dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
} 