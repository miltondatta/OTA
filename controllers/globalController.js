const { sequelize, Sequelize } = require('../models/index');
const Op = Sequelize.Op;
const airport = require('../models').airport;


exports.test = async (req, res) => {
    res.json({ msg: 'Testing Global Controller..OKK!' });
};


exports.get_airports = (req, res) => {
    let search_str = req.query.airport_search;
    if(search_str == '') return;

    airport.findAll({
        limit: 20,
        attributes: ['name', 'iso_country', 'iso_region', 'iata_code', 'municipality'],
        where: {
            [Op.or]: [
                { iata_code: { [Op.like]: search_str.toUpperCase() + '%' }},
                { municipality: { [Op.like]: search_str.charAt(0).toUpperCase() + search_str.slice(1) + '%' }},
                { name: { [Op.like]: search_str.charAt(0).toUpperCase() + search_str.slice(1) + '%' }},
            ] 
        }
    }).then(airports => {
        return res.json(airports);
    }).catch(err => {
        return res.json({ error: err })
    });
};