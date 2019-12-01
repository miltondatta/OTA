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


exports.get_airport_by_iata_code = async (req, res) => {
    try {
        const iata_code = req.query.iata_code;

        const status = await airport.findOne({attributes: ["id", "ident", "type", "name", "latitude_deg", "longitude_deg", "elevation_ft", "continent", "iso_country", "iso_region", "municipality", "scheduled_service", "gps_code", "iata_code", "local_code", "home_link", "wikipedia_link", "keywords", "score", "last_updated"], where: {iata_code: iata_code.toUpperCase()}});
        if (!status) res.status(400).json({msg: 'Please try again!'});

        return res.status(200).json(status);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: "Server Error!"});
    }
};