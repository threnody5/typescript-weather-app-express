const express = require('express');
const router = express.Router();
const cors = require('cors');
const app = express();

/** Allow requests only from the front-end application. */
const corsOptions = {
  origin: 'http://localhost:5173',
};

/** Apply CORS middleware with options. */
router.use(cors(corsOptions));

/** Get weather API */
router.get('/', function (req, res) {
  // Add API key from openweathermap here as a string
  res.send('c4b8c76df5bc9949fc6e2c820f59a8be');
});

app.use('/', router);

module.exports = router;
