const express = require('express');
const router = express.Router();
const contact_controller = require('../../controllers/contactController');

/*
    @route          POST api/contact/store/
    @desc           Add Contact Data of User
    @access         Public
 */
router.post('/store', contact_controller.store);

module.exports = router;
