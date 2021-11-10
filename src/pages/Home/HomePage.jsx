import styled from 'styled-components'
import Featured from '../../Components/Featured/Featured'
import NavBar from '../../Components/NavBar/NavBar'
import List from '../../Components/List/List'
import Footer from '../../Components/Footer/Footer'
import { movies, netflix, country, weekend } from '../../Components/MoviesData'
import { useState } from 'react'
import { FeaturedType } from '../../Components/Featured/FeaturedState'



const Container = styled.div`
    background-color: #0b0b0b;
    color: whitesmoke;
    overflow: hidden;
    width: 100%;
`

const HomePage = () => {
    const continueTo = "Continue to Watch"
    const popOnNetflix = "Popular on Netflix"
    const popCountry = "Popular in your Country"
    const finishWeekend = "Finish this weekend"

    const [type, setType] = useState(true)

    return (
        <Container>
            <FeaturedType.Provider value={{ type, setType }}>
                <NavBar />
                <Featured data={movies} />
            </FeaturedType.Provider>
            <List title={continueTo} movies={netflix} />
            <List title={popOnNetflix} movies={movies} />
            <List title={popCountry} movies={country} />
            <List title={finishWeekend} movies={weekend} />
            <Footer />
        </Container>
    )
}

export default HomePage
