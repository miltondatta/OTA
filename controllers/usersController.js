const {sequelize, Sequelize}     = require('../models/index');
//const user_model    = require('../models/user');

//console.log(sequelize);

exports.store = async (req, res) => {
    const { name, email, password, mobile } =  req.body;
    sequelize.query('SELECT * FROM Users').then(([results, metadata]) => {

        console.log(results);
        return results;
    });
};