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
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.store = async (req, res) => {
    try {
        const {
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
        
        const newAirport = {
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
            createdAt        : moment()
        };
        const status     = await Airport.create(newAirport);
        if (!status) return res.status(400).json({msg: 'Please try again with full information!'});
        
        return res.status(200).json({msg: 'New Airline Information saved successfully.'});
    } catch (err) {
        return res.status(500).json({msg: 'Server Error!'});
    }
};

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
        
    } catch (err) {
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
        return res.status(500).json({msg: 'Server Error!'});
    }
};

exports.delete = async (req, res) => {
    try {
        const {id} = req.body;
        const status = await Airport.destroy({where: {id}});
        if (!status) return res.status(400).json({msg: 'Please try again!'});
        return res.status(200).json({msg: 'One Airport deleted successfully!'});
    } catch (err) {
        return res.status(500).json({msg: 'Server Error!'});
    }
};
