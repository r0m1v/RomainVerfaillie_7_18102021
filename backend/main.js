require("dotenv").config();
require("./config/db");
require("./models/index");

const express = require("express");

//const userRoutes = require("./routes/user");
const app = express();
//Initialise l'API pour recevoir des requêtes de n'importe où
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//Permet de récupérer des données de formulaire au format json
app.use(express.json());

//Affiche dans le terminal que l'appli est bien lancé
app.listen(8080, (req, res, next) => {
  console.log("appli lancée");
});

//app.use("/api/auth", userRoutes); //route attendu par le frontend

module.exports = app;
