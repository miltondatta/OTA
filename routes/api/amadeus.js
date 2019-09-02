const express               =  require('express');
const router                =  express.Router();
const amadeus_controller    =  require('../../controllers/amadeusController');


router.get('/locations', amadeus_controller.locations);

router.get('/flight_dates', amadeus_controller.flight_dates);

router.get('/flight_offers', amadeus_controller.flight_offers);


module.exports = router;
