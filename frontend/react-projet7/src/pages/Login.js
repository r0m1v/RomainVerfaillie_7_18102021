import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navigation from "../components/Navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const Login = ({ Login, error }) => {
  const [message, setMessage] = React.useState(null);
  const { register, handleSubmit, formState, setError } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { errors, isSubmitting, isSubmitSuccessful } = formState;
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

      if (+res.status >= 400) {
        throw new Error(responseData.error);
      }
      setMessage(responseData.message);
      localStorage.setItem("access_token", responseData.token);
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
            <button type="submit" className="button-form">
              SE CONNECTER
            </button>
          </div>
          {message && <p style={{ color: "red" }}>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;

// import React, {useState} from "react";
// import axios from "axios";
// import Navigation from "../components/Navigation";

// const Login = () => {
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const handleLogin = (e) => {
// }
//   return (
//     <div>
//       <Navigation />
//       <div className="formatting-form">
//         <div className="login-form">
//           <form action="" onSubmit={handleLogin} id="login_form">
//             <input type = "submit" />
//             <input type="submit" value ="Se connecter" className="button-form">
//               SE CONNECTER
//             </input>
//           </form>
//         </div>
//         </div>
//         </div>
//   )};

// export default Login;
