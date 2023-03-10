import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';

import './login.css'

const LoginScreeem = () => {

  const [registered, setRegisterd] = useState(true);

  function swicht() {
    return registered ? setRegisterd(false) : setRegisterd(true);
  }

  return (
    <section id="SignIn" className="SignIn">
      <div className="SignIn-Container">
        <ToastContainer />
        <h1>Welcome!</h1>
        {
          registered ? (
            <FormLogin />
          ) : (
            <FormRegister setRegisterd={setRegisterd} />
          )}
        <p className="swichter-button" onClick={swicht} > {registered ? "¿You do not have an account?" : "Login"}</p>
      </div>
    </section>
  );
}

export default LoginScreeem
