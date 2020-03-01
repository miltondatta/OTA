const Validator = require('validator');
const isEmpty   = require('./is-empty');

module.exports = function validatePromotionConfigurationInput(data) {
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
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
