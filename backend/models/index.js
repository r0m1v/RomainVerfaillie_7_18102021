const sequelize = require("../config/db");
const MessageSchema = require("./message");
const PostSchema = require("./post");
const UserSchema = require("./user");

sequelize
  .sync({ altre: true })
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

const Message = sequelize.define("messages", MessageSchema);
const Post = sequelize.define("posts", PostSchema);
const User = sequelize.define("users", UserSchema);

// Création des relations entre les différents table

// relation post / user
User.hasMany(Post);
Post.belongsTo(User);

// relation post / message
Post.hasMany(Message);
Message.belongsTo(Post);

// relation user / message
User.hasMany(Message);
Message.belongsTo(User);

module.exports = {
  Message,
  Post,
  User,
};
