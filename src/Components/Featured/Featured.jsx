import './Featured.scss'
import { Link } from 'react-router-dom'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import styled from 'styled-components'
import { movies } from '../MoviesData'



const Container = styled.div`
    height: 90vh;
    position: relative;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    align-items: center;
`
const Info = styled.div`
    width: 35%;
    position: absolute; 
    left: 2rem;
    bottom: 4rem;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
`
const Span = styled.span`
    margin: 1.7rem 0;
`
const ButtonsContainer = styled.div`
    display: flex;
`
const Buttons = styled.button`
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    &.play {
        background-color: white;
        color: #0b0b0b;
    }
    &.more {
        background-color: #636161;
        color: whitesmoke;
    }
    &:hover {
        transform: scale(1.01);
    }
`
const SmallSpan = styled.span`
    margin: 0.3rem;
`
const LinkStyle = {
    color:"black",
    textDecoration: "none"
}



const Featured = ({ type }) => {
    return (
        <Container>
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genere" id="genere">
                        <option>Genere</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <Image src="https://images.pexels.com/photos/3626733/pexels-photo-3626733.jpeg?cs=srgb&dl=pexels-daria-shevtsova-3626733.jpg&fm=jpg" />
            <Info>
                <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />

                <Span>
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Minima cumque ex dolorem,
                    rerum itaque culpa dicta iure similique eaque,
                    doloribus repellat! Ab veniam voluptas
                    enim qui delectus quidem. Magnam, tempore
                    animi magni porro quasi eaque unde quis
                    voluptatem vitae minus doloribus eveniet
                    voluptates voluptatibus dicta ratione, dolore velit
                    soluta laborum!
                </Span>
                <ButtonsContainer>
                    <Link to='/waching' className="router-link" style={LinkStyle} movie={movies[5].trailer} >
                        <Buttons className="play" >
                            <PlayArrowIcon />
                            <SmallSpan>Play</SmallSpan>
                        </Buttons>
                    </Link>
                    <Buttons className="more" >
                        <InfoOutlinedIcon />
                        <SmallSpan>More Info</SmallSpan>
                    </Buttons>
                </ButtonsContainer>
            </Info>
        </Container>
    )
}

export default Featured
