const { Message, Post, User } = require("../models");

// lister les messages pour un post
exports.getMessages = async (req, res) => {
  res.json({
    data: await Message.findAll(
      {
        where: {
          postId: parseInt(req.params.postId, 10),
        },
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

// supprimer un message pour un post
exports.deleteMessage = async (req, res) => {
  // récup user dans la requête
  const user = req.user;

  try {
    const message = await Message.findOne({
      where: {
        id: parseInt(req.params.messageId, 10),
        postId: parseInt(req.params.postId, 10),
        userId: user.id,
      },
    });
    res.json(await message.destroy());
  } catch (err) {
    res.status(404);
    res.json({
      error: "message non trouvé",
    });
  }
};
