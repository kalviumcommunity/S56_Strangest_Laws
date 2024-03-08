const express = require("express");
const router = express.Router();
const Laws = require("./Models/Laws");

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

router.post("/post", (req, res) => {
  Laws.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.error("Error handling POST request:", error);
    });
});

router.put("/getLaws/:id", (req, res) => {
  const id = req.params.id;
  Laws.findByIdAndUpdate(
    { _id: id },
    {
      law: req.body.law,
      description: req.body.description,
      category: req.body.category,
      year: req.body.year,
      country: req.body.country,
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/getLaws/:id", (req, res) => {
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

module.exports = router;
