const express = require('express');
const cors = require('cors');
const app = express();

const port = 3001;

// Middleware to parse JSON bodies and handle URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
const bcrypt = require('bcrypt');


const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: "$2b$10$i5KAWwNWo.dSSH.YKAzt1.HQTDff6mx9SJByGjBvw2ausdYydfZBe", //cookies
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'Dave',
      email: 'dave@gmail.com',
      password: 'chaos',
      entries: 0,
      joined: new Date()
    },
  ],
  login: [
    {
      id: '987',
      hash: '',
      email: 'john@gmail.com'
    }
  ]
}
app.locals.database = database;

// Routes
const indexRoute = require('./routes/index');
const signinRoute = require('./routes/signin');
const registerRoute = require('./routes/register');
const profileRoute = require('./routes/profile');
const imageRoute = require('./routes/image');

// Mounting the routes
app.use('/', indexRoute);
app.use('/signin', signinRoute);
app.use('/register', registerRoute);
app.use('/profile', profileRoute);
app.use('/image', imageRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

/*
TODO
1. error handling middleware
2. static file serving (if required)
3. logger middleware (such as morgan or can be made from scratch)
4. environmental configuration (such as ports)
5. CORS handling
6. database integration
*/