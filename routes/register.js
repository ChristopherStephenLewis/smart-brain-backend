const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
  const {email, name, password} = req.body;
  req.app.locals.database.users.push({
    id: '125',
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date()
  })
  res.json(req.app.locals.database.users[req.app.locals.database.users.length-1]);
});

module.exports = router;