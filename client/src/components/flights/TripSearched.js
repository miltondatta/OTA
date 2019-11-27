import React, {useState, Fragment, useEffect} from 'react'
import {Button} from "react-bootstrap";
import {faMale, faChild, faBaby} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Component
import ModifySearch from "./ModifySearch";
import Moment from "react-moment";

const TripSearched = ({flight_search}) => {
    const [modifySearch, setModifySearch] = useState(false);
    const [user_flight_search, setUserFlightSearch] = useState({});

    useEffect(() => {
        if (!Object.keys(flight_search).length > 0) {
            if (localStorage.getItem('user_flight_search')) {
                const local = JSON.parse(localStorage.getItem('user_flight_search'));
                setUserFlightSearch(local);
            }
        }
    }, []);

    return (
        <Fragment>
            <div className="row trip-searched-area">
                <div className="col-md-2 col-sm-6 col-6">
                    <span className={'trip-searched-header'}>Departure</span>
                    <p className={'trip-searched-header-text'}>Dhaka (DAC)</p>
                </div>
                <div className="col-md-2 col-sm-6 col-6">
                    <span className={'trip-searched-header'}>Destination</span>
                    <p className={'trip-searched-header-text'}>Chittagong (CGP)</p>
                </div>
                <div className="col-md-2 col-sm-6 col-6">
                    <span className={'trip-searched-header'}>One Way Trip</span>
                    <p className={'trip-searched-header-text'}><Moment format='ddd, MMM Do'>{Object.keys(flight_search).length > 0 ? flight_search.departureDate : user_flight_search.departureDate}</Moment></p>
                </div>
                <div className="col-md-2 col-sm-6 col-6">
                    <span className={'trip-searched-header'}>Class</span>
                    <p className={'trip-searched-header-text'}>{Object.keys(flight_search).length > 0 ? flight_search.cabins : user_flight_search.cabins}</p>
                </div>
                <div className="col-md-2 col-sm-6 col-6">
                    <span className={'trip-searched-header'}>Passengers</span>
                    <div className={'trip-searched-header-text'}>
                        <FontAwesomeIcon icon={faMale}/> <span className={'pr-1'}>{Object.keys(flight_search).length > 0 ? flight_search.ADT : user_flight_search.ADT}</span>
                        <FontAwesomeIcon icon={faChild}/> <span className={'pr-1'}>{Object.keys(flight_search).length > 0 ? flight_search.CNN : user_flight_search.CNN}</span>
                        <FontAwesomeIcon icon={faBaby}/> <span>{Object.keys(flight_search).length > 0 ? flight_search.INF : user_flight_search.INF}</span>
                    </div>
                </div>
                <div className="col-md-2 col-sm-6 col-6">
                    <Button variant="warning" onClick={() => setModifySearch(!modifySearch)}>Modify</Button>
                </div>
            </div>

            {/* Toggle Modify Search */}
            <ModifySearch modifySearch={modifySearch}/>
        </Fragment>
    )
};


export default TripSearched;
