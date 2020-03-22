const flight_passenger = require('../models').flight_passenger;
const flight_bookings  = require('../models').flight_bookings;
const segments         = require('../models').segments;

exports.store = async (req, res) => {
    try {
        const data         = req.body;
        let passengers     = data.passengers;
        let phone          = data.phone;
        let segments_ar    = data.segments;
        let selectedFlight = data.selectedFlight;
        
        const flight_booking_data = {
            user_id              : 1,
            pnr                  : Math.random().toString(36).substring(7).toUpperCase(),
            voucher_id           : null,
            voucher_amount       : null,
            api_source           : selectedFlight.api_source,
            is_promo_applied     : selectedFlight.is_promo_applied,
            promo_id             : selectedFlight.promo_id,
            currency             : selectedFlight.currency,
            totalPrice           : selectedFlight.totalPrice,
            basePrice            : selectedFlight.basePrice,
            execTotalPrice       : selectedFlight.execTotalPrice,
            execBasePrice        : selectedFlight.execBasePrice,
            actualTotalPrice     : selectedFlight.actualTotalPrice,
            actualBasePrice      : selectedFlight.actualBasePrice,
            taxes                : selectedFlight.taxes,
            airlines_fare        : selectedFlight.airlines_fare,
            airlines_payment     : selectedFlight.airlines_payment,
            ait_amount           : selectedFlight.ait_amount,
            fxd_amount           : selectedFlight.fxd_amount,
            promo_amount         : selectedFlight.promo_amount,
            promo_amount_desc    : selectedFlight.promo_amount_desc,
            from                 : selectedFlight.from,
            to                   : selectedFlight.to,
            from_city            : selectedFlight.from_city,
            to_city              : selectedFlight.to_city,
            platingCarrier       : selectedFlight.platingCarrier,
            platingCarrier_name  : selectedFlight.platingCarrier_name,
            first_departure      : selectedFlight.first_departure,
            last_arrival         : selectedFlight.last_arrival,
            same_day_arrival     : selectedFlight.same_day_arrival,
            total_duration       : selectedFlight.total_duration,
            stoppage             : selectedFlight.stoppage,
            ticket_time_limit    : null,
            payment_status       : 7,
            invoice_id           : "PTM-"+Math.random().toString(36).substring(2).toUpperCase(),
            issue_ticket_status  : 5,
            void_ticket_status   : 0,
            cancel_ticket_status : 0,
            pnr_request_response : null,
            createdAt            : new Date().toLocaleString(),
            updatedAt            : new Date().toLocaleString(),
        };
        const flight_booking_save = await flight_bookings.create(flight_booking_data);
        const flight_booking_id   = flight_booking_save.id;
        
        segments_ar.forEach(item => {
            const segment_data = {
                flight_booking_id : flight_booking_id,
                from              : item.from,
                to                : item.to,
                from_city         : item.from_city,
                to_city           : item.to_city,
                departure         : item.departure,
                arrival           : item.arrival,
                airline           : item.airline,
                airline_name      : item.airline_name,
                flightNumber      : item.flightNumber,
                duration          : item.duration,
                total_duration    : item.total_duration,
                bookingClass      : item.bookingClass,
                baggage           : item.baggage,
                createdAt         : new Date().toLocaleString(),
                updatedAt         : new Date().toLocaleString(),
            };
            const segment_save = segments.create(segment_data);
        });
        
        passengers.forEach((element) => {
            element.forEach(async (value) => {
                const final_record = {
                    booking_id           : flight_booking_id,
                    first_name           : value.first_name,
                    last_name            : value.last_name,
                    nationality          : value.nationality,
                    gender               : value.gender,
                    date_of_birth        : value.date_of_birth,
                    passport_number      : value.passport_number,
                    passport_expiry_date : value.passport_expiry_date,
                    passenger_type       : value.passenger_type,
                    createdAt            : new Date().toLocaleString()
                };
                const save         = await flight_passenger.create(final_record);
                if (!save) return res.status(400).json({msg : "Please try again!"});
            });
        });
        
        return res.status(200).json({msg : 'Passenger Information Saved Successfully!'});
    } catch (err) {
        console.error(err);
        return res.status(500).json({msg : 'Server Error!'});
    }
};