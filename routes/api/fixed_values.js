const exprss                = require('express');
const router                = exprss.Router();
const fixedValuesController = require('../../controllers/fixedValuesController');

/*
 @route          GET api/fixed_values/all/
 @desc           Get All FixedValues Data
 @access         Private
 */
router.get('/all', fixedValuesController.index);

/*
 @route          POST api/fixed_values/store/
 @desc           Save New FixedValues Data
 @access         Private
 */
router.post('/store', fixedValuesController.store);

/*
 @route          get api/fixed_values/edit/:id
 @desc           Get FixedValues Data By ID
 @access         Private
 */

router.get('/edit/:id', fixedValuesController.edit);

/*
 @route          POST api/fixed_values/store/
 @desc           Save New FixedValues Data
 @access         Private
 */

router.post('/update', fixedValuesController.update);

/*
 @route          POST api/fixed_values/delete/
 @desc           Delete FixedValues Data
 @access         Private
 */
router.post('/delete', fixedValuesController.delete);

module.exports = router;