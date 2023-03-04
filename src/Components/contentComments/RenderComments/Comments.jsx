import React from "react";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import "./Comments.css";
import { Link} from "react-router-dom";
import { format } from "timeago.js";
import { FaFeatherAlt, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
function Comment({ description, userId, like, dislike, createdat,id }) {
  const { currentUser } = useSelector((state) => state.user);
  {
    /* nose como convertir el campo en editable y obtener los valores del campo*/
  }

  {
    /* CAMPOS VALIDADOS POR TOKEN */
  }

  const handleChangeComment = async (e) => {
    e.preventDefault();
    if (currentUser) {
      try {
        const userId = currentUser._id;
        await axios.put(`${URL}comments/`, { userId });
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  const handleDeleteComment = async (e) => {
    e.preventDefault();
    if (currentUser) {
      try {
        await axios.delete(`${URL}comments/${id}`);
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  const handleLikeComment = async (e) => {
    e.preventDefault();
    if (currentUser) {
      try {
        await axios.put(`${URL}users/likeComment/${id}`);
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  const handleDislikeComment = async (e) => {
    e.preventDefault();
    if (currentUser) {
      try {
        await axios.put(`${URL}users/dislikeComment/${id}`);
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <div className="comment-render">
      <div className="user-data-container">
        <Link to={`/Profile/${userId}`} className="link-list-user">
          <img src="adasda" className="profile-comment-picture" />
        </Link>
        <Link to={`/Profile/${userId}`} className="link-list-user">
          <h2>{currentUser.username}.</h2>
        </Link>
      </div>
      <div className="comment-render-container">
        <p className="comment-parragraph">{description}</p>
        <div className="ago-and-actions">
          <p>{format(createdat)}</p>
					{/* si es tuyo el comentario te deja DEl & EDIT*/}

          {currentUser._id === userId? (
            <div className="buttons-user-action">
              <button className="interaction" onClick={handleChangeComment}>
                <FaFeatherAlt /> Edit
              </button>

              <button className="interaction" onClick={handleDeleteComment}>
                <FaTrash /> Delete
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="buttons-user-action">
            <button className="interaction" onClick={handleLikeComment}>
              <MdThumbUp />
              {like}
            </button>
            <button className="interaction" onClick={handleDislikeComment}>
              {" "}
              <MdThumbDown />
              {dislike}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comment;
