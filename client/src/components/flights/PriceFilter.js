import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";

// Input Range Package
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css';

const PriceFilter = () => {
    const [priceFilter, setPriceFilter] = useState(false);
    const [priceRange, setPriceRange] = useState({
        min: 1,
        max: 150
    });

    return (
        <div className="price-filter single-filter pt-2 mt-2">
            <div className="d-flex justify-content-between">
                <span><b>Price</b></span>
                {!priceFilter ?
                    <FontAwesomeIcon className="mr-3 mt-2 pointer" onClick={() => setPriceFilter(!priceFilter)}
                                     icon={faPlusCircle}/>
                    :
                    <FontAwesomeIcon className="mr-3 mt-2 pointer" onClick={() => setPriceFilter(!priceFilter)}
                                     icon={faMinusCircle}/>
                }

            </div>
            {priceFilter &&
            <div className="pt-4 pb-3">
                <InputRange
                    maxValue={1000}
                    minValue={0}
                    value={priceRange}
                    onChange={value => setPriceRange(value)}/>
            </div>
            }
        </div>
    )
};


export default PriceFilter;
