const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

const {db} = require('../db/database');

router.post('/', async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      return res.status(400).json('Invalid input data');
    }

    const existingUser = await db('users').select('email').where('email', email).first();

    if (existingUser) {
      return res.status(400).json('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // enter the registration information into the users and login tables together. Rollback if there's an error.
    db.transaction(trx => {
      trx.insert({
        hash: hashedPassword,
        email: email
      })
      .into('login')
      .returning('email')
      .then(loginEmail => {
        return trx('users')
        .returning('*')
        .insert({
          email: loginEmail[0].email,
          name: name,
          joined: new Date()
        })
        .then(user => {
          res.json(user[0]);
        })
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
  } catch (error) {
    res.status(400).send('Unable to register');
  }
});

module.exports = router;