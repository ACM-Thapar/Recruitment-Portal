const Question = require("../Models/Question");

exports.question_details = async (req, res) => {
  try {
    const questions = await Question.find();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.question_details_specific = async (req, res) => {
  try {
    const questions = await Question.findById(req.params.id);
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.question_create = async (req, res) => {
  try {
    const { Qid, Description, Options, Solution } = req.body;
    const question = await Question.create({
      Qid,
      Description,
      Options,
      Solution,
    });
    return res.status(201).json(question);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.question_update = async (req, res) => {
  try {
    const { Qid, Description, Options, Solution } = req.body;
    const question = await Question.findById(req.params.id);

    if (!question) {
      question = await Question.create({
        Qid,
        Description,
        Options,
        Solution,
      });
      return res.status(201).json(question);
    } else {
      question.Description = Description;
      question.Options = Options;
      question.Solution = Solution;
      await question.save();
      return res.status(200).json(question);
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.question_delete = async (req, res) => {
  try {
    const questions = await Question.findByIdAndDelete(req.params.id);
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
