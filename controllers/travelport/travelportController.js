const uAPI = require('uapi-json');
var fs     = require("fs");
/*
ADT:1,  //Adult
CNN:1,  //Child
INF:1,  //infant without seat
INS:1,  //infant with a seat

cabins    : ['Economy'],
cabins    : ['Business'],
 */

const settings   = {
    auth      : {
        username    : 'Universal API/uAPI3568924042-3768c943',
        password    : 'dC2McA5EJTqT2Hz8WagJ33ApP',
        targetBranch: 'P7009927',
        region      : 'apac'
    },
    debug     : 3,
    production: false
};
const AirService = uAPI.createAirService(settings);

const params = {
    legs      : [
        {
            from         : 'LWO',
            to           : 'JKT',
            departureDate: '2019-11-15'
        }
    ],
    passengers: {
        ADT: 1
    },
    cabins    : ['Economy'],
    requestId : '4e2fd1f8-2221-4b6c-bb6e-cf05c367cf60',
    pricing   : {
        currency: 'USD'
    },
};


/*AirService.shop(params)
    .then(
        res => fs.writeFile("api_output/travelport/shop.txt", JSON.stringify(res), (err) => {
            console.log("Successfully Written to File.");
        }),
        err => console.log(err)
    );
;*/


AirService.shop(params)
    .then(
        res => fs.writeFile("api_output/travelport/shop.txt", JSON.stringify(res, null, 4), (err) => {
            console.log("Successfully Written to File.");
        }),
        err => console.log(err)
    );


/*
AirService.shop(params)
    .then(
        (results) => {
            const fromSegments = results['0'].directions['0']['0'].segments;
            const toSegments   = results['0'].directions['1']['0'].segments;
            const book         = {
                segments           : fromSegments.concat(toSegments),
                rule               : 'SIP',
                passengers         : [{
                    lastName   : 'SKYWALKER',
                    firstName  : 'ANAKIN',
                    passCountry: 'UA',
                    passNumber : 'ES221731',
                    birthDate  : '1968-07-25',
                    gender     : 'M',
                    ageCategory: 'ADT',
                }],
                phone              : {
                    countryCode: '38',
                    location   : 'IEV',
                    number     : '0660419905',
                },
                deliveryInformation: {
                    name   : 'Anakin Skywalker',
                    street : 'Sands street, 42',
                    zip    : '42042',
                    country: 'Galactic Empire',
                    city   : 'Mos Eisley',
                },
                allowWaitlist      : true,
            };
            return AirService.book(book).then(
                res => fs.writeFile("api_output/travelport/book.txt", JSON.stringify(res), (err) => {
                    console.log("Not Written to File.");
                }),
                err => console.log(err),
            );
        }
    )
    .catch(
        err => console.log('err', err)
    );*/

/*
const params = {
    airline: 'OS',
    flightNumber: '703',
    departure: '2019-11-21',
};

AirService.flightInfo(params).then(
    data => fs.writeFile("api_output/travelport/flightInfo1.txt", JSON.stringify(data), (err) => {
        console.log("start_writing");
        console.log(data);
        console.log("End Writing");
    }),
    err => console.log(err)
);*/

/*const params = [
    {
        airline: 'OS',
        flightNumber: '703',
        departure: '2016-11-21',
    },
    {
        airline: 'OS',
        flightNumber: '703',
        departure: '2016-11-28',
    },
    {
        airline: 'OS',
        flightNumber: '705',
        departure: '2016-11-28',
    }
];
AirService.flightInfo(params).then(
    data => fs.writeFile("api_output/travelport/flightInfo2.txt", JSON.stringify(data), (err) => {
        console.log("======================start_writing======================");
        console.log(data);
        console.log("======================End Writing======================");
    }),
    err => console.log(err)
);*/

/*
const AirServiceQuiet = uAPI.createAirService(
    {
        auth      : {
            username    : 'Universal API/uAPI3568924042-3768c943',
            password    : 'dC2McA5EJTqT2Hz8WagJ33ApP',
            targetBranch: 'P7009927',
            region      : 'apac'
        },
        production: false,
    }
);

const requestPTC = 'ADT';

const shop_params = {
    legs: [
        {
            from: 'LOS',
            to: 'IST',
            departureDate: '2019-11-18',
        },
        {
            from: 'IST',
            to: 'LOS',
            departureDate: '2019-11-21',
        },
    ],
    passengers: {
        [requestPTC]: 1,
    },
    cabins: ['Economy'],
    requestId: 'test',
};

AirServiceQuiet.shop(shop_params)
    .then((results) => {
        const forwardSegments = results['0'].directions['0']['0'].segments;
        console.log("======================forward Segment======================");
        const backSegments = results['0'].directions['1']['0'].segments;
        console.log("======================backward Segment======================");

        const farerules_params = {
            segments: forwardSegments.concat(backSegments),
            passengers: shop_params.passengers,
            long: true,
            requestId: 'test',
        };

        const respon =  AirService.fareRules(farerules_params);
        console.log("======================respon======================");
        console.log(respon);
        console.log("======================respon end======================");
        return respon;
    })
    .then(
        (res) => {
            console.log("======================response 197======================");
            console.log(JSON.stringify(res));
            console.log("======================end-response======================");
        },
        err => console.error(err)
    ).catch((err) => {
    console.log("======================Catch======================");
    console.error(err);
});*/

/*
const params = {
    reservationLocatorCode: 'RLC001',
};

AirService.getTickets(params).then(
    data => console.log(data),
    err => console.log(err)
); */