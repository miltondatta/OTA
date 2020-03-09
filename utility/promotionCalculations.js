const FixedValues = require('../models').fixed_values;

let flightData = [];

const promotionCalculations = (flightData_prarm) => {
    flightData = flightData_prarm;
    FixedValues.findAll({where : {status_id : 3}})
               .then(fixed_values => {
                   applyFixedValues(fixed_values);
               });
    return flightData;
};

const applyFixedValues = (fixed_values, flightData) => {
    fixed_values.forEach(fix_val => {
        flightData.forEach(fl_dt => {
        
        });
    });
};

const calculateFare = () => {

};

const parseFare = (amount, currency) => {
    let currency_length = currency.length;
    let fare_amount = amount.substring(currency_length);
    return fare_amount;
};
module.exports  = promotionCalculations;