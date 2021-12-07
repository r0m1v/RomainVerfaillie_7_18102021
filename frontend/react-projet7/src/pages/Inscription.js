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
      setMessage("Le pseudo doit être composé de 4 caractères minimum");
    }
  };
  console.log({ errors });

  return (
    <div>
      <Navigation />
      <div className="formatting-form">
        <form className="inscr-form" onSubmit={handleSubmit(onSubmit)}>
          <br />
          <label htmlFor="username">PSEUDO * </label>
          <input
            placeholder="4 caractères min."
            className="field-inscr"
            type="text"
            name="username"
            id="username"
            {...register("username")}
          />
          <label htmlFor="email">ADRESSE EMAIL * </label>
          <input
            className="field-inscr"
            style={{ textTransform: "lowercase" }}
            {...register("email")}
          />
          <label htmlFor="password">MOT DE PASSE * </label>
          <input
            placeholder="6 caractères min."
            className="field-inscr"
            type="password"
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
          <div className="mess-thx">
            {isSubmitSuccessful && <span>Merci pour l'inscription</span>}
          </div>
          <div className="mess-err">
            {message && <p style={{ color: "red" }}>{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
