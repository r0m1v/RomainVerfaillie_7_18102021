const Sequelize = require("sequelize");

// Schema
const User = {
  username: {
    unique: true,
    type: Sequelize.STRING(16),
    allowNull: false,
    validate: {
      len: [4, 12],
    },
  },
  email: {
    unique: true,
    type: Sequelize.STRING(255),
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },

  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
};

module.exports = User;
