/* MIDDLEWARE D'AUTHENTIFICATION */

require("dotenv").config();
const randomToken = process.env.JWT_SECRET_TOKEN;
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    //Récupère le token dans le header
    const token = req.headers.authorization.split(" ")[1]; //split l'espace pour retourner un tableau et récupérer le 2é élement
    //Permet de décoder le token
    const decodedToken = jwt.verify(token, randomToken);
    //Permet de récupérer le userId
    const userId = decodedToken.userId;
    //Vérifie que la requête correspond à celle du token
    if (req.body.userId && req.body.userId !== userId) {
      throw "User ID non valable";
    } else {
      next();
    }
  } catch (error) {
    //Renvoi une erreur pour problème d'identification
    res.status(401).json({ error: error | "Requête non identifiée" });
  }
};