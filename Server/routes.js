const express = require("express");
const router = express.Router();
const { Laws, User } = require("./Models/Laws");
const bodyParser = require("body-parser");
const { validateData, validateUser } = require("./Validation.js");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

router.use(bodyParser.json());

router.get("/get", (req, res) => {
  try {
    res.json("Get request to the homepage");
  } catch (error) {
    console.error("Error handling GET request:", error);
  }
});

router.get("/getLaws", async (req, res) => {
  let result = await Laws.find({});
  res.send(result);
});

router.post("/post", (req, res) => {
  console.log(req.body);
  const { error } = validateData(req.body);
  console.log(error);
  if (error) {
    return res.status(400).json({
      error: "Invalid Law Data provided",
      message: "Invalid Law Data provided",
      details: error.details.map((error) => error.message),
      status: "failed",
    });
  }
  Laws.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/postUser", async (req, res) => {
  User.create(req.body)
  .then((data) => { res.json(data); })
  .catch((err) => { res.json(err); });
});

router.get("/postUser", async (req, res) => {
  let result = await User.find({});
  res.send(result);
});

router.put("/put", (req, res) => {
  try {
    res.json("Put request to the homepage");
  } catch (error) {
    console.error("Error handling PUT request:", error);
  }
});

//Delete
router.delete("/deleteLaw/:id", (req, res) => {
  const id = req.params.id;
  Laws.findByIdAndDelete({
    _id: id,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//Update
router.get("/getLaws/:id", async (req, res) => {
  const id = req.params.id;
  Laws.findById({ _id: id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/UpdateLaw/:id", (req, res) => {
  const id = req.params.id;
  Laws.findByIdAndUpdate(
    { _id: id },
    {
      law: req.body.law,
      description: req.body.description,
      category: req.body.category,
      year: req.body.year,
      country: req.body.country,
      createdBy: req.body.createdBy,
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//Authentication
router.post("/auth", (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username: username }, "abc");
  res.send(token);
});

module.exports = router;
