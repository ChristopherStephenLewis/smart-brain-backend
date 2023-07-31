const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  if (req.body.email === req.app.locals.database.users[0].email && req.body.password === req.app.locals.database.users[0].password) {
    res.json('success')
  } else {
    res.status(400).json('error loggin in');
  }
});

module.exports = router;