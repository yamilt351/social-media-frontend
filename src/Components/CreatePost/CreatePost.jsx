import axios from "axios";
import React, { useState } from "react";
import {
  MdChatBubble,
  MdSearch,
  MdTipsAndUpdates,
} from "react-icons/md";
import { useSelector } from "react-redux";
/*eslint linebreak-style: ["error", "unix"]*/
import "./CreatePost.css";
import { URL } from "../../urlStore";
import {useNavigate} from 'react-router-dom';

function CreatePost() {
  const { currentUser } = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const navigate = useNavigate();

  const handleCreatePost = async (e) => {
			e.preventDefault()
    if (currentUser) {
      const userId = currentUser._id;
      try {
        await axios.post(`${URL}posts/`, { post, title, userId });
					navigate('/')
      } catch (error) {
        console.error(error.message);
      }
    } else {
      console.log(currentUser);
    }
  };

  return (
    <section className="container">
      <div className="container__center">
        <h1 className="container__title">Share your Story with us!</h1>
        <form action="" className="form-post">
          <label htmlFor="">
            <MdTipsAndUpdates /> Title
          </label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>
            <MdChatBubble /> Write your Post here!
          </label>
          <textarea
            type="textarea"
            placeholder="Post"
            rows="10"
            onChange={(e) => setPost(e.target.value)}
          />
          <label htmlFor="">
            <MdSearch /> Make easy to find your post using tags!
          </label>
          <input type="text" placeholder=" Separate tags by comma" />
          <button className="button-post" onClick={handleCreatePost}>
            Ready!
          </button>
        </form>
      </div>
    </section>
  );
}
export default CreatePost;
