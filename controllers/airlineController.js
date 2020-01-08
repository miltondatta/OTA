const Airline = require('../models').airline;
const moment  = require("moment");

exports.index = async (req, res) => {
    try {
        const airlines = await Airline.findAll(
            {
                attributes                    : ["id", "name", "iata", "icao", "callsign", "country", "active", "createdAt"],
                order: [['id', 'DESC']], limit: 10
            }
        );
        if (!airlines) return res.status(400).json({msg: 'Something else!'});

        return res.status(200).json(airlines);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.checkIata = async (req, res) => {
    try {
        const iata = req.query.iata;
        if (!iata) return res.status(400).json({msg: 'Iata not found!'});

        const airline = await Airline.findOne({where: {iata}});
        if (airline) return res.status(400).json({msg: 'This iata code is already exist!'});

        return res.json({'success': true});
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.store = async (req, res) => {
    try {
        const {name, iata, icao, callsign, country, active} = req.body;
        const max                                           = await Airline.max('id');

        const newAirline = {
            id       : max + 1,
            name     : name,
            iata     : iata.toUpperCase(),
            icao     : icao.toUpperCase(),
            callsign : callsign.toUpperCase(),
            country  : country,
            active   : active,
            createdAt: moment()
        };

        const airline = await Airline.findOne({where: {iata}});
        if (airline) return res.status(400).json({msg: 'This airline is already exist!'});

        const status = await Airline.create(newAirline);
        if (!status) return res.status(400).json({msg: 'Please try again with full information!'});

        return res.status(200).json({msg: 'New Airline Information saved successfully.'});
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.edit = async (req, res) => {
    try {
        const id = req.params.id;

        const airline = await Airline.findOne({where: {id}});
        if (!airline) return res.status(400).json({msg: 'Airline information didn\'t found!'});

        return res.status(200).json(airline);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.update = async (req, res) => {
    try {
        const {id, name, iata, icao, callsign, country, active} = req.body;

        const updateAirline = {
            id       : id,
            name     : name,
            iata     : iata.toUpperCase(),
            icao     : icao.toUpperCase(),
            callsign : callsign.toUpperCase(),
            country  : country,
            active   : active,
            updatedAt: moment(),
        };

        const status = await Airline.findOne({where: {id}});
        if (!status) return res.status(400).json({msg: 'This airline didn\'t found!'});

        const airline = await Airline.update(updateAirline, {where: {id}});
        if (!airline) return res.status(400).json({msg: 'Please try again with full information!'});

        return res.status(200).json({msg: 'Airline Information updated successfully.'});
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.delete = async (req, res) => {
    try {
        const {id} = req.body;

        const status = await Airline.destroy({where: {id}});
        if (!status) return res.status(400).json({msg: 'Please try again!'});

        return res.status(200).json({msg: 'One Airline deleted successfully!'});
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};