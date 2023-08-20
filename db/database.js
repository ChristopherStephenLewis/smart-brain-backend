const knex = require('knex');

const db = knex ({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  }
});

// const db = knex ({
//   client: 'pg',
//   connection: {
//     host: '127.0.0.1',
//     user: 'postgres',
//     port: 5432,
//     password: 'Pheros12',
//     database: 'smart_brain'
//   }
// });

//enable to console log all entries in the users database
// db.select('*').from('users').then(data => {
//   console.log(data);
// });

module.exports = { db };