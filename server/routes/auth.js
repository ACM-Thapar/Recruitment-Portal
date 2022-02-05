const express = require('express');
const router = express.Router();

const { login, register } = require('../controllers/auth');
const {genLink,getQuiz} = require("../helper/quiz")


router.post('/login', login);

router.post('/',  register);

//for getting quiz
router
.route('/quiz/:id')
.get(getQuiz)

module.exports = router;
