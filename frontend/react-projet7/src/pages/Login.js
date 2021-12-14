import React from "react";
import { useForm } from "react-hook-form";
import Navigation from "../components/Navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const Login = () => {
  const [message, setMessage] = React.useState(null);
  const { register, handleSubmit, formState, setError } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { errors, isSubmitting } = formState;
  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await res.json();
      console.log(responseData);
      if (+res.status >= 400) {
        throw new Error(responseData.error);
      }
      setMessage(responseData.message);
      localStorage.setItem("access_token", responseData.token);
      localStorage.setItem("username", responseData.username);
      window.location = "../Account";
    } catch (err) {
      // faire en sorte d'afficher un message d'erreur pour l'utilisateur
      setError("username", {
        type: "manual",
        message: err.message,
      });
      setMessage("Erreur");
    }
  };
  return (
    <div>
      <Navigation />
      <div className="formatting-form">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">ADRESSE EMAIL * </label>
          <input
            className="field-inscr"
            style={{ textTransform: "lowercase" }}
            {...register("email")}
          />
          <label htmlFor="password">MOT DE PASSE * </label>
          <input
            className="field-inscr"
            type="password"
            {...register("password")}
          />
          <div className="formatting-form">
            <button
              type="submit"
              disabled={isSubmitting}
              className="button-form"
            >
              SE CONNECTER
            </button>
          </div>
          <div className="mess-err">
          {message && <p style={{ color: "red" }}>{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
