const exprss = require('express');
const router = exprss.Router();
const airlineController = require('../../controllers/airlineController');

/*
    @route          GET api/airline/all/
    @desc           Get All Airlines Data
    @access         Private
 */
router.get('/all', airlineController.index);

/*
    @route          GET api/airline/check/iata
    @desc           Check iata matched airline
    @access         Private
 */
router.get('/check/iata', airlineController.checkIata);

/*
    @route          POST api/airline/store/
    @desc           Save New Airline Data
    @access         Private
 */
router.post('/store', airlineController.store);

/*
    @route          get api/airline/edit/:id
    @desc           Get Airline Data By ID
    @access         Private
 */

router.get('/edit/:id', airlineController.edit);

/*
    @route          POST api/airline/store/
    @desc           Save New Airline Data
    @access         Private
 */

router.post('/update', airlineController.update);

/*
    @route          POST api/airline/delete/
    @desc           Delete Airline Data
    @access         Private
 */
router.post('/delete', airlineController.delete);

/*
    @route          POST api/airline/getFilteredAirlines/
    @desc           Delete Airline Data
    @access         Private
 */
router.get('/getFilteredAirlines', airlineController.getFilteredAirlines);

module.exports = router;