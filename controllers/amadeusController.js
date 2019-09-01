var Amadeus = require('amadeus');
const dotenv = require('dotenv');
dotenv.config();

var amadeus = new Amadeus({
    clientId: process.env.AMADEUS_CLIENT_ID,
    clientSecret: process.env.AMADEUS_CLIENT_SECRET
});

exports.locations = async (req, res) => {


    amadeus.referenceData.locations.get({
        keyword: 'LON',
        subType: Amadeus.location.any
    }).then(function (response) {
       return res.json(response);
    }).catch(function (responseError) {
        return res.json(responseError);
    });


    



   // return res.json({ 'msg': 'amadeus' });

};