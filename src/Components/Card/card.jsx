import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdThumbUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { URL } from "../../urlStore";
import "./card.css";
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

/*eslint linebreak-style: ["error", "unix"]*/
function Card({ userId, like, title, createdAt, id, description }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      const fetchDataUser = async () => {
        const responseUserData = await axios.get(`${URL}users/find/${userId}`);
        const dataUser = responseUserData.data;
        setUser(dataUser);
      };
      fetchDataUser();
    } catch (error) {
      console.error(error.message);
    }
  }, [userId]);

  return (
    <Link className="link-list" to={`/Post/${id}/${userId}`}>
      <div className="card-container">
        <div className="titles">
          <h2 className="Story">{title}</h2>
        </div>
        <div>
          <p className="text-description">{description}</p>
          <h3 className="autor">{user.username}</h3>
          <div className="footer-card-container">
            <div className="like-container-card">
              <p className="CreatedAt">
                <MdThumbUp /> {like?.length}{" "}
              </p>
            </div>
            <div className="createdAt-card-container">
              <p className='CreatedAt'>
                {format(createdAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
