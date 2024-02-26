const express = require('express')
const router = express.Router()

router.get('/get', (req, res) => {
  try {
    res.json('Get request to the homepage')
  } catch (error) {
    console.error('Error handling GET request:', error);
  }
})

router.post('/post', (req, res) => {
  try {
    res.json('Post request to the homepage')
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
