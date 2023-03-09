import axios from "axios";
import React, { useState } from "react";
import { URL } from "../../urlStore";
import "./login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginStart, loginSuccess, loginFailure } from "../redux/userSlice.js";

/*eslint linebreak-style: ["error", "unix"]*/
function Login() {
  const [register, setRegister] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function swicht() {
    if (register) {
      setRegister(false);
    } else {
      setRegister(true);
    }
    return register;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(
        `${URL}auth/signin`,
        { name, password },
        { withCredentials: true, credentials: "include" }
      );
      dispatch(loginSuccess(res.data));

      navigate("/");
    } catch (error) {
      console.error(error.message);
      dispatch(loginFailure());
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${URL}auth/signUp`, { name, password, email });
    } catch (error) {
      console.error(error.message);
    }
  };

  // var req = new XMLHttpRequest();
  // req.open('GET', document.location, false);
  // req.send(null);
  // var headers = req.getAllResponseHeaders().toLowerCase();
  // alert(headers['set-cookie']);

  return (
    <section id="SignIn" className="SignIn">
      <div className="SignIn-Container">
        <h1>Welcome!</h1>
        {register ? (
          <div className="form-container signUp">
            <form className="form">
              <input
                placeholder="E-mail"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                placeholder="Username"
                type="text"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <button
              type="submit"
              className="action-button"
              onClick={handleRegister}
            >
              {" "}
              Create User
            </button>
            <button className="swichter-button" onClick={() => swicht()}>
              {register ? "Sign In" : "Sign Up!"}
            </button>
          </div>
        ) : (
          <div className="form-container signIn">
            <form className="form">
              <input
                placeholder="username"
                type="text"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <button
              type="submit"
              className="action-button"
              onClick={handleLogin}
            >
              {" "}
              Login{" "}
            </button>
            <button className="swichter-button " onClick={() => swicht()}>
              {register ? "Sign In" : "Sign Up!"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Login;
