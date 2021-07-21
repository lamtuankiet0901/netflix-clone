import { useContext, useEffect, useState } from "react"
import { getMovies } from "../../context/movieContext/apiCalls"
import { useHistory } from 'react-router-dom'
import "./newList.css"
import { ListContext } from "../../context/listContext/listContext"
import { MovieContext } from "../../context/movieContext/movieContext"
import { createList } from "../../context/listContext/apiCalls"

export default function NewList() {
    const [list, setList] = useState(null)

    const {dispatch} = useContext(ListContext)
    const {movies, dispatch: dispatchMovie} = useContext(MovieContext)

    const history = useHistory()

    useEffect(() => {
        getMovies(dispatchMovie)
    },[dispatchMovie])

    const handleChange = (e) => {
        const value = e.target.value;
        setList({...list, [e.target.name]: value})
    }

    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        setList({...list, [e.target.name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        createList(list, dispatch);
        history.push("/lists")

        // setMovie(null);
        // setImg(null);
        // setImgTitle(null);
        // setImgSm(null);
        // setTrailer(null);
        // setVideo(null);
        // setUploaded(0);
    }
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New List</h1>
            <form className="addProductForm">
                <div className="formLeft">
                    <div className="addProductItem">
                        <label>Title</label>
                        <input type="text" placeholder="Popular Movies" name="title" onChange={handleChange}/>
                    </div>
                    <div className="addProductItem">
                        <label>Genre</label>
                        <input type="text" placeholder="Action" name="genre" onChange={handleChange}/>
                    </div>
                    <div className="addProductItem">
                        <label>Type</label>
                        <select name="type" onChange={handleChange}>
                            <option>Type</option>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                        </select>
                    </div>
                </div>
                <div className="formRight">
                    <div className="addProductItem">
                        <label>Content</label>
                        <select multiple name="content" onChange={handleSelect} style={{height: "280px"}}>
                            {movies.map((movie) => (
                                <option key={movie._id} value={movie._id}>{movie.title}</option>
                            ))}
                        </select>
                    </div>
                    <button className="addproductButton" onClick={handleSubmit}>Create</button>
                </div>
            </form>
        </div>
    )
}
