import { Link } from 'react-router-dom'
import './NavBar.scss'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

const Container = styled.div`
    color: whitesmoke;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
`
const Wrapper = styled.div`
    padding: 0 3rem;
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 2;
`
const Image = styled.img`
    left: 0;
    height: 25px;
    margin-right: 40px;
`
const Right = styled.div`
    display: flex;
    align-items: center;
`
const ProfilePic = styled.img`
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`
const Span = styled.span`
    margin: 2rem;
    cursor: pointer;
`




const NavBar = () => {

    const [scroll, setScroll] = useState(false)
    window.onscroll = () => {
        setScroll(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }



    return (
        <Container className={scroll ? "scrolled" : "navbar"}>
            <Wrapper className="wrapper">
                <Left>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
                    <div className="to-wach" >
                        <Span>Home</Span>
                        <Span>Series</Span>
                        <Span>Movies</Span>
                        <Span>New and Popular</Span>
                        <Span>My List</Span>
                    </div>
                </Left>
                <Right>
                    <SearchIcon className="icon" />
                    <Span>KID</Span>
                    <NotificationsIcon className="icon" />
                    <ProfilePic src="https://media-exp1.licdn.com/dms/image/C4E03AQE7YM4OexacYg/profile-displayphoto-shrink_200_200/0/1629179164582?e=1637798400&v=beta&t=yxCKk3QhBN4-IcvUCX7geMRw0GFftdZHlj48RpcI51k" />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon" />
                        <div className="options">
                            <span className="profile-span" >Settings</span>
                            <Link to='/login' className="router-link">
                                <span className="profile-span" >Log Out</span>
                            </Link>
                        </div>
                    </div>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar
