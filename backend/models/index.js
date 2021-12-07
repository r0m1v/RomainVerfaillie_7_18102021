const sequelize = require("../config/db");
const PostSchema = require("./post");
const UserSchema = require("./user");

sequelize
  .sync({ altre: true })
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

const Post = sequelize.define("posts", PostSchema);
const User = sequelize.define("users", UserSchema);

// Création des relations entre les différents table
User.hasMany(Post);
Post.belongsTo(User);

// db.messages = require("./Message.js")(sequelize, Sequelize);

// db.posts.hasMany(db.messages);
// db.messages.belongsTo(db.posts);

// db.users.hasMany(db.messages);
// db.messages.belongsTo(db.users);

module.exports = {
  Post,
  User,
};
