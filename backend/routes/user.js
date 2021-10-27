const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

//Pour envoyer l'adresse mail et le mot de passe
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;