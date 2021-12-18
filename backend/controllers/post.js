// CREATION DE POSTS
const Sequelize = require("sequelize");
const { Post, User } = require("../models");

//Pour la lecture des posts
exports.getAllPost = async (req, res) => {
  res.json({
    data: await Post.findAll(
      {
        include: [{
          model: User,
          where: { user: Sequelize.col('userId') }
        }],
      }
    ),
  });
};

//Pour la création des posts
exports.addPost = async (req, res) => {
  // récup user dans la requête
  const user = req.user;

  res.json(
    await Post.create(
      {
        userId: user.id,
        message: req.body.message,
      },
      {
        include: [User],
      }
    )
  );
  // code async / await équivalent en .then
  // Post.create(
  //   {
  //     userId: user.id,
  //     message: req.body.message,
  //   },
  //   {
  //     include: [User],
  //   }
  // ).then(result => res.json(result));
};

//Pour la modification des posts
exports.modifyPost = async (req, res) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    post.message = req.body.message;
    res.json(await post.save());
  } catch (err) {
    res.status(404);
    res.json({
      error: "post non trouvé",
    });
  }
};

//Pour la supprésion des posts
exports.deletePost = async (req, res) => {
  try {
    const condition = {
      id: req.params.id,
      userId: req.user.id,
    };
    // si user.isAdmin alors il peut supprimer

    if (req.user.isAdmin) {
      delete condition.userId;
    }

    const post = await Post.findOne({
      where: condition,
    });

    res.json(await post.destroy());
  } catch (err) {
    res.status(404);
    res.json({
      error: "post non trouvé",
    });
  }
};
