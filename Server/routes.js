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

router.post("/post", (req, res) => {
  Laws.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.error("Error handling POST request:", error);
    });
});

router.put("/put", (req, res) => {
  try {
    res.json("Put request to the homepage");
  } catch (error) {
    console.error("Error handling PUT request:", error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Laws.findByIdAndDelete(id)
  } catch (error) {
    console.error("Error handling DELETE request:", error);
  }
});

module.exports = router;
