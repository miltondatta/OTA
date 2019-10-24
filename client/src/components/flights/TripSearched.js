import React, {useState, Fragment} from 'react'
import {Button} from "react-bootstrap";
import {faMale, faChild, faBaby} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Component
import ModifySearch from "./ModifySearch";

const TripSearched = () => {
    const [modifySearch, setModifySearch] = useState(false);

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
                    <p className={'trip-searched-header-text'}>Sat, Oct 26, 2019</p>
                </div>
                <div className="col-md-2 col-sm-6 col-6">
                    <span className={'trip-searched-header'}>Class</span>
                    <p className={'trip-searched-header-text'}>Business</p>
                </div>
                <div className="col-md-2 col-sm-6 col-6">
                    <span className={'trip-searched-header'}>Passengers</span>
                    <div className={'trip-searched-header-text'}>
                        <FontAwesomeIcon icon={faMale} /> <span className={'pr-1'}>1</span>
                        <FontAwesomeIcon icon={faChild} /> <span className={'pr-1'}>0</span>
                        <FontAwesomeIcon icon={faBaby} /> <span>0</span>
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
