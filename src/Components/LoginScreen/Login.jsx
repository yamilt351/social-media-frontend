import React, { useState } from 'react'
import './login.css'

function Login() {
    const[register, setRegister] = useState(true)

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
            <h1>Welcome!</h1>
            {register? 
                <div className='form-container signUp'>
                    <form className='form'>
                        <input placeholder='email' type="email"></input>
                        <input placeholder='username' type="text"></input>
                        <input type="password" placeholder='password'/>
                    </form>
                    <button type='submit' className='action-button'> Create User</button>
                </div>: <div className='form-container signIn'>
                    <form className='form'>
                        <input placeholder='username' type="text"></input>
                        <input type="password" placeholder='password'/>
                    </form>
                    <button type='submit' className='action-button'> Login </button>
                </div>
            }
            <button className='swichter-button' onClick={()=>swicht()}>
                {register? 'Do you have an account? Sign In' : 'Dont have an account? Sign Up!'}

            </button>
        </section>
    )
}

export default Login
