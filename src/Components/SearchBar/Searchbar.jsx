/* eslint-disable linebreak-style */

import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css";

/*eslint linebreak-style: ["error", "unix"]*/
function Searchbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const navigateTo = (e) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  };
  return (
    <div className="full-navbar-container">
      <div className="container__search">
        <input
          type="text"
          className="container__search__input"
          placeholder="Search here..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search__btn" onClick={navigateTo}>
          <MdSearch />
        </button>
      </div>
    </div>
  );
}
export default Searchbar;
