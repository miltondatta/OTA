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
                    <div className="col-md-12">
                        <div className="row mr-0">
                            <div className="col-md-6 col-sm-6 col-6">
                                <span className="font-weight-bold"><Moment format='ddd, MMM Do'>{shop.first_departure}</Moment></span>
                            </div>
                            <div className="col-md-6 col-sm-6 col-6 text-right">
                                <span className="font-weight-bold">{shop.from_city} to {shop.to_city}</span>
                                <Badge className="ml-2" variant="info">{shop.stoppage}</Badge>
                            </div>    
                        </div>    
                        <div className="row pt-2 mr-0">
                            <div className="col-md-3 col-sm-6 col-6">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faPlaneDeparture}/>
                                <span className="single-flight-departure-text">Take Off</span>
                                <span className="d-block single-flight-departure-time"><Moment format='hh:mm a'>{shop.first_departure}</Moment></span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faPlaneArrival}/>
                                <span className="single-flight-departure-text">Landing</span>
                                <span className="d-block single-flight-departure-time">
                                    {
                                        shop.same_day_arrival ? <Moment format='hh:mm a'>{shop.last_arrival}</Moment> : <Moment format='ddd, MMM Do hh:mm a'>{shop.last_arrival}</Moment>
                                    }                
                                </span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 single-flight-list-mobile">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faClock}/>
                                <span className="single-flight-departure-text">Total Time</span>
    <span className="d-block single-flight-departure-time">{ shop.total_duration }</span>
                            </div>    
                            <div className="col-md-3 col-sm-6 col-6 single-flight-list-mobile text-right">
                                <span className="single-flight-amount">{shop.totalPrice}</span>                             
                            </div>                        
                        </div>
                        <div className="row pt-2 mr-0">
                            <div className="col-md-8 col-sm-6 col-6 single-flight-list-mobile">
                                <Button variant="outline-success" onClick={() => history.push('/flight-payment')}>Show Details</Button>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 single-flight-list-mobile text-right">
                                <Button variant="outline-info" onClick={() => history.push('/flight-payment')}>Book</Button>
                            </div>
                        </div>    

                    </div>
                </div>
            </div>
        </Fragment>
    )
};


export default withRouter(SingleFlightList);
