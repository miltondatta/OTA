const exprss = require('express');
const router = exprss.Router();
const airportController = require('../../controllers/airportController');

/*
    @route          GET api/airport/all/
    @desc           Get All Airport Data
    @access         Private
 */
router.get('/all', airportController.index);

/*
 @route          get /api/airport/getAirportByCountry/:iso_country
 @desc           Get Airline Data By iso_country
 @access         Private
 */

router.post('/getAirportByCountry/', airportController.getAirportByCountry);
/*
    @route          POST /api/airport/store/
    @desc           Save New Airline Data
    @access         Private
 */
/*router.post('/store', airportController.store);*/

/*
    @route          get /api/airport/edit/:id
    @desc           Get Airport Data By ID
    @access         Private
 */

router.get('/edit/:id', airportController.edit);

/*
    @route          POST /api/airport/update/
    @desc           Save New Airline Data
    @access         Private
 */

router.post('/update', airportController.update);

/*
    @route          POST /api/airport/delete/
    @desc           Delete Airline Data
    @access         Private
 */
/*router.post('/delete', airportController.delete);*/

module.exports = router;