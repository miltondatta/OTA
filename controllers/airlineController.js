const Airline = require('../models').airline;
var moment     = require("moment");

exports.index = async (req, res) => {
    try {
        const airlines = await Airline.findAll(
            {attributes: ["id", "name", "iata", "icao", "callsign", "country", "active", "createdAt"],
            order: [['id', 'DESC']], limit: 10}
        );
        if (!airlines) return res.status(400).json({msg: 'Something else!'});

        return res.status(200).json(airlines);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};


exports.store = async (req, res) => {
    try {
        const {name, iata, icao, callsign, country, active} = req.body;
        const newAirline = {
            name: name,
            iata: iata,
            icao: icao,
            callsign: callsign,
            country: country,
            active: active,
            createdAt: moment()
        };

        const airline = await Airline.findOne({where: {iata}});
        if (airline) return res.status(400).json({msg: 'This airline is already exist!'});

        const status = await Airline.create(newAirline);
        if (!status) return res.status(400).json({msg: 'Please try again with full information!'});

        return res.status(200).json({msg: 'New Airline Information saved successfully!'});
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};