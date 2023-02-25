import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/navbar/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/LoginScreen/Login'
import CardContainer from './Components/CardContainer/CardContainer'
import CreatePost from './Components/CreatePost/CreatePost'
class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/SignIn" element={<Login type="signin" secondType="signup" />} />
                    <Route path="/Home" element={<CardContainer type="random" />} />
                    <Route
                        path="/Subscriptions"
                        element={<CardContainer type="subscriptions" />}
                    />
                    <Route
                        path="/Trending"
                        element={<CardContainer type="trend" />}
                    />
                    <Route
                        path="/Post"
                        element={<CreatePost type="posts" />}
                    />
                    <Route
                        path="/Profile"
                        element={<CardContainer type="profile" />}
                    />
                </Routes>
            </Router>
        )
    }
}

export default App
