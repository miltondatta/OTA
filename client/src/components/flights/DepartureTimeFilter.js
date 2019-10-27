import React, {useState} from 'react'
import {Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";

const DepartureTimeFilter = () => {
    const [departureTime, setDepartureTime] = useState(false);

    return (
        <div className="departure-time-filter single-filter pt-2 mt-2">
            <div className="d-flex justify-content-between">
                <span><b>Departure Time</b></span>
                {!departureTime ?
                    <FontAwesomeIcon className="mr-3 mt-2 pointer"
                                     onClick={() => setDepartureTime(!departureTime)}
                                     icon={faPlusCircle}/>
                    : <FontAwesomeIcon className="mr-3 mt-2 pointer"
                                       onClick={() => setDepartureTime(!departureTime)}
                                       icon={faMinusCircle}/>
                }
            </div>

            {departureTime &&
            <div className="pt-3">
                <Form.Check custom type="checkbox" id="custom-checkbox" label="12:00 AM To 05:59 AM"/>
                <Form.Check className="pt-1" custom type="checkbox" id="custom-checkbox"
                            label="06:00 AM To 11:59 AM"/>
                <Form.Check className="pt-1" custom type="checkbox" id="custom-checkbox"
                            label="12:00 PM To 05:59 PM"/>
                <Form.Check className="pt-1" custom type="checkbox" id="custom-checkbox"
                            label="06:00 PM To 11:59 PM"/>
            </div>
            }
        </div>
    )
};


export default DepartureTimeFilter;
