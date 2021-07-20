import axios from "axios";
import { deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess } from "../listContext/listActions";

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

// //create
// export const createMovie = async (movie,dispatch) => {
//     dispatch(createMovieStart());
//     try {
//         const res = await axios.post("/movies", movie, {
//             headers: {
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//             },
//         });
//         dispatch(createMovieSuccess(res.data))
//     } catch (error) {
//         dispatch(createMovieFailure());
//     }
// } 

// //update
// export const updateMovie = async (movie,dispatch) => {
//     dispatch(updateMovieStart());
//     try {
//         const res = await axios.put("/movies/"+ movie._id, movie, {
//             headers: {
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//             },
//         });
//         dispatch(updateMovieSuccess(res.data))
//     } catch (error) {
//         dispatch(updateMovieFailure());
//     }
// } 

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