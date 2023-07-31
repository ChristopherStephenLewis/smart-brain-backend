const express = require('express');
const router = express.Router();


router.get('/:id', (req, res) => {
  const {id} = req.params; // alternative is: const userId = req.params.id;
  const users = req.app.locals.database.users
  let userFound = false;

  users.forEach(user => {
    if (user.id === id) {
      userFound = true;
      res.json(user);
    } 
  })
  if (!userFound) {
    res.status(400).json('No such user');
  }
});

module.exports = router;