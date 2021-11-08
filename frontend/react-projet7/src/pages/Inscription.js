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
          <input type="text" name="userName" id="username" {...register("userName")} required />
          <label htmlFor="email">ADRESSE EMAIL * </label>
          <input type="text" name="email" id="email"/>
          <label htmlFor="password">MOT DE PASSE * </label>
          <input type="password" name="password" id="password"/>
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
