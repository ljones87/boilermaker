const db = require('./db/index')

/*

   extra starting point for our app.
   entry point for node process.

*/

db.sync() //sync our database
  .then(() => require('./index')) // then start the express server