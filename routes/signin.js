const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

const {db} = require('../db/database');

router.post('/', async (req, res) => {
  const {email, password} = req.body;

  if (!email || !password) {
    return res.status(400).json('Invalid input data');
  }

  try {
    const loginUser = await db('login').select('*').where('email', email).first();
    // const user = await db('users').select('*').where('email', email).first();

    if (!loginUser) {
      return res.status(400).json('User not found');
    }

    const isPasswordMatch = await bcrypt.compare(password, loginUser.hash);

    if (isPasswordMatch) {
      // res.json(user);
      res.json('Login successful');
    } else {
      res.status(401).json('Invalid credentials');
    }
  } catch (err){
    res.status(500).json('Server error');
  }
});

module.exports = router;