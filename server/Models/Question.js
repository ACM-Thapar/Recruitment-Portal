const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({

  Description: {
    type: String,
    required: [true, 'Description is required'],
  },

  Ans: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answer'
  },
});

module.exports = Question = mongoose.model('Question', QuestionSchema);
