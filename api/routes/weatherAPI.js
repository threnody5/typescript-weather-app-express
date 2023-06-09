const express = require('express');
const router = express.Router();
const cors = require('cors');
const app = express();

/** Allow requests only from the front-end application. */
const corsOptions = {
  origin: 'https://weather-check.tech',
};

/** Apply CORS middleware with options. */
app.use(cors(corsOptions));
// router.use(cors(corsOptions));

/** Get weather API */
router.get('/', function (req, res) {
  // Add API key from openweathermap here as a string
  res.send('');
});

app.use('/', router);

module.exports = router;
