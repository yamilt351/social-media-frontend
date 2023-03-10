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
    <div className="form-container-LogOut">
      <div className="modal">
        <h1>¿Are sure you want to leave us?</h1>
        <div className="button-action-logout">
          <button className='action-button btn__hover' onClick={handleLogOut}>YES</button>
          <button className='action-button' onClick={() => navigate('/')}>NO</button>
        </div>
      </div>
    </div>
  );
}
export default LogOut;
