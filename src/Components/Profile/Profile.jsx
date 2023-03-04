/* eslint-disable linebreak-style */
import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { URL } from "../../urlStore";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../Card/card";
/*eslint linebreak-style: ["error", "unix"]*/

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const userId = useLocation().pathname.split("/")[2];
  const [user, setUser] = useState({});
  const [subscribed, setSubscribed] = useState([{}]);

  useEffect(() => {
    if (!userId) {
      const fetchData = async () => {
        const res = await axios.get(`${URL}users/find/${currentUser._id}`);
        setUser(res.data);
        if (user) {
          try {
            let store = currentUser.subscribedUser;
            for (let i = 0; i < store.length; i++) {
              const subscribedUsers = store[i];
              const resSubscribed = await axios.get(
                `${URL}users/find/${subscribedUsers}`
              );
              setSubscribed(resSubscribed.data);
              console.log(typeof subscribed);
              console.log(subscribed);
            }
          } catch (error) {
            console.error(error.message);
          }
        }
      };
      fetchData();
    } else {
      const fetchData = async () => {
        const res = await axios.get(`${URL}users/find/${userId}`);
        setUser(res.data);
        if (user) {
          try {
            const subscribed = user.subscribedUser;

            const resSubscribed = await axios.get(
              `${URL}users/find/${subscribed}`
            );
            setSubscribed(resSubscribed.data);
          } catch (error) {
            console.error(error.message);
          }
        }
      };
      fetchData();
    }
  }, [
    userId,
    currentUser._id,
    currentUser.subscribedUser,
    user.subscribedUser,
  ]);

  console.log(subscribed);
  return (
    <section className="profile-container-main" id="profile">
      <section className="user-profile-window-container">
        <div className="user-information-container">
          <div className="user-image-container">
            <img
              src="adasd"
              alt="user-image-profile"
              className="user-image-profile-following"
            />
          </div>
          <div className="user-data-container-profile">
            <div className="user-contact-information-container">
              <div className="username-container-profile">
                <h1 className="username-profile">{user.username}</h1>
              </div>
              <div className="email-container-profile">
                <h2 type="text" className="email-profile">
                  {user.email}
                </h2>
              </div>
              <div className="createdat-container-profile">
                <h2 type="text" className="created-profile">
                  Verified : {user.verified}
                </h2>
              </div>
              <div className="followers-container">
                <h3 className="followers-user">
                  followed by {user.subscribers} readers
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="following-users">
        <h1 className="following-users-title">FOLLOWING:</h1>
        <div className="following-users-container">
          <div className="user-followed-container">
            <Card
              username={subscribed.username}
              key={subscribed._id}
              email={subscribed.email}
            />
            ;
          </div>
        </div>
      </section>
    </section>
  );
}
export default Profile;
