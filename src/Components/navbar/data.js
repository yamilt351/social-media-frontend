import React from "react";
import {
	FaArrowCircleLeft,
  FaFileUpload,
  FaFire,
  FaHome,
  FaReadme,
  FaSignInAlt,
  FaUserAlt,
} from "react-icons/fa";

export const data = [
	{id:2, name: "Sign In", icon:<FaSignInAlt/>, url:"/SignIn"},
  { id: 1, name: "Home", icon: <FaHome />, url: "/Home" },
  { id: 3, name: "Trending Post", icon: <FaFire />, url: "/Trending" },
];

export const loged = [
  {id:0 ,name:"Log Out",icon:<FaArrowCircleLeft/>, url:"/LogOut"},
  { id: 1, name: "Profile", icon: <FaUserAlt />, url: "/Profile" },
  { id: 2, name: "Subscriptions", icon: <FaReadme />, url: "/Subscriptions" },
  { id: 3, name: "Create Post", icon: <FaFileUpload />, url: "/Post" },
  
];
