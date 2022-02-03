const express = require("express");
const router = express.Router();
const Answer = require("../Models/Answer");

router.get("/", async (req, res) => {
  try {
    const answers = await Answer.find();
    return res.status(200).json(answers);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const answers = await Answer.findById(req.params.id);
    return res.status(200).json(answers);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { Answers } = req.body;
    const answers = await Answer.create({
      Answers,
    });
    return res.status(201).json(answers);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { Answers } = req.body;
    const answer = await Answer.findById(req.params.id);

    if (!answer) {
      answer = await Answer.create({
        Answers,
      });
      return res.status(201).json(answer);
    } else {
      answer.Answers=Answers;
      await answer.save();
      return res.status(200).json(answer);
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const answers = await Answer.findByIdAndDelete(req.params.id);
    return res.status(200).json(answers);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

module.exports = router;