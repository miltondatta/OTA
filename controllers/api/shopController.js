//Include All Air Service API Here
//We Will Define Parameter Here for Request Based on API Name
//Only Call Particular Function Like Shop from here, will create more controller like Book, Ticket Sepearately 

var fs     = require("fs");
var moment = require("moment");
const util = require('util');

const readFile = util.promisify(fs.readFile);

const travelport = require('../travelport/travelportController');
//const amadeus    = require('../amadeus/amadeusController');

const airport              = require('../../models').airport;
const airline              = require('../../models').airline;
const promotionCalculation = require('../../utility/promotionCalculations');

/*
 //Test Amadeus
 exports.shop = (req, res) => {
 amadeus.shopping.flightOffers.get({
 origin: 'NYC',
 destination: 'MAD',
 departureDate : '2019-12-05'
 }).then(function (response) {
 fs.writeFile("api_output/amadeus/flightOffers.txt", JSON.stringify(response, null, 4), (err) => {
 console.log("Successfully Written to File.");
 });
 return res.json(response);
 }).catch(function (responseError) {
 return res.json(responseError);
 });
 };
 return; */

exports.shop = async (req, res) => {
    
    //Prepare data from file
    let shopData = [];
    let iatas    = [];
    let airlines = [];
    let apiData  = await readFile("api_output/travelport/shop.txt");
    let currency = 'USD'
    
    let parseData = JSON.parse(apiData);
    for (let i = 0; i < parseData.length; i++) {
        let directions = parseData[i].directions;
        directions.forEach(flight => {
            for (let j = 0; j < flight.length; j++) {
                let flightData                 = {};
                flightData['api_source']       = 1;
                flightData['is_promo_applied'] = 0;
                flightData['currency']         = currency;
                flightData['totalPrice']       = parseFare(parseData[i].totalPrice, currency);
                flightData['basePrice']        = parseFare(parseData[i].basePrice, currency);
                flightData['taxes']            = parseFare(parseData[i].taxes, currency);
                flightData['execTotalPrice']   = parseFare(parseData[i].totalPrice, currency);
                flightData['execBasePrice']    = parseFare(parseData[i].basePrice, currency);
                flightData['actualTotalPrice'] = parseFare(parseData[i].totalPrice, currency);
                flightData['actualBasePrice']  = parseFare(parseData[i].basePrice, currency);
                flightData['from']             = flight[j].from;
                flightData['to']               = flight[j].to;
                iatas.push(flight[j].from);
                iatas.push(flight[j].to);
                flightData['from_city']           = flight[j].from;
                flightData['to_city']             = flight[j].to;
                flightData['platingCarrier']      = flight[j].platingCarrier;
                flightData['platingCarrier_name'] = flight[j].platingCarrier;
                airlines.push(flightData['platingCarrier']);
                let dataSegments               = flight[j].segments;
                let segmentLength              = dataSegments.length;
                flightData['first_departure']  = dataSegments[0].departure;
                flightData['last_arrival']     = dataSegments[segmentLength - 1].arrival;
                let start_date                 = moment(flightData['first_departure']);
                let end_date                   = moment(flightData['last_arrival']);
                let minutes                    = parseInt(moment.duration(end_date.diff(start_date)).asMinutes());
                flightData['same_day_arrival'] = (moment(start_date).format('YYYY-MM-DD') == moment(end_date).format('YYYY-MM-DD')) ?
                                                 true : false;
                let total_duration             = '';
                total_duration += (minutes >= 60) ? parseInt(minutes / 60) + 'h ' : '';
                total_duration += (minutes % 60 > 0) ? parseInt(minutes % 60) + 'm' : '';
                flightData['total_duration']   = total_duration;
                
                let segments = [];
                for (let k = 0; k < segmentLength; k++) {
                    let segment          = {};
                    segment['from']      = dataSegments[k].from;
                    segment['to']        = dataSegments[k].to;
                    segment['from_city'] = dataSegments[k].from;
                    segment['to_city']   = dataSegments[k].to;
                    iatas.push(segment['to']);
                    segment['departure']    = dataSegments[k].departure;
                    segment['arrival']      = dataSegments[k].arrival;
                    segment['airline']      = dataSegments[k].airline;
                    segment['airline_name'] = dataSegments[k].airline;
                    airlines.push(dataSegments[k].airline);
                    segment['flightNumber']   = dataSegments[k].flightNumber;
                    segment['duration']       = dataSegments[k].duration[0];
                    minutes                   = parseInt(dataSegments[k].duration[0]);
                    total_duration            = '';
                    total_duration += (minutes >= 60) ? parseInt(minutes / 60) + 'h ' : '';
                    total_duration += (minutes % 60 > 0) ? parseInt(minutes % 60) + 'm' : '';
                    segment['total_duration'] = total_duration;
                    segment['bookingClass']   = dataSegments[k].bookingClass;
                    segment['baggage']        = dataSegments[k].baggage[0].amount + ' ' + dataSegments[k].baggage[0].units;
                    segments.push(segment);
                }
                flightData['segments']          = segments;
                flightData['stoppage']          = (segmentLength > 1) ? ((segmentLength - 1) + ' stops') : 'Direct';
                flightData['promo_amount']      = 0;
                flightData['promo_amount_desc'] = null;
                flightData['promo_id']          = null;
                shopData.push(flightData);
            }
            
        });
    }
    
    if (iatas.length) {
        let airports = await airport.findAll({
                                                 attributes : ['iata_code', 'municipality'],
                                                 where      : {
                                                     iata_code : iatas
                                                 }
                                             });
        let cities   = [];
        airports.map(function (record) {
            cities[record.iata_code] = record.municipality;
        });
        
        let airlineData   = await airline.findAll({
                                                      attributes : ['iata', 'name'],
                                                      where      : {
                                                          iata : airlines
                                                      }
                                                  });
        let airline_names = [];
        airlineData.map(function (record) {
            airline_names[record.iata] = record.name;
        });
        
        shopData.forEach(element => {
            element.from_city           = cities[element.from] ? cities[element.from] : element.from;
            element.to_city             = cities[element.to] ? cities[element.to] : element.to;
            element.platingCarrier_name = airline_names[element.platingCarrier] ? airline_names[element.platingCarrier] :
                                          element.platingCarrier;
            element.segments.forEach(segment => {
                segment.from_city    = cities[segment.from] ? cities[segment.from] : segment.from;
                segment.to_city      = cities[segment.to] ? cities[segment.to] : segment.to;
                segment.airline_name = airline_names[segment.airline] ? airline_names[segment.airline] : segment.airline;
            });
        });
        
        let shopDataAfterCalculation = await promotionCalculation(shopData);
        let response        = {};
        response['status']  = true;
        response['message'] = 'Successfully process your request!';
        response['data']    = shopDataAfterCalculation;
        return res.status(200).json(response);
    } else {
        let response        = {};
        response['status']  = true;
        response['message'] = 'Successfully process your request!';
        response['data']    = shopData;
        return res.status(200).json(response);
    }
    
    return;
    
    /*
     const flightInfo_param = {
     airline: 'LO',
     flightNumber: '764',
     departure: '2019-12-02',
     };
     
     travelport.flightInfo(flightInfo_param).then(
     data => console.log(data),
     err => console.log(err)
     );
     return;  */
    
    /*   
     const shop_params = {
     legs      : [
     {
     from         : 'DAC',
     to           : 'CGP',
     departureDate: '2019-12-05'
     }
     ],
     passengers: {
     ADT: 1
     },
     cabins    : ['Economy'],
     pricing   : {
     currency: 'USD'
     },
     };
     
     
     travelport.shop(shop_params)
     .then(
     res => fs.writeFile("api_output/travelport/shop.txt", JSON.stringify(res, null, 4), (err) => {
     console.log("Successfully Written to File.");
     }),
     err => console.log(err)
     );
     return;  */
    
    /*       
     //Ticket
     const ticket_params = {
     commission: {
     amount: 'UAH10',
     },
     fop: {
     type: 'Cash',
     },
     pnr: '5NKHQK',
     };
     
     travelport.ticket(ticket_params)
     .then(
     data => fs.writeFile("api_output/travelport/ticket.txt", JSON.stringify(data, null, 4), (err) => {
     console.log("ticket Successfully Written to File.");
     }),
     err => fs.writeFile("api_output/travelport/ticket.txt", JSON.stringify(err, null, 4), (err) => {
     console.log("ticket Error Successfully Written to File.");
     })
     );
     return;   */
    
    /*
     //Get PNR
     const pnr_params = {
     pnr: '5CVR3S'
     };
     
     travelport.getPNR(pnr_params)
     .then(
     data => fs.writeFile("api_output/travelport/getPNR.txt", JSON.stringify(data, null, 4), (err) => {
     console.log("getPNR Successfully Written to File.");
     }),
     err => fs.writeFile("api_output/travelport/getPNR.txt", JSON.stringify(err, null, 4), (err) => {
     console.log("getPNR Error Successfully Written to File.");
     })
     );
     return; */
    
    /*
     //Get Tickets 
     const tickets_params = {
     reservationLocatorCode: 'QC6PPN',
     };
     
     travelport.getTickets(tickets_params)
     .then(
     data => fs.writeFile("api_output/travelport/getTickets.txt", JSON.stringify(data, null, 4), (err) => {
     console.log("getTickets Successfully Written to File.");
     }),
     err => fs.writeFile("api_output/travelport/getTickets.txt", JSON.stringify(err, null, 4), (err) => {
     console.log("getTickets Error Successfully Written to File.");
     })
     );
     return; */
    
    /*
     const getUniversalRecordByPNR_params = {
     pnr: '5CVR3S'
     };
     
     travelport.getUniversalRecordByPNR(getUniversalRecordByPNR_params)
     .then(
     data => fs.writeFile("api_output/travelport/getUniversalRecordByPNR.txt", JSON.stringify(data, null, 4), (err) => {
     console.log("getUniversalRecordByPNR Successfully Written to File.");
     }),
     err => fs.writeFile("api_output/travelport/getUniversalRecordByPNR.txt", JSON.stringify(err, null, 4), (err) => {
     console.log("getUniversalRecordByPNR Error Successfully Written to File.");
     })
     );
     return;  */
    
    /*
     const book = {
     segments: [
     {
     "from": "DAC",
     "to": "CGP",
     "group": 0,
     "departure": "2019-12-15T07:40:00.000+06:00",
     "arrival": "2019-12-15T08:25:00.000+06:00",
     "airline": "BG",
     "flightNumber": "411",
     "uapi_segment_ref": "9q4bc74R2BKAXON+AAAAAA==",
     "serviceClass": "Economy",
     "plane": [
     "738"
     ],
     "duration": [
     "45"
     ],
     "techStops": [],
     "bookingClass": "Y",
     "baggage": [
     {
     "units": "kilograms",
     "amount": 20
     }
     ],
     "fareBasisCode": "Y"
     }
     ],
     rule: 'SIP',
     //platingCarrier: "HR",
     phone: { countryCode: '88', location: 'DAC', number: '123456781' },
     passengers: [{ lastName: 'Doe', firstName: 'John', passCountry: 'BD', passNumber: 'ET126712', passExpireDate: '2020-03-01', birthDate: '1997-02-18', gender: 'M', ageCategory: 'ADT' }],
     allowWaitlist: true
     };
     
     console.log("Call Booking Request");
     
     travelport.book(book).then(
     res => fs.writeFile("api_output/travelport/book.txt", JSON.stringify(res, null, 4), (res) => {
     console.log("Booking Successfully Written into File.");
     }),
     err => fs.writeFile("api_output/travelport/book.txt", JSON.stringify(err, null, 4), (err) => {
     console.log("Booking Error Written into File.");
     })
     );
     return;  */
    
    /* Main function for shop */
    
    const {from, to, departureDate, ADT, CNN, INF, cabins} = req.body;
    //For travelport - Params preparation
    const params                                           = {
        legs       : [
            {
                from          : from,
                to            : to,
                departureDate : departureDate
            }
        ],
        passengers : {
            ADT : parseInt(ADT),
            CNN : parseInt(CNN),
            INF : parseInt(INF)
        },
        cabins     : [cabins],
        pricing    : {
            currency : 'USD'
        }
    };
    
    //For travelport - Response preparation
    travelport.shop(params)
              .then(
                  apiRes => {
                      let shopData  = [];
                      let iatas     = [];
                      let airlines  = [];
                      let parseData = apiRes;
                      for (let i = 0; i < parseData.length; i++) {
                          let directions = parseData[i].directions;
                          directions.forEach(flight => {
                              for (let j = 0; j < flight.length; j++) {
                                  let flightData           = {};
                                  flightData['api_source'] = 1;
                                  flightData['totalPrice'] = parseData[i].totalPrice;
                                  flightData['basePrice']  = parseData[i].basePrice;
                                  flightData['taxes']      = parseData[i].taxes;
                                  flightData['from']       = flight[j].from;
                                  flightData['to']         = flight[j].to;
                                  iatas.push(flight[j].from);
                                  iatas.push(flight[j].to);
                                  flightData['from_city']           = flight[j].from;
                                  flightData['to_city']             = flight[j].to;
                                  flightData['platingCarrier']      = flight[j].platingCarrier;
                                  flightData['platingCarrier_name'] = flight[j].platingCarrier;
                                  airlines.push(flightData['platingCarrier']);
                                  let dataSegments               = flight[j].segments;
                                  let segmentLength              = dataSegments.length;
                                  flightData['segments']         = flight[j].segments;
                                  flightData['first_departure']  = dataSegments[0].departure;
                                  flightData['last_arrival']     = dataSegments[segmentLength - 1].arrival;
                                  let start_date                 = moment(flightData['first_departure']);
                                  let end_date                   = moment(flightData['last_arrival']);
                                  let minutes                    = parseInt(moment.duration(end_date.diff(start_date)).asMinutes());
                                  flightData['same_day_arrival'] = (moment(start_date).format('YYYY-MM-DD') == moment(end_date)
                                      .format('YYYY-MM-DD')) ? true : false;
                                  let total_duration             = '';
                                  total_duration += (minutes >= 60) ? parseInt(minutes / 60) + 'h ' : '';
                                  total_duration += (minutes % 60 > 0) ? parseInt(minutes % 60) + 'm' : '';
                                  flightData['total_duration']   = total_duration;
                        
                                  let segments = [];
                                  for (let k = 0; k < segmentLength; k++) {
                                      let segment          = {};
                                      segment['from']      = dataSegments[k].from;
                                      segment['to']        = dataSegments[k].to;
                                      segment['from_city'] = dataSegments[k].from;
                                      segment['to_city']   = dataSegments[k].to;
                                      iatas.push(segment['to']);
                                      segment['departure']    = dataSegments[k].departure;
                                      segment['arrival']      = dataSegments[k].arrival;
                                      segment['airline']      = dataSegments[k].airline;
                                      segment['airline_name'] = dataSegments[k].airline;
                                      airlines.push(dataSegments[k].airline);
                                      segment['flightNumber']   = dataSegments[k].flightNumber;
                                      segment['duration']       = dataSegments[k].duration[0];
                                      minutes                   = parseInt(dataSegments[k].duration[0]);
                                      total_duration            = '';
                                      total_duration += (minutes >= 60) ? parseInt(minutes / 60) + 'h ' : '';
                                      total_duration += (minutes % 60 > 0) ? parseInt(minutes % 60) + 'm' : '';
                                      segment['total_duration'] = total_duration;
                                      segment['bookingClass']   = dataSegments[k].bookingClass;
                                      segment['baggage']        = dataSegments[k].baggage[0].amount + ' ' + dataSegments[k].baggage[0].units;
                                      segments.push(segment);
                                  }
                                  flightData['segments'] = segments;
                                  flightData['stoppage'] = (segmentLength > 1) ? ((segmentLength - 1) + ' stops') : 'Direct';
                                  shopData.push(flightData);
                              }
                    
                          });
                      }
            
                      //Get City data By IATA Code
                      if (iatas.length) {
                          airport.findAll({
                                              attributes : ['iata_code', 'municipality'],
                                              where      : {
                                                  iata_code : iatas
                                              }
                                          }).then(modelDatas => {
                              let cities = [];
                              modelDatas.map(function (record) {
                                  cities[record.iata_code] = record.municipality;
                              });
                              //Get AirLine Data By Plating Carrier and Airlne
                              airline.findAll({
                                                  attributes : ['iata', 'name'],
                                                  where      : {
                                                      iata : airlines
                                                  }
                                              }).then(records => {
                                  let airline_names = [];
                                  records.map(function (record) {
                                      airline_names[record.iata] = record.name;
                                  });
                        
                                  shopData.forEach(element => {
                                      element.from_city           = cities[element.from] ? cities[element.from] : element.from;
                                      element.to_city             = cities[element.to] ? cities[element.to] : element.to;
                                      element.platingCarrier_name = airline_names[element.platingCarrier] ?
                                                                    airline_names[element.platingCarrier] : element.platingCarrier;
                                      element.segments.forEach(segment => {
                                          segment.from_city    = cities[segment.from] ? cities[segment.from] : segment.from;
                                          segment.to_city      = cities[segment.to] ? cities[segment.to] : segment.to;
                                          segment.airline_name = airline_names[segment.airline] ? airline_names[segment.airline] :
                                                                 segment.airline;
                                      });
                                  });
                        
                                  let response        = {};
                                  response['status']  = true;
                                  response['message'] = 'Successfully process your request!';
                                  response['data']    = shopData;
                                  return res.status(200).json(response);
                              });
                          });
                      }
                  },
                  apiErr => {
                      return res.status(200).json({'status' : false, 'message' : 'There is a problem in your request, please try again later!'});
                  }
              );
    
};

const parseFare = (amount, currency) => {
    return parseFloat(amount.substring(currency.length));
};