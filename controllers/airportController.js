const Airport = require('../models').airport;
const moment  = require("moment");

exports.index = async (req, res) => {
    try {
        const airports = await Airport.findAll(
            {
                attributes: ["id", "ident", "type", "name", "latitude_deg", "longitude_deg", "elevation_ft", "continent",
                             "iso_country", "iso_region", "municipality", "scheduled_service", "gps_code", "iata_code",
                             "local_code", "home_link", "wikipedia_link", "keywords", "score", "last_updated"],
                
                order: [['id', 'DESC']], limit: 10
            }
        );
        if (!airports) return res.status(400).json({msg: 'Something else!'});
        
        return res.status(200).json(airports);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.getAirportByCountry = async (req, res) => {
    const iso_country = req.body.iso_country;
    
    try {
        const airports = await Airport.findAll({
                                                   attributes: ["id", "ident", "type", "name", "latitude_deg", "longitude_deg",
                                                                "elevation_ft", "continent", "iso_country", "iso_region",
                                                                "municipality", "scheduled_service", "gps_code", "iata_code",
                                                                "local_code", "home_link", "wikipedia_link", "keywords", "score",
                                                                "last_updated"],
                                                   where     : {
                                                       iso_country: iso_country
                                                   },
                                                   order     : [['id', 'DESC']]
                                               }
        );
        if (!airports) return res.status(400).json({msg: 'Something else!'});
        
        return res.status(200).json(airports);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

/*exports.checkIata = async (req, res) => {
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
 };*/

/*exports.store = async (req, res) => {
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
 };*/

exports.edit = async (req, res) => {
    try {
        const id           = req.params.id;
        const airport_data = await Airport.findOne({
                                                       attributes: ["id", "ident", "type", "name", "latitude_deg",
                                                                    "longitude_deg", "elevation_ft", "continent", "iso_country",
                                                                    "iso_region", "municipality", "scheduled_service", "gps_code",
                                                                    "iata_code", "local_code", "home_link", "wikipedia_link",
                                                                    "keywords", "score", "last_updated"],
                                                       where     : {
                                                           id: id
                                                       },
                                                       order     : [['id', 'DESC']]
                                                   }
        );
        return res.status(200).json(airport_data);
        if (!airport_data) return res.status(400).json({msg: 'Airport information not found!'});
        
        return res.status(200).json(airport_data);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Errors!'});
    }
};

exports.update = async (req, res) => {
    try {
        const {
                  id,
                  ident,
                  type,
                  name,
                  latitude_deg,
                  longitude_deg,
                  elevation_ft,
                  continent,
                  iso_country,
                  iso_region,
                  municipality,
                  scheduled_service,
                  gps_code,
                  iata_code,
                  local_code,
                  home_link,
                  wikipedia_link,
                  keywords,
                  score,
                  last_updated,
              } = req.body;
        
        const updateAirport = {
            id               : id,
            ident            : ident,
            type             : type,
            name             : name,
            latitude_deg     : latitude_deg,
            longitude_deg    : longitude_deg,
            elevation_ft     : elevation_ft,
            continent        : continent,
            iso_country      : iso_country,
            iso_region       : iso_region,
            municipality     : municipality,
            scheduled_service: scheduled_service,
            gps_code         : gps_code,
            iata_code        : iata_code,
            local_code       : local_code,
            home_link        : home_link,
            wikipedia_link   : wikipedia_link,
            keywords         : keywords,
            score            : score,
            last_updated     : moment(),
        };
        
        const status = await Airport.findOne({where: {id}});
        if (!status) return res.status(400).json({msg: 'This Airport not found!'});
        
        const airline = await Airport.update(updateAirport, {where: {id}});
        if (!airline) return res.status(400).json({msg: 'Please try again with full information!'});
        
        return res.status(200).json({msg: 'Airport Information updated successfully.'});
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};

/*
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
 };*/
