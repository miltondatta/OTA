import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Alert} from "react-bootstrap";

// Css
import '../../assets/css/flight-list.css';

// Redux
import {connect} from 'react-redux';

// Component
import TripSearched from "./TripSearched";
import TripFilter from "./TripFilter";
import TripList from "./TripList";

class FlightList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    /*componentDidMount() {
        console.log();
    }*/

    render() {
        return (
            <div className={'flight-list-area'}>
                <div className="container flight-list-area-container">
                    <TripSearched flight_search={this.props.passenger.user_flight_search}/>
                    <div className="row pt-3">
                        <TripFilter shopData={this.props.shop.shopData}/>
                        {Object.keys(this.props.shop.shopData).length > 0 ?
                            <TripList shopData={this.props.shop.shopData}/>
                            :
                            <Alert className="mt-2 mt-md-0" variant={'warning'} style={{'height': 50, marginLeft: 30}}>
                                No Flight Found!
                            </Alert>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

FlightList.propTypes = {
    shop: PropTypes.object.isRequired,
    passenger: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    shop: state.shop,
    passenger: state.passenger
});

export default connect(mapStateToProps, {})(FlightList);