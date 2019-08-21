const {Client} = require('pg');
const conString = require('./default').PostgreURI;

//Connect to postgres
const dbConnect = new Client(conString);
dbConnect.connect().then(() => console.log('Postgres Database Connected'))
                    .catch(err => console.log('Error to connect in database'));

module.exports = dbConnect;