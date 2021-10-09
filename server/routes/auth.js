const express = require('express');
const router = express.Router();

const { login, register } = require('../controllers/auth');

router.post('/login', validAuth, login);

router.post('/', validUser, register);

module.exports = router;
