const contact = require('../models').contact;

exports.store = async (req, res) => {
    try {
        const {name, email, phone, address, description} = req.body;
        const newContact = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            description: description
        };

        const status = await contact.create(newContact);
        if (!status) return res.status(400).json({msg: 'Please try again with full information!'});

        return res.status(200).json({msg: 'Contact message saved successfully!'});
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};