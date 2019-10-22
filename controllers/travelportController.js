const uAPI = require('uapi-json');

const settings = {
    auth: {
        username: 'Universal API/uAPI3568924042-3768c943',
        password: 'dC2McA5EJTqT2Hz8WagJ33ApP',
        targetBranch: 'P7009927',
        region: 'apac'
    },
    debug: 3,
    production: false
};
const AirService = uAPI.createAirService(settings);

const params = {
  legs: [
    {
      from: 'LWO',
      to: 'JKT',
      departureDate: '2019-10-23'
    }
  ],
  passengers: {
    ADT: 1
  },
  cabins: ['Economy'], // ['Business'],
  requestId: '4e2fd1f8-2221-4b6c-bb6e-cf05c367cf60',
  pricing: {
    currency: 'USD'
  },
};

AirService.shop(params)
  .then( 
    res => console.log(res),
    err => console.log(err)
  );




/*
const params = {
    legs: [
      {
        from: 'LGW',
        to: 'EDI',
        departureDate: '2019-10-23'
      }
    ],
    passengers: {
      ADT: 1
    }
  };
  
  AirService.availability(params)
    .then(
      res => console.log(res),
      err => console.log(err)
    );

    */

/*
exports.test = AirService.importPNR().catch((err) => {
    if (err instanceof uAPI.errors.Common.ValidationError) {
      console.log('Validation error occured');
    }
    if (err instanceof uAPI.errors.Request.RequestValidationError) {
      console.log('Validation error occured in request');
    }
    if (err instanceof uAPI.errors.Request.RequestValidationError.ParamsMissing) {
      console.log('Params are missing for request');
    }
  });  */