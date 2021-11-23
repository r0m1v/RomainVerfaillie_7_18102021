// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

const sequelize = require("../config/db");
const Sequelize = require("sequelize");

sequelize
  .sync({ altre: true })
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.js")(sequelize, Sequelize);
// db.posts = require("./Post.js")(sequelize, Sequelize);
// db.messages = require("./Message.js")(sequelize, Sequelize);

// Création des relations entre les différents table
// db.users.hasMany(db.posts);
// db.posts.belongsTo(db.users);

// db.posts.hasMany(db.messages);
// db.messages.belongsTo(db.posts);

// db.users.hasMany(db.messages);
// db.messages.belongsTo(db.users);

module.exports = db;
