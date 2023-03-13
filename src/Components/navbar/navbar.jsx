import React, { useState } from "react";
import { data } from "./data";
import { loged } from "./data";
import { Link } from "react-router-dom";
import "./navbar.css";
import { MdMenu } from "react-icons/md";
import { useSelector } from "react-redux";

/*eslint linebreak-style: ["error", "unix"]*/
function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const showNabvar = () => {
    show ? setShow(false) : setShow(true);
  };
  console.log(currentUser);
  return (
    <nav className={show ? "NavbarContainer" : "NavbarContainerHide"}>
      <button className="Menu" onClick={() => showNabvar()}>
        <MdMenu />
      </button>
      <div className="UserProfile">
        {/*  <div className={show ? "UserPhoto" : "hide-text"}>
          <Link to={"/Profile"}>
            <img
              className={show ? "Photo" : "hide-text"}
              src="https://i.pinimg.com/originals/7b/b0/c7/7bb0c7c3684088adced7c455f9b0a307.jpg"
            />
          </Link>
        </div>*/}
        <h1 className={show ? "Username" : "hide-text"}>
          <Link className="Username" to={`/`}>
            {currentUser ? currentUser.others.username : ""}
          </Link>
        </h1>
      </div>
      <div className={show ? "responsive-navbar" : "responsive-simple-bar"}>
        <div className="UnLoged">
          {!currentUser ? (
            <ul className="List">
              {data.map((links) => {
                const { id, name, icon, url } = links;
                return (
                  <li className="LinkContainer" key={id}>
                    <Link to={url} className="link-list">
                      <div className={show ? "normal" : "big"}>{icon}</div>{" "}
                      <p className={show ? "show-text" : "hide-text"}>{name}</p>{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul className="List">
              {loged.map((log) => {
                const { id, name, icon, url } = log;
                return (
                  <li className="LinkContainer" key={id}>
                    <Link to={url} className="link-list">
                      <div className={show ? "normal" : "big"}>{icon}</div>{" "}
                      <p className={show ? "show-text" : "hide-text"}>{name}</p>{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
