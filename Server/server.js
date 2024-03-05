const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const cors = require('cors');
const { getDB, mongooseConnect } = require('./db')
app.use(cors())
getDB()

app.use(express.json());

const {router} = require('./routes');

app.get('/', async (req, res) => {
  try {
    const connectionStatus = await mongooseConnect();
    if (connectionStatus) {
      res.send('Connected to mongoDB');
    }
  } 
  catch (err) {
    res.status(500).send('Failed to connect to mongoDB!');
  }
});

app.get('/ping',(req,res)=>{
    res.status(200).send("Pong");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

                

app.use(router);
