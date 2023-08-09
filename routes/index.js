const express = require('express');
const router = express.Router();

// GET route for the main index page
router.get('/', (req, res) => {
  res.send('Index');
});

module.exports = router;