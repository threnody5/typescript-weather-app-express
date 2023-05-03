const express = require('express');
const router = express.Router();

/** Get weather API */
router.get('/', function (req, res, next) {
  // Add API key from openweathermap here as a string
  res.send('');
});

module.exports = router;
