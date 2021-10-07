import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './Login.scss'

const Container = styled.div`

`

const Login = () => {
    return (
        <Container className="main-container">
            <div className="main-wrapper">
                <div className="top">
                    <div className="logo-container">
                        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    </div>
                </div>

                <div className="login-form">
                    <div className="form-wrapper">
                        <form action="" className="main-form">
                            <h1 className="title">
                                Sign In
                            </h1>
                            <div className="input-container">
                                <input type="text" className="email inp" placeholder="Email or phone number" />
                                <input type="password" className="password inp" placeholder="Password" />
                            </div>
                            <Link to='/home-page' className="router-link">
                                <button className="send-btn"> Sign In </button>
                            </Link>
                            <div className="remember-help-container">
                                <div className="remember-container">
                                    <input type="checkbox" name="" id="" className="save-user" />
                                    <span className="remember-me-tag">
                                        Remember Me
                                    </span>
                                </div>
                                <a href="./" className="help"> Need help? </a>
                            </div>
                        </form>

                        <div className="register-link">
                            <h2 className="register-title">New to Netflix? </h2>
                            <Link to='/register' className="router-link">
                                <a href="./" className="register-link">Sign up now.</a>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </Container>
    )
}

export default Login
