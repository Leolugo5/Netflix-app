import './Play.scss'
import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined';
import { Link } from 'react-router-dom'

const play = () => {
    return (
        <div className="watch">
            <div className="back">
                <Link to='/home-page' className="router-link">
                    <ArrowBackOutlined className="arr"/>
                    Home
                </Link>
            </div>
            <video
                className="video" autoPlay progress controls src="https://www.pexels.com/video/5192103/download/?search_query=&tracking_id=c6k6hxjkszr" />
        </div>
    )
}
// video source https://www.pexels.com/video/5192103/download/?search_query=&tracking_id=c6k6hxjkszr
export default play
