const sequelize = require("../config/db");

sequelize
  .sync({ altre: true })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
