const {sequelize, Sequelize}     = require('../models/index');
const user                       = require('../models').user;
const bcrypt                     = require('bcryptjs');
//const user_model    = require('../models/user');

//console.log(sequelize);

exports.store = async (req, res) => {
    const { name, email, password, mobile } =  req.body;

    user.findOne({ where: { email } }).then(results => {
      if(results) {
          return res.status(400).json({ msg: 'Email already exist!' });
      } else {
          bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(password, salt, (err, hash) => {
                  user.create({ name:name, email:email, password:hash, mobile:mobile }).then(results => {
                      return res.status(200).json({ msg: 'User created successfully!' });
                  });
              });
          });
      }
    });






    /*
    user.findAll({}).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    }); */

    /*
    sequelize.query('SELECT * FROM users').then(([results, metadata]) => {

        console.log(results);
        return results;
    }); */

};