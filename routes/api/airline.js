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
    @route          POST api/airline/store/
    @desc           Save New Airline Data
    @access         Private
 */
router.post('/store', airlineController.store);

module.exports = router;