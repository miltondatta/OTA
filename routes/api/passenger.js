const express = require('express');
const router = express.Router();
const passenger_controller = require('../../controllers/passengerController');

/*
    @route          GET api/passenger/store
    @desc           Save Passenger Information Data
    @access         Public
 */
router.post('/store', passenger_controller.store);

module.exports = router;
