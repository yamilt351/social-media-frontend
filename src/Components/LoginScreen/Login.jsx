import React, { useState } from 'react'
import './login.css'

function Login() {
    const [register, setRegister] = useState(true)

    function swicht() {
        if (register) {
            setRegister(false)
        } else {
            setRegister(true)
        }
        return register
    }

    return (
<<<<<<< HEAD
        <section id="SignIn" className="SignIn">
            <div className="SignIn-Container">
                <h1>Welcome!</h1>
=======
        <section id="SignIn" className="login-screen">
            <div className="form-action-container">
>>>>>>> 4ad3eda (axios-installed)
                {register ? (
                    <div className="form-container">
                        <form className="form">
                            <input placeholder="E-mail" type="email"></input>
                            <input placeholder="Username" type="text"></input>
                            <input placeholder="Password" type="password" />
                        </form>
                        <div className="buttons-container">
                            <div type="submit" className="action-button">
                                {' '}
                Create User
                            </div>
                            <div className="swichter-button" onClick={() => swicht()}>
                                {register ? 'Sign In' : 'Sign Up!'}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="form-container">
                        <form className="form">
                            <input placeholder="username" type="text"></input>
                            <input type="password" placeholder="password" />
                        </form>
<<<<<<< HEAD
                        <button type="submit" className="action-button">
                            {' '}
              Login{' '}
                        </button>
                        <button className="swichter-button " onClick={() => swicht()}>
                            {register ? 'Sign In' : 'Sign Up!'}
                        </button>
=======
                        <div className="buttons-container">
                            <div type="submit" className="action-button">
                                {' '}
                Login{' '}
                            </div>
                            <div className="swichter-button" onClick={() => swicht()}>
                                {register ? 'Sign In' : 'Sign Up!'}
                            </div>
                        </div>
>>>>>>> 4ad3eda (axios-installed)
                    </div>
                )}
            </div>
        </section>
    )
}

export default Login
