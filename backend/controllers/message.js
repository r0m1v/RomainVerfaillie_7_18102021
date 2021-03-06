const Sequelize = require("sequelize");
const { Message, Post, User } = require("../models");

// lister les messages pour un post
exports.getMessages = async (req, res) => {
  res.json({
    data: await Message.findAll(
      {
        where: {
          postId: parseInt(req.params.postId, 10),
        },
        include: [
          {
            model: User,
            where: { user: Sequelize.col("userId") },
          },
        ],
      }
      // {
      //   include: [Post],
      //   include: [User],
      // }
    ),
  });
};

// creation de message pour un post
exports.addMessage = async (req, res) => {
  // récup user dans la requête
  const user = req.user;

  res.json(
    await Message.create(
      {
        content: req.body.message,
        postId: parseInt(req.params.postId, 10),
        userId: user.id,
      },
      {
        include: [Post],
        include: [User],
      }
    )
  );
};

//Pour la modification des messages
exports.modifyMessage = async (req, res) => {
  try {
    const message = await Message.findOne({
      where: {
        id: parseInt(req.params.messageId, 10),
        postId: parseInt(req.params.postId, 10),
        userId: req.user.id,
      },
    });

    message.content = req.body.message;
    res.json(await message.save());
  } catch (err) {
    res.status(404);
    res.json({
      error: "post non trouvé",
    });
  }
};

// supprimer un message pour un post
exports.deleteMessage = async (req, res) => {
  // récup user dans la requête
  const user = req.user;
  const condition = {
    id: parseInt(req.params.messageId, 10),
    postId: parseInt(req.params.postId, 10),
    userId: user.id,
  };
  // si user.isAdmin alors il peut supprimer

  if (user.isAdmin) {
    delete condition.userId;
  }

  try {
    const message = await Message.findOne({
      where: condition,
    });
    res.json(await message.destroy());
  } catch (err) {
    res.status(404);
    res.json({
      error: "message non trouvé",
    });
  }
};
