import React, {Fragment} from 'react';

// Font Awesome
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Component
import PriceFilter from "./PriceFilter";
import FlightStopFilter from "./FlightStopFilter";
import DepartureTimeFilter from "./DepartureTimeFilter";
import FareTypeFilter from "./FareTypeFilter";
import AirLineFilter from "./AirLineFilter";

const TripFilter = () => {
    return (
        <Fragment>
            <div className="col-md-3 col-sm-12 filter-area px-0">
                <div className="search-count single-filter pt-2">
                    <FontAwesomeIcon icon={faSearch}/>
                    <span className={'pl-2'}>88 results found.</span>
                </div>

                <PriceFilter/>
                <FlightStopFilter/>
                <DepartureTimeFilter/>
                <FareTypeFilter/>
                <AirLineFilter/>
            </div>
        </Fragment>
    )
};


export default TripFilter;
