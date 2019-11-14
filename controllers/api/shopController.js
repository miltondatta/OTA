//Include All Air Service API Here
//We Will Define Parameter Here for Request Based on API Name
//Only Call Particular Function Like Shop from here, will create more controller like Book, Ticket Sepearately 
const travelport = require('../travelport/travelportController');

exports.test = async (req, res) => {
    return res.status(200).json(req.body);
};