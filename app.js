const express = require('express');
const app = express();

const port = 3001;

// Middleware to parse JSON bodies and handle URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: 'cookies',
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
  ]
}
app.locals.database = database;

// Routes
const indexRoute = require('./routes/index');
const signinRoute = require('./routes/signin');
const registerRoute = require('./routes/register');
// const usersRoute = require('./routes/users');
// const productsRoute = require('./routes/products');

// Mounting the routes
app.use('/', indexRoute);
app.use('/signin', signinRoute);
app.use('/register', registerRoute);
// app.use('/users', usersRoute);
// app.use('/products', productsRoute);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

/*
GAMEPLAN
/ --> res = this is working
/signin -> POST = success/fail (POST because we're handling a password)
/register --> POST = user
/profile/:id --> GET = user
/image --> PUT = user OR count
*/


/*
TODO
1. error handling middleware
2. static file serving (if required)
3. logger middleware (such as morgan or can be made from scratch)
4. environmental configuration (such as ports)
5. CORS handling
6. database integration
*/