const exprss                = require('express');
const router                = exprss.Router();
const confPromoController = require('../../controllers/configurePromotionController');

/*
 @route          GET api/configure_promotion/all/
 @desc           Get All FixedValues Data
 @access         Private
 */
router.get('/all', confPromoController.index);

/*
 @route          POST api/configure_promotion/store/
 @desc           Save New FixedValues Data
 @access         Private
 */
router.post('/store', confPromoController.store);

/*
 @route          get api/configure_promotion/edit/:id
 @desc           Get FixedValues Data By ID
 @access         Private
 */

router.get('/edit/:id', confPromoController.edit);

/*
 @route          POST api/configure_promotion/store/
 @desc           Save New FixedValues Data
 @access         Private
 */

router.post('/update', confPromoController.update);

/*
 @route          POST api/configure_promotion/delete/
 @desc           Delete FixedValues Data
 @access         Private
 */
router.post('/delete', confPromoController.delete);

module.exports = router;