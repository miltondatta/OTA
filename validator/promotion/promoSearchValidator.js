const Validator = require('validator');
const isEmpty   = require('../is-empty');

module.exports = function promoSearchValidator(data) {
    let errors = {};
    
    if (data.issue_date_from && !data.issue_date_to) {
        errors.issue_date_to = 'Issue date to field needs to fill up';
    }
    
    if (!data.issue_date_from && data.issue_date_to) {
        errors.issue_date_from = 'Issue date from field needs to fill up';
    }
    
    if (data.travel_date_from && !data.travel_date_to) {
        errors.travel_date_to = 'Travel date to field needs to fill up';
    }
    
    if (!data.travel_date_from && data.travel_date_to) {
        errors.travel_date_from = 'Travel date from field needs to fill up';
    }
    
    if (data.time_from && !data.time_to) {
        errors.time_to = 'Flight Time To field needs to fill up';
    }
    
    if (!data.time_from && data.time_to) {
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
