const express = require("express");
const app = express();
const connectDB = require("./server/config/db");
const cors = require("cors");
const questionRoutes=require('./server/routes/questionRoutes');
const answerRoutes=require('./server/routes/answerRoutes');

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/question',questionRoutes);
app.use('/answer',answerRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});