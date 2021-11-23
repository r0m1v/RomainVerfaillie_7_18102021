import React from "react";
import { useForm } from "react-hook-form";
import Navigation from "../components/Navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const Inscription = () => {
  const [message, setMessage] = React.useState(null);
  const { register, handleSubmit, formState, setError } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { errors, isSubmitting, isSubmitSuccessful } = formState;
  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await res.json();

      if (+res.status >= 400) {
        throw new Error(responseData.error);
      }
      setMessage(responseData.message);
    } catch (err) {
      // faire en sorte d'afficher un message d'erreur pour l'utilisateur
      setError("username", {
        type: "manual",
        message: err.message,
      });
      setMessage(err.message);
    }
  };
  console.log({ errors });

  return (
    <div>
      <Navigation />
      <div className="formatting-form">
        {message && <p style={{ color: "red" }}>{message}</p>}
        <form className="inscr-form" onSubmit={handleSubmit(onSubmit)}>
          {isSubmitSuccessful && <span>Merci pour l'inscription</span>}
          <br />
          <label htmlFor="username">PSEUDO * </label>
          <input
            className="field-inscr"
            defaultValue={"Johndoe"}
            type="text"
            name="username"
            id="username"
            {...register("username")}
          />
          <label htmlFor="email">ADRESSE EMAIL * </label>
          <input
            className="field-inscr"
            style={{ textTransform: "lowercase" }}
            defaultValue={"johndoe@gmail.com"}
            type="text"
            name="email"
            id="email"
            {...register("email")}
          />
          <label htmlFor="password">MOT DE PASSE * </label>
          <input
            className="field-inscr"
            defaultValue={"123456"}
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
