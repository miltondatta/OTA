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
 @desc           Delete Booked Flight Data
 @access         Private
 */
router.post('/delete', flightBooking.delete);

/*
 @route          POST api/flight_booking/flight_details/
 @desc           show details Booked Flight Data
 @access         Private
 */
router.get('/flight_details/:id', flightBooking.flightDetails);

module.exports = router;