// const {Client} = require('pg');
var Sequelize = require('sequelize');
const conString = require('./default').PostgreURI;

//Connect to postgres
/*const dbConnect = new Client(conString);
dbConnect.connect().then(() => console.log('Postgres Database Connected'))
                    .catch(err => console.log('Error to connect in database'));*/
// module.exports = sequelize;

// Connect to postgres
const sequelize = new Sequelize(conString);

sequelize.authenticate().then(() => {
    console.log('Postgres Database Connected');
}).catch(err => {
    console.error('Error to connect in database:', err);
}).finally(() => {
    sequelize.close();
});

