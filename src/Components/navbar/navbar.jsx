import React from "react";
import { data } from "./data";
import { loged } from "./data";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-loged">
        <ul className="loged-list">
          {loged.map((log) => {
            const { id, name, icon, url } = log;
            return (
              <li key={id} className="orderred-list">
                <a href={url}>
                  {icon} {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="navbar-always">
        <ul className="list">
          {data.map((datas) => {
            const { id, name, icon, url } = datas;
            return (
              <li key={id} className="ordered-list">
                <a href={url}>
                  {icon} {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
