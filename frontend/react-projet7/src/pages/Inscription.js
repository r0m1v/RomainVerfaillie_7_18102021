import React from "react";
import Navigation from "../components/Navigation";

const Inscription = () => {
  return (
    <div>
      <Navigation />
      <form>
        <label for="email">Adresse e-mail * </label>
        <input type="text" name="email" id="email" required />
        <br />
        <label for="password">Mot de passe * </label>
        <input type="text" name="password" id="password" required />
      </form>
    </div>
  );
};

export default Inscription;
