import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

export const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className="video" autoPlay progress controls src="https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4"></video>
        </div>
    )
}
