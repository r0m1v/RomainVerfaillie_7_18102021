const Sequelize = require("sequelize");

// Define schema
const Message = {
  content: {
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
};

module.exports = Message;
