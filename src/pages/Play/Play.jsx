import './Play.scss'
import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router';

const Play = () => {
    const location = useLocation()
    const { movie } = location.state
    const { name } = location.state
    const file = movie

    return (
        <div className="watch">
            <div className="top">
                <div className="back">
                    <Link to='/home-page' className="router-link">
                        <ArrowBackOutlined className="arr" />
                        Home
                    </Link>
                </div>
                <h1 className="name">
                    {name}
                </h1>
            </div>
            <video className="video" progress controls src={file} loop autoPlay />
        </div>
    )
}
// video source https://www.pexels.com/video/5192103/download/?search_query=&tracking_id=c6k6hxjkszr
export default Play
