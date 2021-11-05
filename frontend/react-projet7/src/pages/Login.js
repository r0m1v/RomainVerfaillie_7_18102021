import React from "react";
import Navigation from "../components/Navigation";

const Login = () => {
  return (
    <div>
      <Navigation />
      <div className="formatting-form">
        <div className="login-form">
          <form>
            <label htmlFor="email">ADRESSE EMAIL * </label>
            <input type="text" name="email" id="email" required />
            <label htmlFor="password">MOT DE PASSE * </label>
            <input type="text" name="password" id="password" required />
          </form>
          <div className="formatting-form">
            <button type="submit" className="button-form">
              SE CONNECTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
