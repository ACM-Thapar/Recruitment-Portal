const express = require("express");
const router = express.Router();
const {
  question_details,
  question_details_specific,
  question_create,
  question_update,
  question_delete,
} = require("../controllers/question");

router.get("/", question_details);
router.get("/:id", question_details_specific);
router.post("/create", question_create);
router.put("/:id", question_update);
router.delete("/:id", question_delete);

module.exports = router;