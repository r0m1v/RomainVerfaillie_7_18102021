const sequelize = require("../config/db");
//Connecter l'ORM (Sequelize) à la base de données
sequelize
  .sync({ altre: true })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
