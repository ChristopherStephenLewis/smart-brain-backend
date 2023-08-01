const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  try {
    const users = req.app.locals.database.users
    const isPassWordMatch = await bcrypt.compare(req.body.password, users[0].password)

    if (req.body.email === users[0].email && isPassWordMatch) {
      res.json('success')
    } else {
      res.status(400).json('error loggin in');
    }
    // res.status(200).json('Okay')
  } catch {
    res.status(500).json('Internal server error');
  }

});

module.exports = router;