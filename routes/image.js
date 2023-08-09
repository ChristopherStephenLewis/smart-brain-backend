const express = require('express');
const router = express.Router();

const {db} = require('../db/database');


router.put('/', (req, res) => {
  const {id} = req.body; // alternative is: const userId = req.params.id;

  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0].entries);
  })
  .catch(err => res.status(400).json('unable to get entries'))

});

module.exports = router;