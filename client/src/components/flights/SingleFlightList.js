import React, {Fragment, useState} from 'react'
import {Badge, Button, Modal, Card} from "react-bootstrap";
import {withRouter} from 'react-router-dom';

// Image
import BS from '../../assets/img/BS.gif';

// Font Awesome
import {
    faPlaneDeparture,
    faPlaneArrival,
    faClock,
    faLevelUpAlt,
    faLevelDownAlt
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Moment from "react-moment";

const SingleFlightList = ({history, shop, index}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Fragment>
            <div className="single-flight-list" style={index > 0 ? {'marginTop': 8} : {}}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row mr-0">
                            <div className="col-md-6 col-sm-6 col-6">
                                <span className="font-weight-bold"><Moment
                                    format='ddd, MMM Do'>{shop.first_departure}</Moment></span>
                            </div>
                            <div className="col-md-6 col-sm-6 col-6 text-right">
                                <span className="font-weight-bold">{shop.from_city} to {shop.to_city}</span>
                                <Badge className="ml-2" variant="info">{shop.stoppage}</Badge>
                            </div>
                        </div>
                        <div className="row pt-3 mr-0">
                            <div className="col-md-3 col-sm-6 col-6">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faPlaneDeparture}/>
                                <span className="single-flight-departure-text">Take Off</span>
                                <span className="d-block single-flight-departure-time">
                                    <Moment format='hh:mm a'>{shop.first_departure}</Moment>
                                </span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 text-right text-sm-right text-md-left">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faPlaneArrival}/>
                                <span className="single-flight-departure-text">Landing</span>
                                <span className="d-block single-flight-departure-time">
                                    {shop.same_day_arrival ? <Moment format='hh:mm a'>{shop.last_arrival}</Moment> :
                                        <Moment format='ddd, MMM Do hh:mm a'>{shop.last_arrival}</Moment>}
                                </span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 single-flight-list-mobile">
                                <FontAwesomeIcon className="single-flight-departure-icon" icon={faClock}/>
                                <span className="single-flight-departure-text">Total Time</span>
                                <span className="d-block single-flight-departure-time">{shop.total_duration}</span>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 single-flight-list-mobile text-right">
                                <span className="single-flight-amount">{shop.totalPrice}</span>
                            </div>
                        </div>
                        <div className="row pt-3 mr-0">
                            <div className="col-md-8 col-sm-6 col-6 single-flight-list-mobile">
                                <Button variant="outline-success" onClick={() => setShowModal(true)}>Show
                                    Details</Button>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 single-flight-list-mobile text-right">
                                <Button variant="outline-info"
                                        onClick={() => history.push('/flight-payment')}>Book Now</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Modal
                size="lg"
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby="single-flight-list-details">
                <Modal.Header closeButton className="single-flight-show-details-modal">
                    <Modal.Title id="single-flight-list-details">
                        Itinerary details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="single-flight-show-details-modal">
                    <h5 style={{fontSize: 16}}>To {shop.to_city}</h5>
                    {shop.segments.length > 0 && <Fragment>
                        {shop.segments.map((segment, key) => (
                            <Card className="bg-white" key={key} style={key > 0 ? {'marginTop': 12} : {}}>
                                <Card.Body>
                                    <div className="row">
                                        <div className="col-md-3 single-flight-show-details-left-date-area">
                                            <FontAwesomeIcon className="single-flight-departure-icon" style={{fontSize: 13}}
                                                             icon={faLevelUpAlt}/>
                                            <span className="single-flight-departure-text single-flight-departure-text-modal">Take Off</span>
                                            <span className="d-block single-flight-show-details-left-date"><Moment format='ddd, MMM Do hh:mm a'>{segment.departure}</Moment></span>
                                            <FontAwesomeIcon className="single-flight-departure-icon mt-2 md-sm-2 mt-md-4" style={{fontSize: 13}}
                                                             icon={faLevelDownAlt}/>
                                            <span className="single-flight-departure-text single-flight-departure-text-modal">Landing</span>
                                            <span className="d-block single-flight-show-details-left-date"><Moment format='ddd, MMM Do hh:mm a'>{segment.arrival}</Moment></span>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="row single-flight-show-details-right-city-area">
                                                <div className="col-md-4 col-sm-12 col-12">
                                                    <h6 className="single-flight-show-details-right-city">From City: {segment.from_city ? segment.from_city : segment.from}</h6>
                                                </div>
                                                <div className="col-md-4 col-sm-12 col-12 text-left text-sm-left text-md-center">
                                                    <h6 className="single-flight-show-details-right-city">To City: {segment.to_city ? segment.to_city : segment.to}</h6>
                                                </div>
                                                <div className="col-md-4 col-sm-12 col-12 text-left text-sm-left text-md-right">
                                                    <h6 className="single-flight-show-details-right-city">{segment.total_duration}</h6>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p className="single-flight-show-details-right-content">Airline: <span>{segment.airline_name}</span>
                                                    </p>
                                                </div>
                                                <div className="col-md-12">
                                                    <p className="single-flight-show-details-right-content">Flight
                                                        Number: <span>{segment.flightNumber}</span></p>
                                                </div>
                                                <div className="col-md-12">
                                                    <p className="single-flight-show-details-right-content">Booking
                                                        Class: <span>{segment.bookingClass}</span></p>
                                                </div>
                                                <div className="col-md-12">
                                                    <p className="single-flight-show-details-right-content">Baggage: <span>{segment.baggage}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </Fragment>}
                </Modal.Body>
                <Modal.Footer className="single-flight-show-details-modal justify-content-between">
                    {/*<div className="row">
                        <div className="col-md-12">

                        </div>
                    </div>*/}

                    <p className="single-flight-amount">{shop.totalPrice}</p>
                    <div>
                        <Button variant="outline-info" onClick={() => history.push('/flight-payment')}>Book Now</Button>
                        <Button variant="outline-dark ml-3" onClick={() => setShowModal(false)}>Close</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
};


export default withRouter(SingleFlightList);
