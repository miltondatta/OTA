// const {Client} = require('pg');
const Sequelize = require('sequelize');
const conString = require('./config').development;

//Connect to postgres
/*const dbConnect = new Client(conString);
dbConnect.connect().then(() => console.log('Postgres Database Connected'))
                    .catch(err => console.log('Error to connect in database'));*/
// module.exports = dbConnect;




// Connect to postgres using Sequelize
const sequelize = new Sequelize(conString);
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
module.exports = sequelize;