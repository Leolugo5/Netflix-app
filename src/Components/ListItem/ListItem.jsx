import './ListItem.scss'
import styled from 'styled-components'
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material'
import { useState } from 'react';
import { Link } from 'react-router-dom'



const Container = styled.div`
    width: 14rem;
    height: 8rem;
    background-color: #0b0b0b;
    margin: 0px 5px;
    text-align: center;
`
const LinkStyle = {
    color:"white",
    textDecoration: "none"
}

function ListItem({ id, movie }) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = `${movie.trailer}`;
    return (
        <Container className="list-item" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ left: isHovered && id * 225 - 250 + id * 2.5 }} >
            <img className="pic" src={movie.photoCover} alt="" />
            {isHovered ? (
                <>
                    <video className="vid" src={trailer} autoPlay={true} loop ></video>

                    <div className="item-info">
                        <div className="icons">
                            <Link to='/waching' className="router-link" style={LinkStyle} movie={movie.trailer} >
                                <PlayArrow className="icon" />
                            </Link>
                            <Add className="icon" />
                            <ThumbUpOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </div>
                        <div className="item-info-top">
                            <span> {movie.time} </span>
                            <span className="age-limit">+16</span>
                            <span> {movie.date} </span>
                        </div>

                        <div className="description">
                            {movie.description}
                        </div>

                        <div className="genere"> {movie.genere} </div>
                    </div>

                </>
            ): null }
        </Container>
    )
}

export default ListItem
