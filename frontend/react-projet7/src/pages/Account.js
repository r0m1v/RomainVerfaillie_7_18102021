import React from "react";
//import React, { useEffect } from "react";
//import { useForm } from "react-hook-form";
//import Inscription from "./Inscription";

const Account = () => {
// export default Inscription = () => {
// const { register, handleSubmit, unregister } = useForm();
//   React.useEffect(() => {
//     register("username", "email", "password");
//   }, [register])
//}
  return (
    <div className="account">
      <div className="logo">
        <img src="./images/icon-white.png" alt="logo" />
      </div>
      <div className="formatting-top-account">
        <div className="framework-profil">
          <form url="/upload-picture" enctype="multipart/form-data">
            <label for="avatar">
              <i class="fas fa-camera"></i>
            </label>

            <input
              className="input-profil"
              type="file"
              id="avatar"
              name="avatar"
              onchange="previewPicture(this)"
              accept="image/png, image/jpeg, image/gif"
            />
          </form>
        </div>

        <h1>Profil de </h1>
        <button className="button-form-account" type="submit">
          SE DÉCONNECTER
        </button>
      </div>
      <div className="formatting-newpost">
        <form className="account-form">
          <h1>Nouveau post :</h1>
          <textarea maxlength="280" placeholder="280 caractères max"></textarea>
          <input type="file"></input>
          <button type="submit">Publier</button>
        </form>
      </div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
      <button type="button" onClick={() => unregister("username", "email", "password")}>Supprimer compte</button>
      <input type="submit" />
    </form> */}
    </div>
  );
};

export default Account;
