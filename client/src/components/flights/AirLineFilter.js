import React, {useState} from 'react'
import {Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";

const AirLineFilter = () => {
    const [airLine, setAirLine] = useState(false);

    return (
        <div className="airline-filter single-filter pt-2 mt-2">
            <div className="d-flex justify-content-between">
                <span><b>AirLines</b></span>
                {!airLine ?
                    <FontAwesomeIcon className="mr-3 mt-2 pointer"
                                     onClick={() => setAirLine(!airLine)}
                                     icon={faPlusCircle}/>
                    : <FontAwesomeIcon className="mr-3 mt-2 pointer"
                                       onClick={() => setAirLine(!airLine)}
                                       icon={faMinusCircle}/>
                }
            </div>

            {airLine &&
            <div className="pt-3">
                <Form.Check custom type="checkbox" id="custom-checkbox" label="Select All"/>
                <Form.Check className="pt-1" custom type="checkbox" id="custom-checkbox"
                            label="US-BANGLA AIRLINES"/>
                <Form.Check className="pt-1" custom type="checkbox" id="custom-checkbox"
                            label="NOVO AIR"/>
            </div>
            }
        </div>
    )
};


export default AirLineFilter;
