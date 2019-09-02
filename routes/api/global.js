const express               =  require('express');
const router                =  express.Router();
const global_controller    =  require('../../controllers/globalController');


router.get('/test', global_controller.test);

router.get('/get_airports', global_controller.get_airports);






module.exports = router;
