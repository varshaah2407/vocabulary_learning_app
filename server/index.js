const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const WordFinderModel = require("./models/WordFinder");
const UserModel = require("./models/User");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/VocabularyLearning", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.get("/WordFinder", (req, res) => {
  WordFinderModel.find({}, { Word: 1, Meaning: 1, _id: 0 })
    .then((words) => res.json(words))
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("server is running");
});
