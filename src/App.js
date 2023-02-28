import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/navbar/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/LoginScreen/Login'
import CardContainer from './Components/CardContainer/CardContainer'
import CreatePost from './Components/CreatePost/CreatePost'
import Post from './Components/Posts/Post'
import Searchbar from './Components/SearchBar/Searchbar'
import Profile from './Components/Profile/Profile'
class App extends Component {

    render() {
 
        return (
            <Router>
                <Searchbar />
                <Navbar />
                <Routes>
                    <Route
                        path="/SignIn"
                        element={<Login type="signin" secondType="signup" />}
                    />
                    <Route
                        path="/"
                        element={<CardContainer type="random" indicator="Home" />}
                    />
                    <Route
                        path="/Subscriptions"
                        element={
                            <CardContainer type="subscriptions" indicator="Subscriptions" />
                        }
                    />
                    <Route
                        path="/Trending"
                        element={<CardContainer type="trend" indicator="Popular" />}
                    />
                    <Route path="/Post" element={<CreatePost type="posts" />} />
                    <Route path="/Profile" element={<Profile type="profile" />} />
                    <Route path="/Post/id" element={<Post />} />
                </Routes>
            </Router>
        )
    }
}

export default App
