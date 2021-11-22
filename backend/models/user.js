/* CREER UN MODELE DE DONNEES */
/*
const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = mongoose.Schema({
  pseudo: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", UserSchema);
*/
// const User = sequelize.define(
//   "user",
//   {
//     id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
//     userName: { type: Sequelize.STRING(255), allowNull: false },
//     email: { type: Sequelize.STRING(255), allowNull: false, unique: true },
//     password: { type: Sequelize.STRING(255), allowNull: false },
//   },
//   { tableName: "user", timestamps: false, underscored: true }
// );
// exports.User = User;

// Define schema
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    email: {
      unique: true,
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    username: {
      unique: true,
      type: DataTypes.STRING(16),
      allowNull: false,
      validate: {
        len: [6, 12],
      },
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,

      // allowNull defaults to true
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
  return User;
};
