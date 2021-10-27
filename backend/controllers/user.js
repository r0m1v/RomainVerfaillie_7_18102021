/* CREER DES UTILISATEURS */

require("dotenv").config();
const randomToken = process.env.JWT_SECRET_TOKEN;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

//signup pour l'enregistrement de l'utilisateur
exports.signup = (req, res, next) => {
  //hacher le mot de passe (fonction asynchrone)
  bcrypt
    .hash(req.body.password, 10) //nombre de fois ou on fait l'algorythme de hachage
    .then((hash) => {
      const user = new User({
        email: req.body.email, //addresse fournit dans le corp de la requête
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

//login pour connecter les utilisateurs existant
exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email }) //Récupère l'utilisateur de la base qui correspond au mail entré
    .then((user) => {
      if (!user) {
        //Si on a pas trouvé de user
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      //Pour comparer le mdp envoyé avec la requête avec le hache enregistré dans le user
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          //Si l'utilsateur à envoyé le mauvais mdp
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, randomToken, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};