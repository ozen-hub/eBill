const express = require('express');
const userController = require('../controller/UserController');

const router = express.Router();

router.post('/signup', userController.signup);
module.exports = router;