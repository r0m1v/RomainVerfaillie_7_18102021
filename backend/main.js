require("dotenv").config();
const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;

const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");

mongoose
  .connect(
    "mongodb+srv://" + username + ":" + password + "@" + host,
    //"mongodb+srv://rom1v:HnlKh99kRr8OIvUC@cluster0.th9mo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((er) => console.log("Connexion à MongoDB échouée !", er));

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
app.listen(3000, (req, res, next) => {
  console.log("appli lancée");
});

app.use("/api/auth", userRoutes); //route attendu par le frontend

module.exports = app;
