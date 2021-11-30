const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const authMiddleware = require("../middleware/auth");

//Pour envoyer l'adresse mail et le mot de passe
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.delete("/delete", authMiddleware, userCtrl.deleteAccount);

module.exports = router;
