import React, { useState } from "react";
import TextInput from "../components/TextInput";

const Account = () => {
  let dataLogin = localStorage.getItem("username");
  let dataToken = localStorage.getItem("access_token");
  //let userId = localStorage.getItem("userId");

  const buttonLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location = "../connexion";
  };

  const deleteUser = (e) => {
    fetch("http://localhost:8080/api/auth/delete/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${dataToken}`
      },
      body: JSON.stringify(e),
    }).then(() => this.setState({ status: "Delete successful" }));
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
        <h1>Profil de {dataLogin}</h1>
        <button
          className="button-form-account"
          type="submit"
          onClick={buttonLogout}
        >
          SE DÉCONNECTER
        </button>
      </div>

      <div className="formatting-newpost">
        <form className="account-form">
          <h1>Nouveau post :</h1>
          <textarea maxlength="280" placeholder="280 caractères max"></textarea>
          <input
            type="file"
            onchange="previewPicture(this)"
            accept=".gif"
          ></input>
          <button type="submit">Publier</button>
        </form>
      </div>
      <form>
        <button
          onClick={() => {
            if (
              window.confirm(
                "Êtes vous sure de vouloir supprimer votre compte ?"
              )
            )
              deleteUser();
          }}
        >
          Supprimer compte
        </button>
      </form>
    </div>
  );
};

export default Account;
