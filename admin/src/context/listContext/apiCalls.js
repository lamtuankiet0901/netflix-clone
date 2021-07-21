import axios from "axios";
import { createListFailure, createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess } from "../listContext/listActions";
import { updateMovieFailure, updateMovieStart, updateMovieSuccess } from "../movieContext/movieActions";

export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await axios.get("/lists", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getListsSuccess(res.data))
    } catch (error) {
        dispatch(getListsFailure());
    }
}

//create
export const createList = async (list,dispatch) => {
    dispatch(createListStart());
    try {
        const res = await axios.post("/lists", list, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createListSuccess(res.data))
    } catch (error) {
        dispatch(createListFailure());
    }
} 

//update
export const updateMovie = async (list,dispatch) => {
    dispatch(updateMovieStart());
    try {
        const res = await axios.put("/lists/"+ list._id, list, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(updateMovieSuccess(res.data))
    } catch (error) {
        dispatch(updateMovieFailure());
    }
} 

//delete
export const delelteList = async (id,dispatch) => {
    dispatch(deleteListStart());
    try {
        await axios.delete("/lists/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteListSuccess(id))
    } catch (error) {
        dispatch(deleteListFailure());
    }
} 