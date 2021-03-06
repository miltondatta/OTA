const express          = require('express');
const router           = express.Router();
const users_controller = require('../../controllers/usersController');
const User             = require('../../models').user;

/*
 @route          GET api/users/test/
 @desc           Test users route
 @access         Public
 */

router.get('/test', (req, res) => res.json({msg: 'Users route working!'}));

/*
 @route          GET api/users/register/
 @desc           Login users route
 @access         Public
 */
router.post('/register', users_controller.store);

/*
 @route          GET api/users/profile/update
 @desc           Login users route
 @access         Public
 */
router.post('/profile/update', users_controller.updateProfile);

/*
 @route          GET api/users/profile/update
 @desc           Login users route
 @access         Public
 */
router.post('/password/update', users_controller.updatePassword);

/*
 @route          POST api/users/login/
 @desc           Login users route
 @access         Public
 */
router.post('/login', users_controller.login);

/*
 router.post('/registration', (req, res) => {
 const { name, email, password, mobile } =   req.body;
 dbConnect.query('INSERT INTO users(name, email, password, mobile) VALUES($1, $2, $3, $4)', [name, email, password, mobile], (error, results) => {
 if (error) {
 throw error;
 }
 console.log(results);
 return res.status(200).json(`User added with ID: ${results.insertId}`);
 });  */

//
//console.log();
//res.send(req);
//console.log("req" + /req.body.name);
//return res.status(200).json({msg: "Registration working fine!"});

//res.json({ msg: 'Registration route working!'})
//res.setHeader('Content-Type', 'text/plain')
//res.write('you posted:\n')
//res.end(JSON.stringify(req.body.name, null, 2))
//});

router.get('/all', (req, res) => {
    /*dbConnect.query('SELECT * FROM users', (error, results) => {
     if (error) {
     throw error;
     }
     return res.status(200).json(results.rows);
     });*/
    
    try {
        const body   = {name: "Plabon", email: "plabonjoseph@gmail.com", password: "123456", phone: "01878736648"};
        const result = User.create(body);
        // const result = User.findAll();
        return res.json({msg: "User Created Successfully!"});
    } catch (err) {
        console.error(err);
        return res.status(400).json({msg: 'Server Error!'});
    }
});

router.post('/confirm', users_controller.confirm_by_email);

/*
 @route          GET api/users/role
 @desc           Get Users Role
 @access         Private
 */
router.post('/role', users_controller.getRole);


/*
 @route          GET api/users/all_role
 @desc           Get Users Role
 @access         Private
 */
router.get('/all_role', users_controller.getAllRole);

/*
 @route          GET api/users/index
 @desc           Get All User
 @access         Private
 */
router.get('/index', users_controller.index);

/*
 @route          POST api/users/delete/
 @desc           Save New Airline Data
 @access         Private
 */

router.post('/delete', users_controller.delete);

/*
 @route          get api/users/edit/:id
 @desc           Get Airline Data By ID
 @access         Private
 */

router.get('/edit/:id', users_controller.edit);

/*
 @route          POST api/users/update/
 @desc           Save New Airline Data
 @access         Private
 */

router.post('/update', users_controller.update);


/*
 @route          POST api/users/updateUsersBalance/
 @desc           Save New Airline Data
 @access         Private
 */

router.post('/updateUsersBalance', users_controller.updateUsersBalance);

router.post('/updateUsersCreditLimit', users_controller.updateUsersCreditLimit);

module.exports = router;