const express = require('express');
const cors = require('cors');
const app = express();

const port = 3001;

// Middleware to parse JSON bodies and handle URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

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

app.listen(process.env.PORT || port, () => {
  console.log(`Server running on port ${process.env.PORT}`);
})
