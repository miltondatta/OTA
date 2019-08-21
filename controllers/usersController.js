const dbConnect     = require('../config/db');
const user_model    = require('../models/user');

exports.store = async (req, res) => {
    const { name, email, password, mobile } =  req.body;
    dbConnect.query('INSERT INTO users(name, email, password, mobile) VALUES($1, $2, $3, $4)', [name, email, password, mobile], (error, results) => {
        if (error) {
            throw error;
        }
        console.log(results);
        return res.status(200).json(`from controller User added with ID: ${results.insertId}`);
    });
};