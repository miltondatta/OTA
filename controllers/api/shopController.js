//Include All Air Service API Here
//We Will Define Parameter Here for Request Based on API Name
//Only Call Particular Function Like Shop from here, will create more controller like Book, Ticket Sepearately 
var fs           = require("fs");
const travelport = require('../travelport/travelportController');
console.log("travelport");
console.log(travelport);

exports.shop = async (req, res) => {

    fs.readFile("api_output/travelport/shop.txt", {encoding: 'utf-8'}, function(err, apiData){
        if (!err) {
            let parseData = JSON.parse(apiData);
            console.log(parseData[0].directions);
          

        } else {
            console.log(err);
        }
    });


    let response = {};
    response['status']  = true;
    response['message'] = 'Successfully process your request!';
    response['data']    = [];
    return res.status(200).json(response);

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

    
   // let response = {};
    travelport.shop(params)
    .then(
        apiRes => {
            response['status']  = true;
            response['message'] = 'Successfully process your request!';
            response['data']    = [];
            return res.status(200).json(response);
        },
        apiErr => {
            return res.status(200).json({ 'status': false, 'message': 'There is a problem in your request, please try again later!' });
        }
    );
    
};