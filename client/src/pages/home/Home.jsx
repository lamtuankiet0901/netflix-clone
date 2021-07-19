import { useEffect, useState } from "react"
import Featured from "../../components/featured/Featured"
import { List } from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import axios from "axios"
import "./home.scss"

export const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                    {headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjI2ZmZmNzBjZDBkMjI3OGM5OWU1NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNjU5NDI3MSwiZXhwIjoxNjI3MDI2MjcxfQ.qSUWJSxOcnfMxqbXV-scuWxc57oWzquBqotdcx3VhuE"
                    }}
                )
                setLists(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getRandomLists()
    },[type, genre])
    return (
        <div className="home">
            <Navbar />
            <Featured type={type}/>
            {lists.map((list) => (
                <List key={list._id} list={list} />
            ))}
        </div>
    )
}
