//Include All Air Service API Here
//We Will Define Parameter Here for Request Based on API Name
//Only Call Particular Function Like Shop from here, will create more controller like Book, Ticket Sepearately 

var fs           = require("fs");
const travelport = require('../travelport/travelportController');
console.log("travelport");
console.log(travelport);

exports.shop = async (req, res) => {
    
    
    //Prepare data from file 
    let shopData = [];
    fs.readFile("api_output/travelport/shop.txt", {encoding: 'utf-8'}, function(err, apiData){
        if (!err) {
            let parseData  = JSON.parse(apiData);
            for(let i = 0; i < parseData.length; i++){
                let directions = parseData[i].directions;
                directions.forEach(flight => {
                    for(let j = 0; j < flight.length; j++) {                
                        let flightData = {};
                        flightData['source']            = 1;
                        flightData['totalPrice']        = parseData[i].totalPrice;
                        flightData['basePrice']         = parseData[i].basePrice;
                        flightData['taxes']             = parseData[i].taxes;
                        flightData['from']              = flight[j].from;
                        flightData['to']                = flight[j].to;
                        flightData['from_city']         = flight[j].from;
                        flightData['to_city']           = flight[j].to;
                        flightData['platingCarrier']    = flight[j].platingCarrier;
                        let dataSegments                = flight[j].segments; 
                        let segments     =  [];
                        for(let k = 0; k < dataSegments.length; k++) {
                            let segment = {};
                            segment['from']         = dataSegments[k].from;
                            segment['to']           = dataSegments[k].to;   
                            segment['departure']    = dataSegments[k].departure;   
                            segment['arrival']      = dataSegments[k].arrival;   
                            segment['airline']      = dataSegments[k].airline;   
                            segment['flightNumber'] = dataSegments[k].flightNumber;   
                            segment['duration']     = dataSegments[k].duration[0];  
                            segment['bookingClass'] = dataSegments[k].bookingClass;   
                            segment['baggage']      = dataSegments[k].baggage[0].amount + ' ' + dataSegments[k].baggage[0].units;   
                            segments.push(segment);
                        }
                        flightData['segments']      =   segments;
                        shopData.push(flightData);
                    }              
                    
                });
            } 

            let response            = {};
            response['status']      = true;
            response['message']     = 'Successfully process your request!';
            response['data']        = shopData;
            return res.status(200).json(response);
        } else {
            console.log(err);
        }
    });
    return; 



    const { from, to, departureDate, ADT, CNN, INF, cabins } = req.body; 


    //For travelport - Params preparation
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


    /*
    //For travelport - Response preparation
    travelport.shop(params)
    .then(
        apiRes => {
            let shopData   = [];
            //let parseData  = JSON.parse(apiRes);

            for(let i = 0; i < apiRes.length; i++){
                let directions = apiRes[i].directions;
                directions.forEach(flight => {
                    for(let j = 0; j < flight.length; j++) {                
                        let flightData = {};
                        flightData['source']            = 1;
                        flightData['totalPrice']        = apiRes[i].totalPrice;
                        flightData['basePrice']         = apiRes[i].basePrice;
                        flightData['taxes']             = apiRes[i].taxes;
                        flightData['from']              = flight[j].from;
                        flightData['to']                = flight[j].to;
                        flightData['from_city']         = flight[j].from;
                        flightData['to_city']           = flight[j].to;
                        flightData['platingCarrier']    = flight[j].platingCarrier;
                        let dataSegments                = flight[j].segments; 
                        let segments     =  [];
                        for(let k = 0; k < dataSegments.length; k++) {
                            let segment = {};
                            segment['from']         = dataSegments[k].from;
                            segment['to']           = dataSegments[k].to;   
                            segment['departure']    = dataSegments[k].departure;   
                            segment['arrival']      = dataSegments[k].arrival;   
                            segment['airline']      = dataSegments[k].airline;   
                            segment['flightNumber'] = dataSegments[k].flightNumber;   
                            segment['duration']     = dataSegments[k].duration[0];  
                            segment['bookingClass'] = dataSegments[k].bookingClass;   
                            segment['baggage']      = dataSegments[k].baggage[0].amount + ' ' + dataSegments[k].baggage[0].units;   
                            segments.push(segment);
                        }
                        flightData['segments']      =   segments;
                        shopData.push(flightData);
                    }              
                    
                });
            } 
            let response            = {};
            response['status']      = true;
            response['message']     = 'Successfully process your request!';
            response['data']        = shopData;
            return res.status(200).json(response);
        },
        apiErr => {
            return res.status(200).json({ 'status': false, 'message': 'There is a problem in your request, please try again later!' });
        }
    ); */



    
};