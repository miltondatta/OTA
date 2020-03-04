const exprss                 = require('express');
const router                 = exprss.Router();
const apiUserGroupController = require('../../controllers/userGroupController');

/*
 @route          GET api/user_group/all/
 @desc           Get All User Group Data
 @access         Private
 */
router.get('/all', apiUserGroupController.index);

/*
 @route          GET api/user_group/all_active/
 @desc           Get All User Group Data
 @access         Private
 */
router.get('/all_active', apiUserGroupController.allActive);

/*
 @route          POST api/user_group/store/
 @desc           Save New User Group Data
 @access         Private
 */
router.post('/store', apiUserGroupController.store);

/*
 @route          get api/user_group/edit/:id
 @desc           Get User Group Data By ID
 @access         Private
 */

router.get('/edit/:id', apiUserGroupController.edit);

/*
 @route          POST api/user_group/store/
 @desc           Save New User Group Data
 @access         Private
 */

router.post('/update', apiUserGroupController.update);

/*
 @route          POST api/user_group/delete/
 @desc           Delete User Group Data
 @access         Private
 */
router.post('/delete', apiUserGroupController.delete);

module.exports = router;