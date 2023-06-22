const express = require('express');
const router = express.Router();
const app = express();

/** Get weather API */
router.get('/', function (req, res) {
  res.send(process.env.OPENWEATHER_API_KEY);
});

app.use('/', router);

module.exports = router;
