import './List.scss'
import styled from 'styled-components'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import ListItem from '../ListItem/ListItem'
import { useRef, useState } from 'react'


const Container = styled.div`

`
const ListCategoryName = styled.span`

`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
`
const ListItemContainer = styled.div`
    display: flex;
    flex-direction: row;
`


const List = ({title, movies}) => {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };
    return (
        <Container className="main">
            <ListCategoryName className="list-category-name" > {title} </ListCategoryName>
            <Wrapper className="wrapper" >
                <KeyboardArrowLeft className="arrow aleft" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }} />
                <ListItemContainer className="list-item-container" ref={listRef} >
                    {movies.map((movie) => {
                        return <ListItem movie={movie} id={movie.id} />
                    })}
                </ListItemContainer>
                <KeyboardArrowRight className="arrow aright" onClick={() => handleClick("right")} />
            </Wrapper>
        </Container>
    )
}

export default List
