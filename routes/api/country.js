const express = require('express');
const router = express.Router();
const country_controller = require('../../controllers/countryController');

/*
    @route          GET api/country/all
    @desc           Get all Country information data
    @access         Public
 */
router.get('/all', country_controller.index);

module.exports = router;
