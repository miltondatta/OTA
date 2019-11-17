//Include All Air Service API Here
//We Will Define Parameter Here for Request Based on API Name
//Only Call Particular Function Like Shop from here, will create more controller like Book, Ticket Sepearately 
var fs           = require("fs");
const travelport = require('../travelport/travelportController');
console.log("travelport");
console.log(travelport);

exports.shop = async (req, res) => {

    const { from, to, departureDate, ADT, CNN, INF, cabins } = req.body; 

    //For travelport
    const params = {
        legs: [
            {
                from: 'LWO',
                to: 'JKT',
                departureDate: departureDate
            }
        ],
        passengers: {
            ADT: parseInt(ADT),
            CNN: parseInt(CNN),
            INF: parseInt(INF)
        },
        cabins: [cabins],
        pricing   : {
            currency: 'USD'
        },
    };  


    travelport.shop(params)
    .then(
        res => fs.writeFile("api_output/travelport/shop.txt", JSON.stringify(res, null, 4), (err) => {
            console.log("Successfully Written to File.");
        }),
        err => console.log(err)
    );
    return res.status(200).json(req.body);
};