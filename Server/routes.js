const express = require('express')
const router = express.Router()
const Laws = require('./Models/Laws')

router.get('/get', (req, res) => {
  try {
    res.json('Get request to the homepage')
  } catch (error) {
    console.error('Error handling GET request:', error);
  }
})

router.get('/getLaws', async (req, res) => {
  let result = await Laws.find({})
  res.send(result)
})


router.post('/post', (req, res) => {
  try {
    res.send(req.body)
  } catch (error) {
    console.error('Error handling POST request:', error);
  }
})

router.put('/put', (req, res) => {
  try {
    res.json('Put request to the homepage')
  } catch (error) {
    console.error('Error handling PUT request:', error);
  }
})

router.delete('/delete', (req, res) => {
  try {
    res.json('Delete request to the homepage')
  } catch (error) {
    console.error('Error handling DELETE request:', error);
  }
})


module.exports = { router };
