/* eslint-disable linebreak-style */
import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/LoginScreen/Login";
import CardContainer from "./Components/CardContainer/CardContainer";
import CreatePost from "./Components/CreatePost/CreatePost.jsx";
import Post from "./Components/Posts/Post";
import Searchbar from "./Components/SearchBar/Searchbar";
import Profile from "./Components/Profile/Profile";
import LogOut from "./Components/LogOut/Logout";
import Search from './Components/SearchBar/Search';
import ProtectedRoutes from "./Components/ProtectedRoutes";
/*eslint linebreak-style: ["error", "unix"]*/

class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<CardContainer type="random" indicator="Home" />} />
          <Route path="/SignIn" element={<Login type="signin" secondType="signup" />} />
          <Route path='/search' element={<Search />} />
          <Route path="/Trending" element={<CardContainer type="trend" indicator="Popular" />} />
          <Route path="/Post">
            <Route path=":id/:userId" element={<Post />} />
          </Route>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/Subscriptions" element={<CardContainer type="subscriptions" indicator="Subscriptions" />} />
            <Route path="/CreatePost" element={<CreatePost type="posts" />} />
            <Route path="/Profile" element={<Profile type="profile" />} />
            <Route path="/Logout" element={<LogOut />} />
          </Route>
        </Routes>
        </>
    );
  }
}

export default App;
