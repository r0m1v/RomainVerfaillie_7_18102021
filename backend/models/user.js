const Sequelize = require("sequelize");

// Define schema
const User = {
  username: {
    unique: true,
    type: Sequelize.STRING(16),
    allowNull: false,
    validate: {
      len: [4, 12],
    },
    // allowNull defaults to true
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

    // allowNull defaults to true
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
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
