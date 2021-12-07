/* MIDDLEWARE D'AUTHENTIFICATION */

require("dotenv").config();
const randomToken = process.env.JWT_SECRET_TOKEN;
const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = async (req, res, next) => {
  try {
    //Récupère le token dans le header
    const token = req.headers.authorization.split(" ")[1]; //split l'espace pour retourner un tableau et récupérer le 2é élement
    //Permet de décoder le token
    const decodedToken = jwt.verify(token, randomToken);
    //Permet de récupérer le userId
    const userId = decodedToken.userId;
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error("Impossible de trouver l'utilisateur");
    }
    req.user = user;
    next();
  } catch (err) {
    next("Utilisateur non trouvé !");
  }
};
