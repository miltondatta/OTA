import React, {useState} from 'react'
import {Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";

const FareTypeFilter = () => {
    const [fareType, setFareType] = useState(false);

    return (
        <div className="fare-type-filter single-filter pt-2 mt-2">
            <div className="d-flex justify-content-between">
                <span><b>Fare Type</b></span>
                {!fareType ?
                    <FontAwesomeIcon className="mr-3 mt-2 pointer"
                                     onClick={() => setFareType(!fareType)}
                                     icon={faPlusCircle}/>
                    : <FontAwesomeIcon className="mr-3 mt-2 pointer"
                                       onClick={() => setFareType(!fareType)}
                                       icon={faMinusCircle}/>
                }
            </div>

            {fareType &&
            <div className="pt-3">
                <Form.Check custom type="checkbox" id="custom-checkbox" label="Refundable"/>
                <Form.Check className="pt-1" custom type="checkbox" id="custom-checkbox"
                            label="Non-Refundable"/>
            </div>
            }
        </div>
    )
};


export default FareTypeFilter;
