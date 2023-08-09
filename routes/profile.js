const express = require('express');
const router = express.Router();

const {db} = require('../db/database');


router.get('/:id', (req, res) => {
  const {id} = req.params; // alternative is: const userId = req.params.id;

  db.select('*').from('users').where({id: id})
  .then(user => {
    if (user.length > 0) {
      res.json(user[0]);
    }
    else {
      res.status(400).json('No such user');
    }
  })
});

module.exports = router;