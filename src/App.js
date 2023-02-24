import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginScreen/Login.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/SignIn" element={<Login/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
