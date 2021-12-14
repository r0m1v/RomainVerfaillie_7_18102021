import React, { useState } from "react";
import TextInput from "../components/TextInput";

const Account = () => {
  let dataLogin = localStorage.getItem("username");

  const buttonLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location = "../connexion";
  };

  return (
    <div className="account">
      <TextInput toto="première valeur par defaut (content)" />
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

        <h1>Profil de {dataLogin}</h1>
        <button
          className="button-form-account"
          type="submit"
          onClick={buttonLogout}
        >
          SE DÉCONNECTER
        </button>
      </div>
      <form>
        <button>Supprimer compte</button>
      </form>
      <div className="formatting-newpost">
        <form className="account-form">
          <h1>Nouveau post :</h1>
          <textarea maxlength="280" placeholder="280 caractères max"></textarea>
          <input type="file"></input>
          {/* <button type="submit" onClick={buttonPublish}>
    Publier
  </button> */}
        </form>
      </div>
      {/* <postToFill test=""/> */}
    </div>
  );
};

export default Account;
