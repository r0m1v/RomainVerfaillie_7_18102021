const Sequelize = require("sequelize");

// Define schema
const Post = {
  message: {
    allowNull: false,
    type: Sequelize.STRING(280),
    validate: {
      len: [3, 280],
    },
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

module.exports = Post;
