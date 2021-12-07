const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/post");
const authMiddleware = require("../middleware/auth");

// pour lire une liste posts
router.get("", postCtrl.getAllPost);

// pour créer un post
router.post("", postCtrl.addPost);

// pour modifier un post
router.put("/:id", postCtrl.modifyPost);

// pour supprimer un post
router.delete("/:id", postCtrl.deletePost);

module.exports = router;
