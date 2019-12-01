import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Alert} from "react-bootstrap";

// Css
import '../../assets/css/flight-list.css';

// Redux
import {connect} from 'react-redux';

// Component
import TripSearched from "./TripSearched";
import TripFilter from "./TripFilter";
import TripList from "./TripList";
import {getAirportByIataCode} from "../../actions/airportActions";

const FlightList = ({passenger, shop, getAirportByIataCode}) => {
    useEffect(() => {
        /*if (localStorage.getItem('user_flight_search')) {
            const user_flight_search = JSON.parse(localStorage.getItem('user_flight_search'));
        }
        getAirportByIataCode();*/
    }, []);

    return (
        <Fragment>
            <div className={'flight-list-area'}>
                <div className="container-fluid flight-list-area-container">
                    <TripSearched flight_search={passenger.user_flight_search} shopData={shop} getAirportByIataCode={getAirportByIataCode}/>
                    <div className="row pt-3">
                        <TripFilter shopData={shop.shopData}/>
                        {Object.keys(shop.shopData).length > 0 ?
                            <TripList shopData={shop.shopData}/>
                            :
                            <Alert className="mt-2 mt-md-0" variant={'warning'} style={{'height': 50, marginLeft: 30}}>
                                No Flight Found!
                            </Alert>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

FlightList.propTypes = {
    getAirportByIataCode: PropTypes.func.isRequired,
    shop: PropTypes.object.isRequired,
    passenger: PropTypes.object.isRequired,
    airport: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    shop: state.shop,
    passenger: state.passenger,
    airport: state.airport
});

const mapDispatchToProps = {getAirportByIataCode};
export default connect(mapStateToProps, mapDispatchToProps)(FlightList);