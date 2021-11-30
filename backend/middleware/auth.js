/* MIDDLEWARE D'AUTHENTIFICATION */

require("dotenv").config();
const randomToken = process.env.JWT_SECRET_TOKEN;
const jwt = require("jsonwebtoken");
const db = require("../models");

module.exports = async (req, res, next) => {
  //Récupère le token dans le header
  const token = req.headers.authorization.split(" ")[1]; //split l'espace pour retourner un tableau et récupérer le 2é élement
  //Permet de décoder le token
  const decodedToken = jwt.verify(token, randomToken);
  //Permet de récupérer le userId
  const userId = decodedToken.userId;
  const user = await db.users.findOne({ where: { id: userId } });

  console.log({ decodedToken, userId, user });

  if (user) {
    req.user = user;
    next();
  } else {
    next("Utilisateur non trouvé !");
  }
};
