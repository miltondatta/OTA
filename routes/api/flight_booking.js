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
 @route          POST api/flight_booking/cash-receive/
 @desc           cash receive
 @access         Private
 */
router.post('/cash-receive', flightBooking.cashReceive);

/*
 @route          POST api/flight_booking/flight_details/
 @desc           show details Booked Flight Data
 @access         Private
 */
router.get('/flight_details/:id', flightBooking.flightDetails);

/*
 @route          POST api/flight_booking/search/
 @desc           Search flight_booking Data
 @access         Private
 */
router.post('/search', flightBooking.search);

module.exports = router;