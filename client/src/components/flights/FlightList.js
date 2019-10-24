import React, {Component} from 'react';
import {Button, Tab, Tabs} from "react-bootstrap";

// Css
import '../../assets/css/flight-list.css';

// Component
import OneWay from "../landing/OneWay";
import RoundTrip from "../landing/RoundTrip";
import MultiCity from "../landing/MultiCity";

class FlightList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modifySearch: false
        };
    }

    render() {
        return (
            <div className={'flight-list-area'}>
                <div className="container flight-list-area-container">
                    <div className="row trip-searched-area">
                        <div className="col-md-2">
                            <span className={'trip-searched-header'}>Departure</span>
                            <p className={'trip-searched-header-text'}>Dhaka (DAC)</p>
                        </div>
                        <div className="col-md-2">
                            <span className={'trip-searched-header'}>Destination</span>
                            <p className={'trip-searched-header-text'}>Chittagong (CGP)</p>
                        </div>
                        <div className="col-md-2">
                            <span className={'trip-searched-header'}>One Way Trip</span>
                            <p className={'trip-searched-header-text'}>Sat, Oct 26, 2019</p>
                        </div>
                        <div className="col-md-2">
                            <span className={'trip-searched-header'}>Class</span>
                            <p className={'trip-searched-header-text'}>Business</p>
                        </div>
                        <div className="col-md-2">
                            <span className={'trip-searched-header'}>Passengers</span>
                            <p className={'trip-searched-header-text'}>Chittagong (CGP)</p>
                        </div>
                        <div className="col-md-2">
                            <Button variant="warning" onClick={() => this.setState({modifySearch: !this.state.modifySearch})}>Modify
                                Search</Button>
                        </div>
                    </div>

                    {this.state.modifySearch &&
                    <div className="row pb-3">
                        <div className="col-md-12">
                            <Tabs defaultActiveKey="oneway" id="uncontrolled-tab-example">
                                <Tab eventKey="oneway" title="One Way">
                                    <OneWay/>
                                </Tab>
                                <Tab eventKey="round-trip" title="Round Trip">
                                    <RoundTrip/>
                                </Tab>
                                <Tab eventKey="multi-city" title="Multi City">
                                    <MultiCity/>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                    }

                </div>
            </div>
        )
    }
}


export default FlightList;