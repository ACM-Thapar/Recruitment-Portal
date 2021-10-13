const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({

  Description: {
    type: [String],
    required: [true, 'Description is required'],
  },

  Option1: {
    type: String,
  },

  Option2: {
    type: String,
  },

  Option3: {
    type: String,
  },

  Option4: {
    type: String,
  },

  Ans: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answer'
  },
});

module.exports = Question = mongoose.model('Question', QuestionSchema);
