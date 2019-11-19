import React, {Fragment} from 'react'
import {Badge, Button} from "react-bootstrap";
import {withRouter} from 'react-router-dom';

// Image
import BS from '../../assets/img/BS.gif';
import VQ from '../../assets/img/VQ.gif'

// Font Awesome
import {faPlaneDeparture, faPlaneArrival, faClock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SingleFlightList = ({history}) => {
    return (
        <Fragment>
            <div className="single-flight-list">
                <div className="row">
                    <div className="col-md-2">
                        <img src={BS} alt=""/>
                    </div>
                    <div className="col-md-10">
                        <div className="d-flex">
                            <span className="single-flight-name">Dhaka to Chittagong</span>
                            <Badge className="ml-2" variant="info">NON-STOP</Badge>
                            <Badge className="ml-1" variant="info">REFUNDABLE</Badge>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-3 col-sm-6 col-6">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faPlaneDeparture}/>
                                <span className="single-flight-departure-text">Take Off</span>
                                <span className="d-block single-flight-departure-time">FRI, 25 OCT, 2019, 7:00</span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faPlaneArrival}/>
                                <span className="single-flight-departure-text">Landing</span>
                                <span className="d-block single-flight-departure-time">FRI, 25 OCT, 2019, 7:55</span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 single-flight-list-mobile">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faClock}/>
                                <span className="single-flight-departure-text">Total Time</span>
                                <span className="d-block single-flight-departure-time">55M</span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 single-flight-list-mobile">
                                <span className="single-flight-amount">BDT 5,015</span>
                                <Button variant="warning" onClick={() => history.push('/flight-payment')}>Select</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-flight-list mt-2">
                <div className="row">
                    <div className="col-md-2">
                        <img src={BS} alt=""/>
                    </div>
                    <div className="col-md-10">
                        <div className="d-flex">
                            <span className="single-flight-name">Dhaka to Chittagong</span>
                            <Badge className="ml-2" variant="info">NON-STOP</Badge>
                            <Badge className="ml-1" variant="info">REFUNDABLE</Badge>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-3 col-sm-6 col-6">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faPlaneDeparture}/>
                                <span className="single-flight-departure-text">Take Off</span>
                                <span className="d-block single-flight-departure-time">FRI, 25 OCT, 2019, 7:00</span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faPlaneArrival}/>
                                <span className="single-flight-departure-text">Landing</span>
                                <span className="d-block single-flight-departure-time">FRI, 25 OCT, 2019, 7:55</span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 single-flight-list-mobile">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faClock}/>
                                <span className="single-flight-departure-text">Total Time</span>
                                <span className="d-block single-flight-departure-time">55M</span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 single-flight-list-mobile">
                                <span className="single-flight-amount">BDT 5,015</span>
                                <Button variant="warning">Select</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-flight-list mt-2">
                <div className="row">
                    <div className="col-md-2">
                        <img src={VQ} alt=""/>
                    </div>
                    <div className="col-md-10">
                        <div className="d-flex">
                            <span className="single-flight-name">Dhaka to Chittagong</span>
                            <Badge className="ml-2" variant="info">NON-STOP</Badge>
                            <Badge className="ml-1" variant="info">REFUNDABLE</Badge>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-3 col-sm-6 col-6">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faPlaneDeparture}/>
                                <span className="single-flight-departure-text">Take Off</span>
                                <span className="d-block single-flight-departure-time">FRI, 25 OCT, 2019, 7:00</span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faPlaneArrival}/>
                                <span className="single-flight-departure-text">Landing</span>
                                <span className="d-block single-flight-departure-time">FRI, 25 OCT, 2019, 7:55</span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 single-flight-list-mobile">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faClock}/>
                                <span className="single-flight-departure-text">Total Time</span>
                                <span className="d-block single-flight-departure-time">55M</span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 single-flight-list-mobile">
                                <span className="single-flight-amount">BDT 5,015</span>
                                <Button variant="warning">Select</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-flight-list mt-2">
                <div className="row">
                    <div className="col-md-2">
                        <img src={VQ} alt=""/>
                    </div>
                    <div className="col-md-10">
                        <div className="d-flex">
                            <span className="single-flight-name">Dhaka to Chittagong</span>
                            <Badge className="ml-2" variant="info">NON-STOP</Badge>
                            <Badge className="ml-1" variant="info">REFUNDABLE</Badge>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-3 col-sm-6 col-6">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faPlaneDeparture}/>
                                <span className="single-flight-departure-text">Take Off</span>
                                <span className="d-block single-flight-departure-time">FRI, 25 OCT, 2019, 7:00</span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faPlaneArrival}/>
                                <span className="single-flight-departure-text">Landing</span>
                                <span className="d-block single-flight-departure-time">FRI, 25 OCT, 2019, 7:55</span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 single-flight-list-mobile">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faClock}/>
                                <span className="single-flight-departure-text">Total Time</span>
                                <span className="d-block single-flight-departure-time">55M</span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 single-flight-list-mobile">
                                <span className="single-flight-amount">BDT 5,015</span>
                                <Button variant="warning">Select</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};


export default withRouter(SingleFlightList);