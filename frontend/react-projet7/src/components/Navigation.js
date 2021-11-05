import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <img src="./images/icon-white.png" alt="logo" />
      </div>
      <div className="links-home">
        <NavLink exact to="/" activeClassName="nav-active">
          <h2>Accueil</h2>
        </NavLink>
        <NavLink exact to="/inscription" activeClassName="nav-active">
          <h2>Inscription</h2>
        </NavLink>
        <NavLink exact to="/connexion" activeClassName="nav-active">
          <h2>Connexion</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
