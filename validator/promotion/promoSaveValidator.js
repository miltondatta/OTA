const Validator = require('validator');
const isEmpty   = require('../is-empty');

module.exports = function promoSaveValidator(data) {
    let errors = {};
    
    data.promotion_name = !isEmpty(data.promotion_name) ? data.promotion_name : '';
    data.promotion_code = !isEmpty(data.promotion_code) ? data.promotion_code : '';
    data.promo_type     = !isEmpty(data.promo_type) ? data.promo_type : '';
    
    if (Validator.isEmpty(data.promotion_name)) {
        errors.promotion_name = 'Promotion Name field is required';
    }
    
    if (Validator.isEmpty(data.promotion_code)) {
        errors.promotion_code = 'Promotion Code field is required';
    }
    
    if (Validator.isEmpty(data.promo_type)) {
        errors.promo_type = 'Promo Type field is required';
    }
    
    if (Validator.isEmpty(data.value_type)) {
        errors.value_type = 'Value Type field is required';
    }
    
    if (!data.value) {
        errors.value = 'Value field is required';
    }
    
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
        errors.time_to = 'Flight Time From field needs to fill up';
    }
    
    if (!data.user_id && data.user_group_id) {
        errors.user_id = 'Please select User Type Id when select User Type';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
