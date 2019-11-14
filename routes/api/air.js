const express                   =  require('express');
const router                    =  express.Router();

//Include All Controller Here Like Shop, Booking, Ticket 
const shop_controller           =  require('../../controllers/api/shopController');

router.get('/shop', shop_controller.test);


module.exports = router;
