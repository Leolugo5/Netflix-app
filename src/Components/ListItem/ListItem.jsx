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

function ListItem({ index }) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <Container className="list-item" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} >
            <img className="pic" src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />
            {isHovered && (
                <>
                    <video className="vid" src={trailer} autoPlay={true} loop ></video>

                    <div className="item-info">
                        <div className="icons">
                            <Link to='/waching' className="router-link" style={LinkStyle}>
                                <PlayArrow className="icon" />
                            </Link>
                            <Add className="icon" />
                            <ThumbUpOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </div>
                        <div className="item-info-top">
                            <span>1 hour 140 min</span>
                            <span className="age-limit">+16</span>
                            <span>1999</span>
                        </div>

                        <div className="description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, quam?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </div>

                        <div className="genere">Action</div>
                    </div>

                </>
            )}
        </Container>
    )
}

export default ListItem
