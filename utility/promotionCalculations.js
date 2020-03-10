const FixedValues = require('../models').fixed_values;

let flightData = [];

const promotionCalculations = (flightData_prarm) => {
    flightData = flightData_prarm;
    FixedValues.findAll({where : {status_id : 3}})
               .then(fixed_values => {
                    applyFixedValues(fixed_values, flightData);
               });
    return flightData;
};

const applyFixedValues = (fixed_values, flightData) => {
    let std_commission = 0;
    let ait            = 0;
    let fxd_value      = 0;
    let fxd_value_type = '';
    fixed_values.forEach(fix_val => {
        let markup_value = fix_val.dataValues;
        if (markup_value.discount_code === "markup") {
            fxd_value      = markup_value.discount;
            fxd_value_type = markup_value.discount_unit;
        } else if (markup_value.discount_code === "aita") {
            ait = markup_value.discount;
        } else if (markup_value.discount_code === "aids") {
            std_commission = markup_value.discount;
        }
    });
    flightData.forEach(fl_dt => {
        let calculated_fare    = calculateFare(fl_dt.totalPrice, fl_dt.basePrice, fl_dt.taxes, std_commission, ait, fxd_value, fxd_value_type);
        fl_dt.shown_fare       = calculated_fare.shown_fare;
        fl_dt.airlines_fare    = calculated_fare.airlines_fare;
        fl_dt.ait_amount       = calculated_fare.ait_amount;
        fl_dt.airlines_payment = calculated_fare.airlines_payment;
    });
    
    return flightData;
};

const calculateFare = (totalPrice, basePrice, taxes, std_commission, ait, fxd_value, fxd_value_type) => {
    let calculated_fare  = [];
    let airlines_fare    = 0;
    let ait_amount       = 0;
    let airlines_payment = 0;
    let shown_fare       = 0;
    totalPrice           = parseFloat(parseFare(totalPrice, "USD"));
    basePrice            = parseFloat(parseFare(basePrice, "USD"));
    taxes                = parseFloat(parseFare(taxes, "USD"));
    ait_amount           = parseFloat((totalPrice * ait).toFixed(2));
    airlines_fare        = parseFloat((basePrice * (100 - std_commission)) / 100);
    airlines_payment     = parseFloat((airlines_fare + taxes + ait_amount).toFixed(2));
    if (fxd_value_type === "fxd") {
        shown_fare = parseFloat((totalPrice + fxd_value).toFixed(2));
    } else if (fxd_value_type === "ps") {
        shown_fare = parseFloat(
            (totalPrice + (totalPrice * fxd_value) / 100).toFixed(2)
        );
    }
    calculated_fare =
        {
            airlines_payment,
            basePrice,
            totalPrice,
            ait_amount,
            airlines_fare,
            shown_fare
        };
    
    return calculated_fare;
};

const parseFare = (amount, currency) => {
    return amount.substring(currency.length);
};

module.exports = promotionCalculations;