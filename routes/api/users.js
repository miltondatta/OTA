const express   =   require('express');
const router    =   express.Router();


/*
    @route          GET api/users/test/
    @desc           Test users route
    @access         Public
 */

router.get('/test', (req, res) => res.json({ msg: 'Users route working!'}));




/*
    @route          GET api/users/registration/
    @desc           Login users route
    @access         Public
 */
router.get('/registration', (req, res) => res.json({ msg: 'User Registration route working!'}));



/*
    @route          POST api/users/login/
    @desc           Login users route
    @access         Public
 */

router.post('/login', (req, res) => res.json({ msg: 'Users route working!'}));





module.exports = router;

