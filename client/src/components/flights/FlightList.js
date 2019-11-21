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
        this.state = {};
    }

    /*componentDidMount() {
        console.log(localStorage.getItem('user_flight_search'));
    }*/

    render() {
        return (
            <div className={'flight-list-area'}>
                <div className="container flight-list-area-container">
                    <TripSearched/>
                    <div className="row pt-3">
                        <TripFilter shopData={this.props.shop.shopData}/>
                        {Object.keys(this.props.shop.shopData).length > 0 ?
                            <TripList shopData={this.props.shop.shopData}/>
                            : <Alert className="mt-2 mt-md-0" variant={'warning'} style={{'height': 50, marginLeft: 30}}>
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
    shop: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    shop: state.shop
});

export default connect(mapStateToProps, {})(FlightList);