import React, { useEffect, useState } from "react";
import Recommended from "../Recommended/Recommended";
import { FaFeatherAlt, FaHeart, FaHeartBroken, FaTrash } from "react-icons/fa";
import ContentComments from "../contentComments/ContentComments";
import { Link, useLocation } from "react-router-dom";
import "./Post.css";
import "../contentComments/RenderComments/Comments.css";
import {
  MdRemoveRedEye,
  MdThumbDown,
  MdThumbUp,
  MdOutlineBookmark,
  MdCoffee,
  MdThumbUpOffAlt,
  MdThumbDownOffAlt,
} from "react-icons/md";
import axios from "axios";
import { URL } from "../../urlStore";
// import { format } from "timeago.js";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";

/*eslint linebreak-style: ["error", "unix"]*/
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

function Post() {
  const [hideComments, setHideComments] = useState(false);
  const [hideRecommended, setHideRecommended] = useState(false);
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [recommend, setRecommend] = useState([]);

  const { currentUser } = useSelector((state) => state.user);
  const postPath = useLocation().pathname.split("/")[2];
  const userPath = useLocation().pathname.split("/")[3];

  useEffect(() => {
    const fetchData = async () => {
      if (postPath) {
        try {
          await axios.put(`${URL}posts/view/${postPath}`);
          console.log(3);
        } catch (error) {
          console.error(error.message);
        }
        try {
          const res = await axios.get(`${URL}posts/find/${postPath}`);
          setPost(res.data);
          console.log(2);
        } catch (error) {
          console.error(error.message);
        }
        try {
          const userRes = await axios.get(`${URL}users/find/${userPath}`);
          console.log(1);
          setUser(userRes.data);
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchRecommended = async () => {
      if (post) {
        try {
          const resRecommended = await axios.get(
            `${URL}posts/tags?tags=${post.tags}`
          );
          setRecommend(resRecommended.data);
						console.log(4);
        } catch (error) {
          console.error(error.message);
        }
      }else{
					console.log("aun no carga post");
			}
    };
			fetchRecommended()
  },[post]);
  const handleChangePost = async (e) => {
    e.preventDefault();
  };

  const handleDeletePost = async (e) => {
    e.preventDefault();
  };
  return (
    <section className="section-Recommended-container">
      {!recommend || !post || !user ? (
        <Loading />
      ) : (
        <>
          <div className="post-section">
            <div className="story-author-container">
              <div className="head-and-description-container">
                <div className="head">
                  <h1>
                    {" "}
                    <MdOutlineBookmark /> {post.title}
                  </h1>{" "}
                  <p className="createdat-style">{post.createdAt}</p>
                </div>
                {/* si es tuyo el comentario te deja DEl & EDIT*/}

                {currentUser?._id === userPath ? (
                  <div className="buttons-user-actio">
                    <button className="interaction" onClick={handleChangePost}>
                      <FaFeatherAlt /> Edit
                    </button>

                    <button className="interaction" onClick={handleDeletePost}>
                      <FaTrash /> Delete
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="body-post">
                <p className="parragraph-2">{post.description}</p>
              </div>
            </div>
            <div className="footer-container">
              <div className="footer__items__center bg-color">
                <div className="footer__items__center gap">
                  <Link
                    to={`/Profile/${post.userId}`}
                    className="link-list-user"
                  >
                    <img className="image-author-profile" src="adsad"></img>
                  </Link>
                  <Link
                    to={`/Profile/${post.userId}`}
                    className="link-list-user"
                  >
                    <h2 className="author-name-display">{user.username}</h2>
                  </Link>
                </div>
                <div className="footer__items__center gap">
                  <FaHeart className="icon-user-info" />
                  <p className="parragraph-3">{user.subscribers}</p>
                </div>
                <div className="footer__items__center gap">
                  <MdRemoveRedEye className="icon-user-info" />
                  <p className="parragraph-4">{post.views}</p>
                </div>
              </div>
              <div className="footer__items__center">
                <button className="like footer__items__center gap">
                  {post.likes?.includes(currentUser?._id) ? (
                    <MdThumbUp />
                  ) : (
                    <MdThumbUpOffAlt />
                  )}
                  <span> like</span>
                </button>
                <button className="dislike footer__items__center gap">
                  {post.dislikes?.includes(currentUser?._id) ? (
                    <MdThumbDown />
                  ) : (
                    <MdThumbDownOffAlt />
                  )}
                  <span> dislike</span>
                </button>
                <button className="Subscribe footer__items__center gap">
                  {/*deberia cambiar de color el boton de subscribirse idealmente*/}

                  {user.subscriberdUser?.includes(currentUser?._id) ? (
                    <FaHeartBroken />
                  ) : (
                    <FaHeart />
                  )}
                  {user.subscriberdUser?.includes(currentUser?._id) ? (
                    <span>Unubscribe</span>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </div>
              <button
                onClick={() => setHideComments(!hideComments)}
                className="hider-button"
              >
                {!hideComments ? "Hide Comments" : "Show Comments"}
              </button>
            </div>
            <div className={!hideComments ? "comentary-section" : "off"}>
              <h1 className="Discuss-coffe">
                <MdCoffee /> Discuss:{" "}
              </h1>

              <ContentComments postId={postPath} />
            </div>
            <button
              onClick={() => setHideRecommended(!hideRecommended)}
              className="hider-button"
            >
              {!hideRecommended ? "Hide Recomendations" : "Show Recomendations"}
            </button>
          </div>
          <div className="Recommended-section-node">
            <Recommended
              prop={hideRecommended}
              recommend={recommend}
              setRecommend={setRecommend}
              post={post}
            />
          </div>
        </>
      )}
    </section>
  );
}
export default Post;
