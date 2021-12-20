require("dotenv").config();

const Sequelize = require("sequelize");
//Connecter l'ORM (Sequelize) à la base de données
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
  }
);

sequelize
  .sync({ altre: true })
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
const databaseConnectionTest = async () => {
  console.log("Connection avec la base de donnée..");

  try {
    await sequelize.authenticate();
    console.log("La connexion a été établie avec succès");
  } catch (error) {
    console.error("Impossible de se connecter à la base de données :", error);
  }
};

databaseConnectionTest();
