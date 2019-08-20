const express   =   require('express');
const router    =   express.Router();
const pg        = require('pg');

//Get DB config
const conString     = require('../../config/keys').PostgreURI;
const dbConnect     = new pg.Client(conString);
dbConnect
    .connect()
    .then(() => console.log('Postgres Database Connected'))
    .catch(err => console.log('Error to connect in database'));

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


router.post('/registration', (req, res) => {
    const { name, email, password, mobile } =   req.body;
    dbConnect.query('INSERT INTO users(name, email, password, mobile) VALUES($1, $2, $3, $4)', [name, email, password, mobile], (error, results) => {
        if (error) {
            throw error;
        }
        console.log(results);
        return res.status(200).json(`User added with ID: ${results.insertId}`);
    });

    //
    //console.log();
    //res.send(req);
    //console.log("req" + /req.body.name);
    //return res.status(200).json({msg: "Registration working fine!"});



    //res.json({ msg: 'Registration route working!'})
    //res.setHeader('Content-Type', 'text/plain')
    //res.write('you posted:\n')
    //res.end(JSON.stringify(req.body.name, null, 2))
});


router.post('/all', (req, res) => {
    dbConnect.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error;
        }
        return res.status(200).json(results.rows);
    });
});



/*
    @route          POST api/users/login/
    @desc           Login users route
    @access         Public
 */

router.post('/login', (req, res) => res.json({ msg: 'Users route working!'}));





module.exports = router;

