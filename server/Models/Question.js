const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  Qid: {
    type: Number,
    required: true,
    default: 0,
  },

  Description: {
    type: String,
    required: [true, "Description is required"],
  },

  Options: [
    {
      Text: {
        type: String,
        required: true,
      },
      Oid: {
        type: Number,
        default: 0,
      },
    },
  ],

  Solution: {
    type: Number,
    default: 0,
    required: true,
  },
});

module.exports = Question = mongoose.model("Question", QuestionSchema);
