import React from "react";
import Navigation from "../components/Navigation";

const Inscription = () => {
  return (
    <div>
      <Navigation />
      <div className="formatting-form">
        <div className="inscr-form">
          <form>
            <label htmlFor="UserName">PSEUDO * </label>
            <input type="text" name="UserName" id="username" required />
            <label htmlFor="email">ADRESSE EMAIL * </label>
            <input type="text" name="email" id="email" required />
            <label htmlFor="password">MOT DE PASSE * </label>
            <input type="text" name="password" id="password" required />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
