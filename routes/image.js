const express = require('express');
const router = express.Router();


router.put('/', (req, res) => {
  const {id} = req.body; // alternative is: const userId = req.params.id;
  const users = req.app.locals.database.users
  let userFound = false;

  users.forEach(user => {
    if (user.id === id) {
      userFound = true;
      user.entries++;
      return res.json(user.entries);
    } 
  })
  if (!userFound) {
    res.status(400).json('No such user');
  }
});

module.exports = router;