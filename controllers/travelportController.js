const uAPI = require('uapi-json');

const settings = {
    auth: {
        username: 'Universal API/uAPI8931078193-41fe5ac8',
        password: 'fHCStEyfMyZjmE8nH4rcZN246',
        targetBranch: 'P7005006',
        region: 'APAC'
    },
    debug: 2
};
const AirService = uAPI.createAirService(settings);


const params = {
    legs: [
      {
        from: 'DAC',
        to: 'CGP',
        departureDate: '2019-10-22'
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