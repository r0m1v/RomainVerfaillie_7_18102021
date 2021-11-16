import React from "react";

const Account = () => {
  return (
    <div className="account">
      <div className="logo">
        <img src="./images/icon-white.png" alt="logo" />
      </div>
      <div className="formatting-top-account">
        <h1>Affichage pseudo</h1>
        <button>SE DÉCONNECTER</button>
      </div>

      <form className="account-form">
        <button>Choisir un fichier</button>
        <textarea placeholder="Message"></textarea>
        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default Account;
