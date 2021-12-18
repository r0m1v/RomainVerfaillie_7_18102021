import React from "react";
import PostToFill from "../components/PostToFill";

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
    e.preventDefault();
    if (
      window.confirm("Êtes vous sure de vouloir supprimer votre compte ?")
    ) {
      fetch("http://localhost:8080/api/auth/delete/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${dataToken}`,
        },
      }).then(() => {
        localStorage.clear();
        window.location = "../inscription";
      });
    }
  };

  return (
    <div className="account">
      <div className="logo">
        <img src="./images/icon-white.png" alt="logo" />
      </div>
      <div className="formatting-top-account">
        <h1>{dataLogin}</h1>
        <button
          className="button-form-account"
          type="submit"
          onClick={buttonLogout}
        >
          Déconnexion<i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
      <PostToFill content="" />
      <button
        className="button-delete-account"
        type="button"
        onClick={deleteUser}
      >
        Supprimer compte <i class="fas fa-user-slash"></i>
      </button>
    </div>
  );
};

export default Account;
