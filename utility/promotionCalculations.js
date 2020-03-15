const FixedValues   = require('../models').fixed_values;
const PromotionConf = require('../models').promotion_configurations;
const moment        = require("moment");

let flightData = [];

const promotionCalculations = async (flightData_prarm) => {
    flightData       = flightData_prarm;
    let fixed_values = await FixedValues.findAll({where : {status_id : 3}});
    let promotions   = await PromotionConf.findAll({where : {status_id : 3}});
    
    let fixed_value_applied = await applyFixedValues(fixed_values, flightData);
    let promo_applied       = await calculatePromotion(promotions, flightData);
    
    return flightData;
};

const applyFixedValues = async (fixed_values, flightData) => {
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
        fl_dt.totalPrice       = calculated_fare.shown_fare;
        fl_dt.basePrice        = calculated_fare.shown_base_fare;
        fl_dt.execTotalPrice   = calculated_fare.shown_fare;
        fl_dt.execBasePrice    = calculated_fare.shown_base_fare;
        fl_dt.airlines_fare    = calculated_fare.airlines_fare;
        fl_dt.airlines_payment = calculated_fare.airlines_payment;
        fl_dt.ait_amount       = calculated_fare.ait_amount;
        fl_dt.fxd_amount       = calculated_fare.fxd_amount;
    });
    
    return flightData;
};

const calculateFare = (totalPrice, basePrice, taxes, std_commission, ait, fxd_value, fxd_value_type) => {
    let calculated_fare  = [];
    let airlines_fare    = 0;
    let ait_amount       = 0;
    let airlines_payment = 0;
    let shown_fare       = 0;
    let shown_base_fare  = 0;
    let fxd_amount       = 0;
    
    totalPrice       = parseFloat(totalPrice);
    basePrice        = parseFloat(basePrice);
    taxes            = parseFloat(taxes);
    ait_amount       = parseFloat((basePrice * ait).toFixed(2));
    airlines_fare    = parseFloat((basePrice * (100 - std_commission)) / 100);
    airlines_payment = parseFloat((airlines_fare + taxes + ait_amount).toFixed(3));
    if (fxd_value_type === "fxd") {
        fxd_amount      = fxd_value;
        shown_fare      = parseFloat((totalPrice + fxd_amount).toFixed(3));
        shown_base_fare = parseFloat((basePrice + fxd_amount).toFixed(3));
    } else if (fxd_value_type === "ps") {
        fxd_amount      = parseFloat(((totalPrice * fxd_value) / 100).toFixed(3));
        shown_fare      = parseFloat((totalPrice + fxd_amount).toFixed(3));
        shown_base_fare = parseFloat((basePrice + fxd_amount).toFixed(3));
    }
    calculated_fare =
        {
            airlines_payment,
            basePrice,
            totalPrice,
            ait_amount,
            airlines_fare,
            shown_fare,
            shown_base_fare,
            fxd_amount
        };
    
    return calculated_fare;
};

