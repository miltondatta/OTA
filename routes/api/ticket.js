const exprss              = require('express');
const router              = exprss.Router();
const ticketCont = require('../../controllers/ticketController');

/*
 @route          GET api/ticket/all/
 @desc           Get All Booked Flight Data
 @access         Private
 */
router.get('/all', ticketCont.index);


/*
 @route          POST api/ticket/cash-receive/
 @desc           cash receive
 @access         Private
 */
router.post('/cash-receive', ticketCont.cashReceive);

/*
 @route          POST api/ticket/flight_details/
 @desc           show details Booked Flight Data
 @access         Private
 */
router.get('/flight_details/:id', ticketCont.flightDetails);

/*
 @route          POST api/ticket/search/
 @desc           Search ticket Data
 @access         Private
 */
router.post('/search', ticketCont.search);

module.exports = router;