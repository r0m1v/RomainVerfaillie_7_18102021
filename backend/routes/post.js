const express = require("express");
const router = express.Router();

const messageCtrl = require("../controllers/message");
const postCtrl = require("../controllers/post");

// pour lire une liste posts
router.get("", postCtrl.getAllPost);

// pour créer un post
router.post("", postCtrl.addPost);

// pour modifier un post
router.put("/:id", postCtrl.modifyPost);

// pour supprimer un post
router.delete("/:id", postCtrl.deletePost);

// pour lire les messages d'un post
router.get("/:postId/message", messageCtrl.getMessages);

// pour ajouter un message pour un post
router.post("/:postId/message", messageCtrl.addMessage);

// pour modifier un message pour un post
router.put("/:postId/message/:messageId", messageCtrl.modifyMessage);

// pour supprimer un message pour un post
router.delete("/:postId/message/:messageId", messageCtrl.deleteMessage);

module.exports = router;
