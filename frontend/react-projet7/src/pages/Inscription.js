import React from "react";
import { useForm } from "react-hook-form";
import Navigation from "../components/Navigation";

const Inscription = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  }
  return (
    <div>
      <Navigation />
      <div className="formatting-form">
        <form className="inscr-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="userName">PSEUDO * </label>
          <input type="text" name="userName"  id="username" required />
          <label htmlFor="email">ADRESSE EMAIL * </label>
          <input type="text" name="email" id="email" required />
          <label htmlFor="password">MOT DE PASSE * </label>
          <input type="text" name="password" id="password" required />
          <div className="formatting-form">
            <button type="submit" className="button-form formatting-form">
              S'INSCRIRE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
