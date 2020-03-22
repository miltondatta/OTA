const exprss              = require('express');
const router              = exprss.Router();
const flightBooking = require('../../controllers/flightBookingController');

/*
 @route          GET api/flight_booking/all/
 @desc           Get All Booked Flight Data
 @access         Private
 */
router.get('/all', flightBooking.index);

/*
 @route          POST api/flight_booking/delete/
 @desc           Delete FixedValues Data
 @access         Private
 */
router.post('/delete', flightBooking.delete);

module.exports = router;