import './Featured.scss'
import { Link } from 'react-router-dom'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import styled from 'styled-components'
import { movies } from '../MoviesData'
import { useContext } from 'react';
import { FeaturedType } from './FeaturedState';



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
    padding: 2rem;
    background: rgba( 4, 4, 4, 0.6 );
    backdrop-filter: blur( 20px );
    box-shadow: 1px 0px 35px -1px rgba( 0, 0, 0, .8 );
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
`
const SmallSpan = styled.span`
    margin: 0.3rem;
`
const LinkStyle = {
    color: "black",
    textDecoration: "none"
}



const Featured = ({ data }) => {
    const file = data
    const movie = file[Math.floor(Math.random() * file.length)]

    const {type} = useContext(FeaturedType)

    return (
        <Container className="c">
            {type && (
                <div className="category">
                    <span className="type">{type === true ? "Series" : "Movies"}</span>
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
            <Image src={movie.photoCover} />
            <Info className="i">
                <h1 className="name"> {movie.name} </h1>
                <Span>
                    {movie.description}
                </Span>
                <ButtonsContainer className="b-c">
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
