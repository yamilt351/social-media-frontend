import React from "react";
import {
  FaArrowCircleLeft,
  FaFire,
  FaHome,
  FaHeart,
  FaSignInAlt,
  // FaUserAlt,
  FaFeather,
} from "react-icons/fa";

export const data = [
  { id: 2, name: "Sign In", icon: <FaSignInAlt />, url: "/SignIn" },
  { id: 1, name: "Home", icon: <FaHome />, url: "/" },
  { id: 3, name: "Trending Post", icon: <FaFire />, url: "/Trending" },
];

export const loged = [
  { id: 0, name: "Home", icon: <FaHome />, url: "/" },
  { id: 1, name: "Trending Post", icon: <FaFire />, url: "/Trending" },

  { id: 2, name: "Subscriptions", icon: <FaHeart />, url: "/Subscriptions" },
  // { id: 3, name: "Profile", icon: <FaUserAlt />, url: "/Profile" },
  { id: 4, name: "Create Post", icon: <FaFeather />, url: "/CreatePost" },
  { id: 5, name: "Log Out", icon: <FaArrowCircleLeft />, url: "/LogOut" },
];
