var Amadeus = require('amadeus');
const dotenv = require('dotenv');
dotenv.config();

var amadeus = new Amadeus({
    clientId: process.env.AMADEUS_CLIENT_ID,
    clientSecret: process.env.AMADEUS_CLIENT_SECRET
});
module.exports = amadeus;


/*
exports.locations = async (req, res) => {
    amadeus.referenceData.locations.get({
        keyword: 'LON',
        subType: Amadeus.location.any
    }).then(function (response) {
        return res.json(response);
    }).catch(function (responseError) {
        return res.json(responseError);
    });
};

//Get all flight data
exports.flight_dates = (req, res) => {
    amadeus.shopping.flightDates.get({
        origin: 'MAD',
        destination: 'MUC'
    }).then(function (response) {
        return res.json(response);
    }).catch(function (responseError) {
        return res.json(responseError);
    });
};


//Get flight data for a departure date
exports.flight_offers = (req, res) => {
    amadeus.shopping.flightOffers.get({
        origin: req.query.origin,
        destination: req.query.destination,
        departureDate: req.query.departure
    }).then(function (response) {
        return res.json(response);
    }).catch(function (responseError) {
        return res.json(responseError);
    });
};

*/


