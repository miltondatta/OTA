import React, {Fragment} from 'react'
import {Badge, Button} from "react-bootstrap";
import {withRouter} from 'react-router-dom';

// Image
import BS from '../../assets/img/BS.gif';

// Font Awesome
import {faPlaneDeparture, faPlaneArrival, faClock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Moment from "react-moment";

const SingleFlightList = ({history, shop, index}) => {

    return (
        <Fragment>
            <div className="single-flight-list" style={index > 0 ? {'marginTop': 8} : {}}>
                <div className="row">
                    <div className="col-md-2">
                        <img src={BS} alt=""/>
                    </div>
                    <div className="col-md-10">
                        <div className="d-flex">
                            <span className="single-flight-name">{shop.from_city} to {shop.to_city}</span>
                            <Badge className="ml-2" variant="info">{shop.stoppage}</Badge>
                           
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-3 col-sm-6 col-6">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faPlaneDeparture}/>
                                <span className="single-flight-departure-text">Take Off</span>
                                <span className="d-block single-flight-departure-time"><Moment format='MMM Do YYYY, h:mm a'>{shop.first_departure}</Moment></span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faPlaneArrival}/>
                                <span className="single-flight-departure-text">Landing</span>
                                <span className="d-block single-flight-departure-time"><Moment format='MMM Do YYYY, h:mm a'>{shop.last_arrival}</Moment></span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 single-flight-list-mobile">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faClock}/>
                                <span className="single-flight-departure-text">Total Time</span>
    <span className="d-block single-flight-departure-time">{ shop.total_duration }</span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 single-flight-list-mobile">
                                <span className="single-flight-amount">{shop.totalPrice}</span>
                                <Button variant="warning" onClick={() => history.push('/flight-payment')}>Select</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};


export default withRouter(SingleFlightList);
