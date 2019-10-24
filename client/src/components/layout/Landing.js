import React, {Component, Fragment} from 'react';
import {Tab, Tabs} from "react-bootstrap";

// Css
import '../../assets/css/landing.css';

// Component
import SliderComponent from "../landing/Slider";
import OneWay from "../landing/OneWay";
import RoundTrip from "../landing/RoundTrip";
import MultiCity from "../landing/MultiCity";

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departure: new Date(),
            return: new Date()
        };
    }

    render() {
        return (
            <Fragment>
                <SliderComponent/>
                <div className="trip-search-area pb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 trip-search-area-col">
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
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Landing;
