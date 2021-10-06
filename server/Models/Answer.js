const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({

  Ques: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quesion',
  },

  Answer: {
    type: String,
    required: [true, 'Answer is required'],
  },
});

module.exports = Answer = mongoose.model('Answer', AnswerSchem);
