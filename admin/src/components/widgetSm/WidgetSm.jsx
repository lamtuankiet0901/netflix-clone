import { Visibility } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import "./widgetSm.css"

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([])

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true",{
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjI2ZmZmNzBjZDBkMjI3OGM5OWU1NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNjU5NDI3MSwiZXhwIjoxNjI3MDI2MjcxfQ.qSUWJSxOcnfMxqbXV-scuWxc57oWzquBqotdcx3VhuE"
                    },
                })
                setNewUsers(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getNewUsers()
    },[])
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map((user) => (
                    <li className="widgetSmListItem" key={user._id}>
                        <img src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetUserName">{user.username}</span>
                            {/* <span className="widgetUserTitle">Software Engineer</span> */}
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
