import React, { useState } from "react";
import "./index.css";
import { MdCoffee } from "react-icons/md";
import axios from "axios";
import { URL } from "../../../urlStore";
import { useSelector } from "react-redux";
/*eslint linebreak-style: ["error", "unix"]*/
const CreateComment = () => {
  const [comments, setComments] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  const handleComment = async (e) => {
    e.preventDefault();
    if (currentUser) {
      try {
        const userId = currentUser._id;
        await axios.post(`${URL}comments/`, { comments, userId });
      } catch (error) {
        console.error(error.message);
      }
    } else {
      console.log(currentUser);
    }
  };
  return (
    <section className="comment">
      <div className="comment-head">
        <img className="user-profile-image" alt="" src="adasdasd" />
      </div>
      <form action="" className="comment-form">
        <textarea
          className="coment-form-input"
          placeholder="What is your opinion?"
          rows="5"
          onChange={(e) => setComments(e.target.value)}
        />

        <button className="comment-form-btn" onClick={handleComment}>
          <MdCoffee /> Discuss
        </button>
      </form>
    </section>
  );
};

export default CreateComment;
