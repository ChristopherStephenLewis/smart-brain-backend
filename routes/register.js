const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/', async (req, res) => {
  try {
    const users = req.app.locals.database.users
    const {email, name, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    users.push({
      id: '125',
      name: name,
      email: email,
      password: hashedPassword,
      entries: 0,
      joined: new Date()
    })
    res.json(users[users.length-1]);
  } catch {
    res.status(400).send('Internal server error');
  }
});

module.exports = router;