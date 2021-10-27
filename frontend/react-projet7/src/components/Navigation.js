import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/">
        Accueil
      </NavLink>
      <NavLink exact to="/inscription">
        Inscription
      </NavLink>
      <NavLink exact to="/connexion">
        Connexion
      </NavLink>
    </div>
  );
};

export default Navigation;
