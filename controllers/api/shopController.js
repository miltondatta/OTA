//Include All Air Service API Here
//We Will Define Parameter Here for Request Based on API Name
//Only Call Particular Function Like Shop from here, will create more controller like Book, Ticket Sepearately 

var fs           = require("fs");
var moment       = require("moment");
const travelport = require('../travelport/travelportController');

const airport    = require('../../models').airport; 
const airline    = require('../../models').airline; 

exports.shop = async (req, res) => {
 /*   //Prepare data from file 
    let shopData            = [];
    let iatas               = [];
    let airlines            = [];

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
                        iatas.push(flight[j].from);
                        iatas.push(flight[j].to);
                        flightData['from_city']         = flight[j].from;
                        flightData['to_city']           = flight[j].to;
                        flightData['platingCarrier']    = flight[j].platingCarrier;
                        flightData['platingCarrier_name']    = flight[j].platingCarrier;
                        airlines.push(flightData['platingCarrier']);
                        let dataSegments                = flight[j].segments; 
                        let segmentLength               = dataSegments.length;
                        flightData['first_departure']   = dataSegments[0].departure;
                        flightData['last_arrival']      = dataSegments[segmentLength - 1].arrival;
                        let start_date                  = moment(flightData['first_departure']);
                        let end_date                    = moment(flightData['last_arrival']);
                        let minutes                     = parseInt(moment.duration(end_date.diff(start_date)).asMinutes());
                        flightData['same_day_arrival']  = (moment(start_date).format('YYYY-MM-DD') == moment(end_date).format('YYYY-MM-DD')) ? true : false; 
                        let total_duration              = '';
                            total_duration              += (minutes >= 60) ? parseInt(minutes / 60) + 'h ' : '';
                            total_duration              += (minutes % 60 > 0) ? parseInt(minutes % 60) + 'm' : '';
                        flightData['total_duration']    = total_duration;

                        let segments     =  [];
                        for(let k = 0; k < segmentLength; k++) {
                            let segment = {};
                            segment['from']              = dataSegments[k].from;
                            segment['to']                = dataSegments[k].to;   
                            segment['from_city']         = dataSegments[k].from;
                            segment['to_city']           = dataSegments[k].to;   
                            iatas.push(segment['to']);
                            segment['departure']        = dataSegments[k].departure;   
                            segment['arrival']          = dataSegments[k].arrival;   
                            segment['airline']          = dataSegments[k].airline;   
                            segment['airline_name']     = dataSegments[k].airline;   
                            airlines.push(dataSegments[k].airline);
                            segment['flightNumber']     = dataSegments[k].flightNumber;   
                            segment['duration']         = dataSegments[k].duration[0];  
                            minutes                     = parseInt(dataSegments[k].duration[0]);  
                            total_duration              = '';
                            total_duration              += (minutes >= 60) ? parseInt(minutes / 60) + 'h ' : '';
                            total_duration              += (minutes % 60 > 0) ? parseInt(minutes % 60) + 'm' : '';
                            segment['total_duration']   = total_duration;
                            segment['bookingClass'] = dataSegments[k].bookingClass;   
                            segment['baggage']      = dataSegments[k].baggage[0].amount + ' ' + dataSegments[k].baggage[0].units;   
                            segments.push(segment);
                        }
                        flightData['segments']      =   segments;
                        flightData['stoppage']      = (segmentLength > 1) ? ((segmentLength - 1) + ' stops') : 'Direct'; 
                        shopData.push(flightData);
                    }              
                    
                });
            }
            
            
            //Get City data By IATA Code
            if (iatas.length) {
                airport.findAll({
                    attributes: ['iata_code', 'municipality'],
                    where: {
                        iata_code: iatas
                    }
                }).then(modelDatas => {
                    let cities = [];
                    modelDatas.map(function (record) {
                        cities[record.iata_code] = record.municipality;
                    });
                    //Get AirLine Data By Plating Carrier and Airlne
                    airline.findAll({
                        attributes: ['iata', 'name'],
                        where: {
                            iata: airlines
                        }
                    }).then(records => {
                        let airline_names = [];
                        records.map(function (record) {
                            airline_names[record.iata] = record.name;
                        });

                        shopData.forEach(element => {
                            element.from_city = cities[element.from] ? cities[element.from] : element.from;
                            element.to_city = cities[element.to] ? cities[element.to] : element.to;
                            element.platingCarrier_name = airline_names[element.platingCarrier] ? airline_names[element.platingCarrier] : element.platingCarrier;
                            element.segments.forEach(segment => {
                                segment.from_city = cities[segment.from] ? cities[segment.from] : segment.from;
                                segment.to_city = cities[segment.to] ? cities[segment.to] : segment.to;
                                segment.airline_name = airline_names[segment.airline] ? airline_names[segment.airline] : segment.airline;
                            });
                        });

                        let response = {};
                        response['status'] = true;
                        response['message'] = 'Successfully process your request!';
                        response['data'] = shopData;
                        return res.status(200).json(response);
                    });
                });
            }

        } else {
            console.log(err);
        }
    });
    return;
    
    */




   /*  
    const flightInfo_param = {
        airline: 'LH',
        flightNumber: '2551',
        departure: '2019-12-04',
    };

    travelport.flightInfo(flightInfo_param).then(
        data => fs.writeFile("api_output/travelport/flightInfo2.txt", JSON.stringify(data, null, 4), (err) => {
            console.log("start_writing");
            console.log(data);
            console.log("End Writing");
        }), err => fs.writeFile("api_output/travelport/flightInfo2.txt", JSON.stringify(err, null, 4), (err) => {
            console.log("err start_writing");
            console.log(err);
            console.log("err End Writing");
        }) 
     );
    return; 
        */



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
        }
    };  


    
    //For travelport - Response preparation
    travelport.shop(params)
    .then(
        apiRes => {
                console.log("API Response");
                fs.writeFile("api_output/travelport/shop.txt", JSON.stringify(apiRes, null, 4), (err) => {
                    console.log("Successfully Written to File.");
                });

            const fromSegments = apiRes['0'].directions['0']['0'].segments;
           // const toSegments   = apiRes['0'].directions['1']['0'].segments;
            const book = {
                segments: fromSegments,
                rule: 'SIP',
                passengers: [{
                    lastName: 'SKYWALKER',
                    firstName: 'ANAKIN',
                    passCountry: 'UA',
                    passNumber: 'ES221731',
                    birthDate: '1968-07-25',
                    gender: 'M',
                    ageCategory: 'ADT',
                }],
                phone: {
                    countryCode: '38',
                    location: 'IEV',
                    number: '0660419905',
                },
                deliveryInformation: {
                    name: 'Anakin Skywalker',
                    street: 'Sands street, 42',
                    zip: '42042',
                    country: 'Galactic Empire',
                    city: 'Mos Eisley',
                },
                allowWaitlist: true,
            };

            console.log("Call Booking Request");

            travelport.book(book).then(
                res => fs.writeFile("api_output/travelport/book.txt", JSON.stringify(res, null, 4), (res) => {
                    console.log("Successfully Written to File.");
                }),
                err => fs.writeFile("api_output/travelport/book.txt", JSON.stringify(err, null, 4), (err) => {
                    console.log("Error Written to File.");
                })
            );
        },
        apiErr => {
            return res.status(200).json({ 'status': false, 'message': 'There is a problem in your request, please try again later!' });
        }
    ); 



    
};