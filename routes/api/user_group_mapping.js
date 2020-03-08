const exprss                        = require('express');
const router                        = exprss.Router();
const apiUserGroupMappingController = require('../../controllers/userGroupMappingController');

/*
 @route          GET api/user_group_mapping/all/
 @desc           Get All User Group Data
 @access         Private
 */
router.get('/all', apiUserGroupMappingController.index);

/*
 @route          POST api/user_group_mapping/store/
 @desc           Save New User Group Data
 @access         Private
 */
router.post('/store', apiUserGroupMappingController.store);

/*
 @route          get api/user_group_mapping/edit/:id
 @desc           Get User Group Data By ID
 @access         Private
 */

router.get('/edit/:id', apiUserGroupMappingController.edit);

/*
 @route          POST api/user_group_mapping/store/
 @desc           Save New User Group Data
 @access         Private
 */

router.post('/update', apiUserGroupMappingController.update);

/*
 @route          POST api/user_group_mapping/delete/
 @desc           Delete User Group Data
 @access         Private
 */
router.post('/delete', apiUserGroupMappingController.delete);


/*
 @route          get api/user_group_mapping/assignedUsers/:id
 @desc           Get User Group Data By ID
 @access         Private
 */

router.get('/assignedUsers/:id', apiUserGroupMappingController.assignedUsers);

/*
 @route          get api/user_group_mapping/notAssignedUsers/:id
 @desc           Get User Group Data By ID
 @access         Private
 */

router.get('/notAssignedUsers/:id', apiUserGroupMappingController.notAssignedUsers);


module.exports = router;