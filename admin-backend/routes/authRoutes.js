const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register); // For first time setup only
router.post('/login', login);

module.exports = router;
