import React, {Component} from 'react';
// Css
import '../../assets/css/flight-list.css';

// Component
import TripSearched from "./TripSearched";
import TripFilter from "./TripFilter";
import TripList from "./TripList";

class FlightList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'flight-list-area'}>
                <div className="container flight-list-area-container">
                    <TripSearched/>
                    <div className="row pt-3">
                        <TripFilter/>
                        <TripList/>
                    </div>
                </div>
            </div>
        )
    }
}


export default FlightList;