import React from "react";
import Navigation from "../components/Navigation";

const Login = () => {
  return (
    <div>
      <Navigation />
      <div className="formatting-form">
        <form className="login-form">
          <label htmlFor="email">ADRESSE EMAIL * </label>
          <input type="text" name="email" id="email" required />
          <label htmlFor="password">MOT DE PASSE * </label>
          <input type="password" name="password" id="password" required />
          <div className="formatting-form">
            <button type="submit" className="button-form">
              SE CONNECTER
            </button>
          </div>
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
