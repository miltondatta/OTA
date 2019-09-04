const { sequelize, Sequelize } = require('../models/index');
const Op = Sequelize.Op;
const airport = require('../models').airport;


exports.test = async (req, res) => {
    res.json({ msg: 'Testing Global Controller..OKK!' });
};


exports.get_airports = (req, res) => {
    airport.findAll({
        limit: 20,
        attributes: ['name', 'iso_country', 'iso_region', 'iata_code'],
        where: { iata_code: { [Op.like]: req.query.airport_search.toUpperCase() + '%' } }
    }).then(airports => {
        return res.json(airports);
    }).catch(err => {
        return res.json({ error: err })
    });
};