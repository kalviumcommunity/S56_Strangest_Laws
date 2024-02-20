const express = require('express');
const app = express();
const port = 3000;

app.get('/ping',(req,res)=>{
    res.status(200).send("Pong")
})
app.get('/',(req,res)=>{
    res.status(200).send("Hello World")
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
