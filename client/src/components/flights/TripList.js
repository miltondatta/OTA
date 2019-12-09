import React, {Fragment} from 'react';

// Component
import SingleFlightList from "./SingleFlightList";

const TripList = ({shopData: {data}}) => {
    return (
        data.length > 0 && <Fragment>
            <div className="col-md-9 col-sm-12 col-12 flight-list-show-area px-0">
                {data.map((value, index) => (
                    <SingleFlightList key={index} shop={value} index={index}/>
                ))}
            </div>
        </Fragment>
    )
};


export default TripList;
