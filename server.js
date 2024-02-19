const express = require('express');
const app = express();
const port = 3000;

app.get('/ping',(req,res)=>{
  res.send("Pong")
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`server running on ${port}`);
  });
}

module.exports = app;
