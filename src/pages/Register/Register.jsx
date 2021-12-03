import { Link } from 'react-router-dom'
import { Language, ArrowForwardIos } from '@mui/icons-material'
import { useState, useRef } from 'react'
import styled from 'styled-components'
import './Register.scss'



const Container = styled.div`

`


const Register = () => {

    const [email, setEmail] = useState("")
    const emailRef = useRef()
    const handleRegister = () => {
        setEmail(emailRef.current.value)
    }


    const [password, setPassword] = useState("")
    console.log(password)
    const passwordRef = useRef()
    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }


    return (
        <Container className="register" >
            <div className="register-wrapper">
                <div className="top">
                    <div className="right">
                        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    </div>
                    <div className="left">
                        <div className="lan-wrapper mb-1">
                            <Language className="lan-icon" />
                            <select name="lang" id="" className="select-lang" >
                                <option value="spanish"> Español </option>
                                <option value="english"> English </option>
                            </select>
                        </div>
                        <Link to='/login' className="router-link">
                            <button className="login-button" > Sign In </button>
                        </Link>
                    </div>
                </div>
                <div className="container">
                    <div className="container-wrapper">
                        <h1>Unlimited movies, TV</h1>
                        <h2 className="h1-title-below" >shows, and more.</h2>
                        <h2 className="h2-h2">Watch anywhere. Cancel anytime.</h2>
                        <p>
                            Ready to watch? Enter your email to create or restart your membership.
                        </p>
                        {!email ? (
                            <div className="input">
                                <input className="inp" type="email" name="" id="" placeholder="Email" ref={emailRef} />
                                <div className="r-btn-container">
                                    <button className="register-btn" onClick={handleRegister} > Register </button>
                                    <ArrowForwardIos />
                                </div>
                            </div>
                        ) : (
                            <form className="input-pass">
                                <input className="inp" type="password" placeholder="password" ref={passwordRef} />
                                <Link to='/home-page' className="r-btn-container">
                                    <button className="register-btn" onClick={handleFinish}> Start </button>
                                    <ArrowForwardIos />
                                </Link>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="add-tv">
                    <div className="add-tv-wrapper">
                        <div className="add-tv-text-content">
                            <h1 className="add-tv-title">Enjoy on your TV.</h1>
                            <h2 className="add-tv-content-h2">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                        </div>
                        <div className="add-tv-media-container">
                            <div className="add-tv-media-animation">
                                <img className="add-tv-photo" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                                <video className="add-tv-video" autoPlay loop muted playsinline src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></video>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="add-download">
                    <div className="add-download-wrapper">
                        <div className="add-download-wrapper-2">
                            <div className="add-download-text-content">
                                <h1 className="add-download-title">Download your shows to watch offline.</h1>
                                <h2 className="add-download-content-h2">Save your favorites easily and always have something to watch.</h2>
                            </div>
                            <div className="add-download-media-container">
                                <div className="add-download-media-container-2">
                                    <div className="add-download-photo-container">
                                        <img className="add-download-photo" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                                    </div>
                                    <div className="add-download-media-animation">
                                        <img className="add-d-animation-photo" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                                        <div className="add-download-media-text-container">
                                            <h2 className="add-download-sm-container-title"> Stranger Things </h2>
                                            <span className="add-downloading-download-indicator"> Downloading... </span>
                                        </div>
                                        <div className="add-download-sm-container-animation"><img className="add-download-animation-gift" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="add-watch">
                    <div className="main-wrapper">
                        <div className="wrapper">
                            <div className="description-content">
                                <h1 className="description-title"> Watch everywhere. </h1>
                                <h2 className="description-subtitle"> Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more. </h2>
                            </div>
                            <div className="media-content">
                                <div className="media-container media-tv-video">
                                    <img className="media-photo" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="" />
                                    <video className="media-video" autoPlay loop muted playsinline src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"></video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="for-kids">
                    <div className="main-wrapper">
                        <div className="wrapper">
                            <div className="description-content">
                                <h1 className="description-title"> Create profiles for kids. </h1>
                                <h2 className="description-subtitle"> Send kids on adventures with their favorite characters in a space made just for them—free with your membership. </h2>
                            </div>
                            <div className="media-content">
                                <div className="media-container">
                                    <img className="media-photo" src="https://occ-0-78-987.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="faq">

                    <div className="main-wrapper">
                        <div className="wrapper">
                            <h1 className="faq-title">
                                Frequently Asked Questions
                            </h1>
                            <div className="main-q-container">
                                <div className="q-container">
                                    <div className="container-title" onClick={{}} >
                                        <h2 className="title">What is Netflix?</h2>
                                    </div>
                                    <div className="container-body">
                                        <span>
                                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                                            <br />
                                            <br />
                                            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                                        </span>
                                    </div>
                                </div>
                                <div className="q-container">
                                    <div className="container-title">
                                        <h2 className="title">How much does Netflix cost?</h2>
                                    </div>
                                    <div className="container-body">
                                        <span>
                                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from MXN139 to MXN266 a month. No extra costs, no contracts.
                                        </span>
                                    </div>
                                </div>
                                <div className="q-container">
                                    <div className="container-title">
                                        <h2 className="title">Where can I watch?</h2>
                                    </div>
                                    <div className="container-body">
                                        <span>
                                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                            <br />
                                            <br />
                                            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




                <div className="footer">

                </div>
            </div>
        </Container>
    )
}

export default Register
