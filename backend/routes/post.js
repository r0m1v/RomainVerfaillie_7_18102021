const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const authMiddleware = require("../middleware/auth");

// pour lire une liste posts
router.get("", (req, res) => {
  res.json({
    route: "lister les posts",
  });
});

// pour créer un post
router.post("", (req, res) => {
  res.json({
    route: "créer un post",
    message: req.body.post,
  });
});

// pour modifier un post
router.put("/:id", (req, res) => {
  res.json({
    route: `modifier le post ${req.params.id}`,
    message: req.body.post,
  });
});

// pour supprimer un post
router.delete("/:id", (req, res) => {
  res.json({
    route: `supprimer le post ${req.params.id}`,
  });
});

module.exports = router;
