import React from "react";
import { MdCoffee } from "react-icons/md";
import { useSelector } from "react-redux";
import "./ValidateScreen.css";

function ValidateScreen() {
  const { currentUser } = useSelector((state) => state.user);
console.log(currentUser);
  return (
    <section className="validateScren">
      <div className="validatescreen">
        <h1>
          Welcome {currentUser.name}! <MdCoffee />
        </h1>
        <p> your account now is verified</p>
      </div>
    </section>
  );
}
export default ValidateScreen;
