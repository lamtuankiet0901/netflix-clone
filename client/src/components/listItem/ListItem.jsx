import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./listitem.scss"

export const ListItem = ({index, item}) => {

    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/"+ item,
                {headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjI2ZmZmNzBjZDBkMjI3OGM5OWU1NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNjU5NDI3MSwiZXhwIjoxNjI3MDI2MjcxfQ.qSUWJSxOcnfMxqbXV-scuWxc57oWzquBqotdcx3VhuE"
                },
            });
                setMovie(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMovie()
    },[item])

    return (
        <Link to={{pathname: "/watch", movie: movie}}>
            <div className="listItem" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{left: isHovered && index * 225 - 50 + index * 2.5}}>
                <img src={movie.img} alt="" />
                {isHovered && (
                <>
                    <video src={movie.trailer} autoPlay={true} loop></video>
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownAltOutlined className="icon"/> 
                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className="limit">+{movie.limit}</span>
                            <span>{movie.year}</span>
                        </div>
                        <div className="desc">
                            {movie.desc}
                        </div>
                        <div className="genre">{movie.genre}</div>
                    </div>
                </>
                )}
        </div>
        </Link>
    )
}
