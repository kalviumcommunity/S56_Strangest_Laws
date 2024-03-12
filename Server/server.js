const express = require("express");
const Router = require("./routes.js");
const { getDB, mongooseConnect } = require("./db.js");
const cors = require("cors");
app.use(cors());
const app = express();
const port = 3000;


app.use(express.json());
app.get("/", (req, res) => {
  try {
    res.json({
      database: getDB() ? "connected" : "disconnected",
    });
  } catch (err) {
    console.log(err);
  }
});

app.use(Router);

app.get("/ping", (req, res) => {
  try {
    res.send("Pong");
  } catch (err) {
    console.log(err);
  }
});

if (require.main === module) {
  mongooseConnect();
  app.listen(port, async () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}
