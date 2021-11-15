import React from "react";
import { useForm } from "react-hook-form";
import Navigation from "../components/Navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Inscription = () => {
  const { register, handleSubmit, formState, errors } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { isSubmitting, isSubmitSuccessful } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);
  
  return (
    <div>
      <Navigation />
      <div className="formatting-form">
        <form className="inscr-form" onSubmit={handleSubmit(onSubmit)}>
          {isSubmitSuccessful && <span>Merci pour l'inscription</span>}
          <br />
          <label htmlFor="userName">PSEUDO * </label>
          <input
            defaultValue={"JohnDoe"}
            type="text"
            name="userName"
            id="username"
            {...register("userName")}
          />
          <label htmlFor="email">ADRESSE EMAIL * </label>
          <input
            defaultValue={"johndoe@gmail.com"}
            type="text"
            name="email"
            id="email"
            {...register("email")}
          />
          <label htmlFor="password">MOT DE PASSE * </label>
          <input
            defaultValue={"1234"}
            type="password"
            name="password"
            id="password"
            {...register("password")}
          />
          <div className="formatting-form">
            <button
              disabled={isSubmitting}
              type="submit"
              className="button-form formatting-form"
            >
              S'INSCRIRE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
