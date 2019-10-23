import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane, faCity, faPlaneDeparture} from "@fortawesome/free-solid-svg-icons";
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
            return: new Date(),
            oneWay: true,
            roundTrip: true,
            multiCity: true
        };
    }

    render() {
        return (
            <Fragment>
                <SliderComponent/>
                {/*<div className="container mt-130 z-index100">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bs-example bs-example-tabs cstyle04">
                                <ul className="nav nav-tabs" id="myTab">
                                    <li onClick={() => this.setState({
                                        oneWay: true,
                                        roundTrip: false,
                                        multiCity: false
                                    })} className={this.state.oneWay && 'active'}>
                                        <Link data-toggle="tab" to="#">
                                            <FontAwesomeIcon icon={faPlaneDeparture} className={'flightIcon'}/>
                                            <span
                                                className="hideText">One Way</span>&nbsp;
                                        </Link>
                                    </li>
                                    <li onClick={() => this.setState({
                                        roundTrip: true,
                                        oneWay: false,
                                        multiCity: false
                                    })} className={this.state.roundTrip && 'active'}>
                                        <Link data-toggle="tab"
                                              to="#">
                                            <FontAwesomeIcon icon={faPaperPlane} className={'flightIcon'}/>
                                            <span className="hideText">Round Trip</span>&nbsp;
                                        </Link>
                                    </li>
                                    <li onClick={() => this.setState({
                                        multiCity: true,
                                        roundTrip: false,
                                        oneWay: false
                                    })} className={this.state.multiCity && 'active'}>
                                        <Link data-toggle="tab" to="#">
                                            <FontAwesomeIcon icon={faCity} className={'flightIcon'}/>
                                            <span className="hideText">Multi City</span>&nbsp;
                                        </Link></li>
                                </ul>
                                <div className="tab-content2" id="myTabContent">
                                    <OneWay oneWay={this.state.oneWay}/>
                                    <RoundTrip roundTrip={this.state.roundTrip}/>
                                    <MultiCity multiCity={this.state.multiCity}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}
                <div className="trip-search-area py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Tabs defaultActiveKey="oneway" id="uncontrolled-tab-example">
                                    <Tab eventKey="oneway" title="One Way">
                                        <OneWay oneWay={this.state.oneWay}/>
                                    </Tab>
                                    <Tab eventKey="round-trip" title="Round Trip">
                                        <RoundTrip roundTrip={this.state.roundTrip}/>
                                    </Tab>
                                    <Tab eventKey="multi-city" title="Multi City">
                                        <MultiCity multiCity={this.state.multiCity}/>
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
