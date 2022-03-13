const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  Answers: [
    {
      QuestionId: {
        type: Number,
        required:true
      },
      AnswerId: {
        type: Number
      }
    },
  ],
});

module.exports = Answers = mongoose.model("Answer", AnswerSchema);