const calculatePromotion = async (promotions, flightData) => {
    flightData.forEach(fl_data => {
        let promo_fare_amount  = 0;
        let total_promo_amount = 0;
        let promo_id_array     = [];
        let promo_amount_array = [];
        
        promotions.forEach(promo_data => {
            let promo_elegibility_arr = [];
            //check form city to city
            if (promo_data.from_city && promo_data.to_city) {
                if (
                    promo_data.from_city === fl_data.from &&
                    promo_data.to_city === fl_data.to
                ) {
                    promo_elegibility_arr.push(true);
                } else {
                    promo_elegibility_arr.push(false);
                }
            }
            //check form city to city
            
            //check Plating Carrier
            if (promo_data.plating_carrier) {
                if (promo_data.plating_carrier === fl_data.platingCarrier) {
                    promo_elegibility_arr.push(true);
                } else {
                    promo_elegibility_arr.push(false);
                }
            }
            //check Plating Carrier
            
            //check Flight Type
            if (promo_data.flight_type) {
                let is_domestic = isDomestic(fl_data.from, fl_data.to);
                if (promo_data.flight_type === "doms" && is_domestic === true) {
                    promo_elegibility_arr.push(true);
                } else if (promo_data.flight_type === "intn" && is_domestic === false) {
                    promo_elegibility_arr.push(true);
                } else {
                    promo_elegibility_arr.push(false);
                }
            }
            //check Flight Type
            
            //check bookingClass
            if (promo_data.booking_class) {
                if (promo_data.booking_class === fl_data.segments[0].bookingClass) {
                    promo_elegibility_arr.push(true);
                } else {
                    promo_elegibility_arr.push(false);
                }
            }
            //check bookingClass
            
            //check Api source
            if (promo_data.api_source_id) {
                if (promo_data.api_source_id === fl_data.api_source) {
                    promo_elegibility_arr.push(true);
                } else {
                    promo_elegibility_arr.push(false);
                }
            }
            //check Api source
            
            //check issue_date_from form issue_date_to
            if (promo_data.issue_date_from && promo_data.issue_date_to) {
                let today           = moment(new Date());
                let issue_date_from = moment(promo_data.issue_date_from).format(
                    "YYYY-MM-DD"
                );
                let issue_date_to   = moment(promo_data.issue_date_to).format(
                    "YYYY-MM-DD"
                );
                if (today.isBetween(issue_date_from, issue_date_to)) {
                    promo_elegibility_arr.push(true);
                } else {
                    promo_elegibility_arr.push(false);
                }
            }
            //check issue_date_from form issue_date_to
            
            //check travel_date_from form travel_date_to
            if (promo_data.travel_date_from && promo_data.travel_date_to) {
                let travel_date      = moment(fl_data.first_departure);
                let travel_date_from = moment(promo_data.travel_date_from).format(
                    "YYYY-MM-DD"
                );
                let travel_date_to   = moment(promo_data.travel_date_to);
                
                if (travel_date.isBetween(travel_date_from, travel_date_to)) {
                    promo_elegibility_arr.push(true);
                } else {
                    promo_elegibility_arr.push(false);
                }
            }
            //check travel_date_from form travel_date_to
            
            //check travel_time_from form travel_time_to
            if (promo_data.time_from && promo_data.time_to) {
                let flight_time_int = convertToMinuteInteger(
                    moment(fl_data.first_departure).format("HH:mm:ss")
                );
                let time_from_int   = convertToMinuteInteger(
                    moment(promo_data.time_from, "HH:mm:ss").format("HH:mm:ss")
                );
                let time_to_int     = convertToMinuteInteger(
                    moment(promo_data.time_to, "HH:mm:ss").format("HH:mm:ss")
                );
                
                if (
                    flight_time_int >= time_from_int &&
                    flight_time_int <= time_to_int
                ) {
                    promo_elegibility_arr.push(true);
                } else {
                    promo_elegibility_arr.push(false);
                }
            }
            
            //check travel_time_from form travel_time_to
            //apply not !
            if (!promo_elegibility_arr.includes(false)) {
                let promo_amount = 0;
                if (promo_data.promo_type === "d") {
                    if (promo_data.value_type === "ps") {
                        promo_amount = parseFloat(
                            ((fl_data.basePrice * promo_data.value) / 100).toFixed(3)
                        );
                    } else {
                        promo_amount = promo_data.value;
                    }
                    if (promo_data.max_amount) {
                        if (promo_amount > promo_data.max_amount) {
                            promo_amount = promo_data.max_amount;
                        }
                    }
                    total_promo_amount += promo_amount;
                    promo_amount_array.push(promo_amount + '-' + 'discount');
                    promo_id_array.push(promo_data.id);
                } else {
                    if (promo_data.value_type === "ps") {
                        promo_amount = parseFloat(
                            ((fl_data.basePrice * promo_data.value) / 100).toFixed(3)
                        );
                    } else {
                        promo_amount = promo_data.value;
                    }
                    if (promo_data.max_amount) {
                        if (promo_amount > promo_data.max_amount) {
                            promo_amount = promo_data.max_amount;
                        }
                    }
                    total_promo_amount -= promo_amount;
                    promo_amount_array.push(promo_amount + '-' + 'addition');
                    promo_id_array.push(promo_data.id);
                }
            }
        });
        
        promo_fare_amount         = parseFloat(fl_data.basePrice) - parseFloat(total_promo_amount);
        fl_data.totalPrice        = parseFloat(promo_fare_amount) + parseFloat(fl_data.taxes);
        fl_data.basePrice         = promo_fare_amount;
        fl_data.promo_amount      = total_promo_amount;
        fl_data.promo_amount_desc = promo_amount_array.toString();
        fl_data.promo_id          = promo_id_array.toString();
        fl_data.is_promo_applied  = 1;
    });
};

const isDomestic = (fl_data_from, fl_data_to) => {
    return false;//database calling
};

const convertToMinuteInteger = time_string => {
    let splited_string = time_string.split(":");
    return splited_string[0] * 60 + splited_string[1];
};

module.exports = promotionCalculations;