const express               =  require('express');
const router                =  express.Router();
const amadeus_controller    =  require('../../controllers/amadeusController');


router.get('/locations', amadeus_controller.locations);







module.exports = router;
