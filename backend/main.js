require("dotenv").config();
require("./config/db");
require("./models/index");
const authMiddleware = require("./middleware/auth");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

const express = require("express");
const cors = require("cors");

//const userRoutes = require("./routes/user");
const app = express();

//Initialise l'API pour recevoir des requêtes de n'importe où
app.use(cors());

//Permet de récupérer des données de formulaire au format json
app.use(express.json());

//Affiche dans le terminal que l'appli est bien lancé
app.listen(8080, (req, res, next) => {
  console.log("appli lancée");
});

app.use("/api/auth", userRoutes); //route attendu par le frontend
app.use("/api/post", authMiddleware, postRoutes); //route attendu par le frontend

module.exports = app;
