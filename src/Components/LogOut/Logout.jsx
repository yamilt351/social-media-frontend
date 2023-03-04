import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Logout.css";
import { logout } from "../redux/userSlice.js";

function LogOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    try {
      dispatch(logout());
      console.log("logout");
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="form-container-LogOut">
        <h1>¿Are sure you want to leave us?</h1>
        <div className="button-action-logout">
          <button onClick={handleLogOut}>YES</button>
          <button>NO</button>
        </div>
      </div>
    </>
  );
}
export default LogOut;
