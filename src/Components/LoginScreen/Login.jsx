import React, { useState } from 'react'
import './login.css'
/*eslint linebreak-style: ["error", "unix"]*/
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
        <section id="SignIn" className="SignIn">
            <div className="SignIn-Container">
                <h1>Welcome!</h1>
                {register ? (
                    <div className="form-container signUp">
                        <form className="form">
                            <input placeholder="E-mail" type="email"></input>
                            <input placeholder="Username" type="text"></input>
                            <input placeholder="Password" type="password" />
                        </form>
                        <button type="submit" className="action-button">
                            {' '}
              Create User
                        </button>
                        <button className="swichter-button" onClick={() => swicht()}>
                            {register ? 'Sign In' : 'Sign Up!'}
                        </button>
                    </div>
                ) : (
                    <div className="form-container signIn">
                        <form className="form">
                            <input placeholder="username" type="text"></input>
                            <input type="password" placeholder="password" />
                        </form>
                        <button type="submit" className="action-button">
                            {' '}
              Login{' '}
                        </button>
                        <button className="swichter-button " onClick={() => swicht()}>
                            {register ? 'Sign In' : 'Sign Up!'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Login
