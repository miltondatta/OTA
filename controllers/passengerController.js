const flight_passenger = require('../models').flight_passenger;

exports.store = async (req, res) => {
    try {
        const data = req.body;
        data.forEach((element) => {
            element.forEach(async (value) => {
                const final_record = {
                    booking_id: 123,
                    first_name: value.first_name,
                    last_name: value.last_name,
                    nationality: value.nationality,
                    gender: value.gender,
                    date_of_birth: value.date_of_birth,
                    passport_number: value.passport_number,
                    passport_expiry_date: value.passport_expiry_date,
                    passenger_type: value.passenger_type,
                    createdAt: new Date().toLocaleString()
                };

                const save = await flight_passenger.create(final_record);
                if (!save) return res.status(400).json({msg: "Please try again!"});
            });
        });

        return res.status(200).json({msg: 'Passenger Information Saved Successfully!'});
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};