import React, {useState} from 'react'
import {Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";

const FlightStopFilter = () => {
    const [flightStops, setFlightStops] = useState(false);

    return (
        <div className="flight-stop-filter single-filter pt-2 mt-2">
            <div className="d-flex justify-content-between">
                <span><b>Flight Stops</b></span>
                {!flightStops ?
                    <FontAwesomeIcon className="mr-3 mt-2 pointer" onClick={() => setFlightStops(!flightStops)}
                                     icon={faPlusCircle}/>
                    :
                    <FontAwesomeIcon className="mr-3 mt-2 pointer" onClick={() => setFlightStops(!flightStops)}
                                     icon={faMinusCircle}/>
                }
            </div>

            {flightStops &&
            <div className="pt-3">
                <Form.Check custom type="checkbox" id="custom-checkbox" label="Non-Stop"
                />
            </div>
            }
        </div>
    )
};


export default FlightStopFilter;
