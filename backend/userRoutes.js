const express = require('express');
const router = express.Router();
const userController = require('./userController');

// Login route
router.post('/login', userController.login);

module.exports = router;
