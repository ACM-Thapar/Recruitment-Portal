const Answer = require("../Models/Answer");

exports.answer_details = async (req, res) => {
  try {
    const answers = await Answer.find();
    return res.status(200).json(answers);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.answer_details_specific = async (req, res) => {
  try {
    const answers = await Answer.findById(req.params.id);
    return res.status(200).json(answers);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.answer_create = async (req, res) => {
  try {
    const { Answers } = req.body;
    const answers = await Answer.create({
      Answers,
    });
    return res.status(201).json(answers);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.answer_update = async (req, res) => {
  try {
    const { Answers } = req.body;
    const answer = await Answer.findById(req.params.id);

    if (!answer) {
      answer = await Answer.create({
        Answers,
      });
      return res.status(201).json(answer);
    } else {
      answer.Answers = Answers;
      await answer.save();
      return res.status(200).json(answer);
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.answer_delete = async (req, res) => {
  try {
    const answers = await Answer.findByIdAndDelete(req.params.id);
    return res.status(200).json(answers);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
