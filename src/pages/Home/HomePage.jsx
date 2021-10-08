import styled from 'styled-components'
import Featured from '../../Components/Featured/Featured'
import NavBar from '../../Components/NavBar/NavBar'
import List from '../../Components/List/List'


const Container = styled.div`
    background-color: #0b0b0b;
    color: whitesmoke;
    overflow: hidden;
`

const HomePage = () => {
    return (
        <Container>
            <NavBar />
            <Featured />
            <List />
            <List />
            <List />
        </Container>
    )
}

export default HomePage
