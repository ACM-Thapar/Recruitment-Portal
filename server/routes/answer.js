const express = require("express");
const router = express.Router();
const {
  answer_details,
  answer_details_specific,
  answer_create,
  answer_update,
  answer_delete,
} = require("../controllers/answer");

router.get("/", answer_details);
router.get("/:id", answer_details_specific);
router.post("/create", answer_create);
router.put("/:id", answer_update);
router.delete("/:id", answer_delete);

module.exports = router;