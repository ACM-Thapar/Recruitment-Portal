const express = require("express");
const router = express.Router();
const Question = require("../Models/Question");

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const questions = await Question.findById(req.params.id);
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

router.post("/create", async (req, res) => {
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
});

router.put("/:id", async (req, res) => {
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
});

router.delete("/:id", async (req, res) => {
  try {
    const questions = await Question.findByIdAndDelete(req.params.id);
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
