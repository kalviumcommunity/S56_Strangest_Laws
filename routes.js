const express = require('express')
const router = express.Router()

router.get('/get', (req, res) => {
  res.json('Get request to the homepage')
})

router.post('/post', (req, res) => {
    res.json('Post request to the homepage')
})

router.put('/put', (req, res) => {
    res.json('Put request to the homepage')
})

router.delete('/delete', (req, res) => {
    res.json('Delete request to the homepage')
})

module.exports = {router};