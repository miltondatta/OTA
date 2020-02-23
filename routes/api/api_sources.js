const exprss                = require('express');
const router                = exprss.Router();
const apiSourcesController = require('../../controllers/apiSourcesController');

/*
 @route          GET api/api_sources/all/
 @desc           Get All FixedValues Data
 @access         Private
 */
router.get('/all', apiSourcesController.index);

/*
 @route          POST api/api_sources/store/
 @desc           Save New FixedValues Data
 @access         Private
 */
router.post('/store', apiSourcesController.store);

/*
 @route          get api/api_sources/edit/:id
 @desc           Get FixedValues Data By ID
 @access         Private
 */

router.get('/edit/:id', apiSourcesController.edit);

/*
 @route          POST api/api_sources/store/
 @desc           Save New FixedValues Data
 @access         Private
 */

router.post('/update', apiSourcesController.update);

/*
 @route          POST api/api_sources/delete/
 @desc           Delete FixedValues Data
 @access         Private
 */
router.post('/delete', apiSourcesController.delete);

module.exports = router;