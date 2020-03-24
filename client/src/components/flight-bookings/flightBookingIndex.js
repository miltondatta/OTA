import React, {Fragment, useEffect, useState} from "react";
import {faEdit, faTrashAlt, faEye}            from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}                      from "@fortawesome/react-fontawesome";
import axios                                  from 'axios';
import moment                                 from 'moment';
import Alerts                                 from "../alert/alerts";
import {Badge, Modal, Button, Form}           from "react-bootstrap";
import {base_url}                             from "../../utils/Urls";

const FlightBooking = () => {
    const [addMessage, setAddMessage]       = useState({
                                                           show    : false,
                                                           variant : '',
                                                           heading : '',
                                                           message : '',
                                                           disable : false
                                                       });
    const {show, variant, heading, message} = addMessage;
    const [data_list, set_data_list]        = useState([]);
    const [deleteInfo, setDeleteInfo]       = useState({id : '', name : ''});
    
    const handleClose          = () => setShow(false);
    const handleShow           = () => setShow(true);
    const [modalShow, setShow] = useState(false);
    
    const handleDetailsClose                      = () => setDetailsModalShow(false);
    const handleDetailShow                        = () => setDetailsModalShow(true);
    const [detailsModalShow, setDetailsModalShow] = useState(false);
    
    const [booking_data, set_booking_data]     = useState([]);
    const [passenger_data, set_passenger_data] = useState([]);
    const [segment_data, set_segment_data]     = useState([]);
    
    const deleteBooking = async () => {
        try {
            const config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            
            const data = {
                id : deleteInfo.id
            };
            
            const result = await axios.post(`api/flight_booking/delete/`, data, config);
            
            setAddMessage({
                              show    : true,
                              variant : 'success',
                              heading : 'Data Delete Message!',
                              message : `Promotion condition, ${deleteInfo.name} has been deleted.`
                          });
            
            fetchData();
            
            return result.data;
            
        } catch (err) {
            setAddMessage({
                              show    : true,
                              variant : 'danger',
                              heading : 'Data Delete Error!',
                              message : 'Promotion condition is not deleted',
                          });
        }
    };
    
    const fetchData = async () => {
        const result = await axios.get(`/api/flight_booking/all`);
        set_data_list(result.data);
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    let paymentStatus = (status_id) => {
        if (status_id === 7) {
            return 'Not Paid';
        } else if (status_id === 8) {
            return 'Partially Paid';
        } else if (status_id === 9) {
            return 'Paid';
        } else {
            return 'Not Found';
        }
    };
    
    let ticketStatus = (t_status_id) => {
        if (t_status_id === 5) {
            return 'Booked';
        } else if (t_status_id === 6) {
            return 'Confirmed';
        } else {
            return 'Not Found';
        }
    };
    
    let setDataForDetails = async (booking_id) => {
        const result = await axios.get(base_url + `api/flight_booking/flight_details/${booking_id}`);
        set_booking_data(result.data.booking_data);
        set_passenger_data(result.data.passenger_data);
        set_segment_data(result.data.segment_data);
        handleDetailShow();
    };
    return <Fragment>
        <div className="user-area">
            <div className="container-fluid fixedValues-area-container">
                <div className="col-md-8 mx-auto">
                    <Alerts
                        show={show}
                        variant={variant}
                        heading={heading}
                        message={message}
                    />
                </div>
                <div className="text-center pb-3">
                    <h2>Booking Info</h2>
                </div>
                <div className="row pb-3">
                    <div className="col-md-12 col-sm-12 col-12 mx-auto mt-4">
                        <table className="table table-bordered table-responsive-md text-center table-striped table-hover table-condensed">
                            <thead className="font-weight-bold">
                            <tr>
                                <td>SL</td>
                                <td>PNR</td>
                                <td>Flight Date</td>
                                <td>Time</td>
                                <td>From</td>
                                <td>To</td>
                                <td>Carrier</td>
                                <td>Total</td>
                                <td>Payment Status</td>
                                <td>Invoice ID</td>
                                <td>Ticket Status</td>
                                <td>Action</td>
                            </tr>
                            </thead>
                            <tbody>
                            {data_list.length > 0 ? <Fragment>
                                {data_list.map((value, key) => (
                                    
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{value.pnr}</td>
                                        <td>{moment(value.first_departure).format('YYYY-MM-DD')}</td>
                                        <td>{moment(value.first_departure).format("HH:mm")}</td>
                                        <td>{value.from_city}</td>
                                        <td>{value.to_city}</td>
                                        <td>{value.platingCarrier_name}</td>
                                        <td>{value.totalPrice} {value.currency}</td>
                                        <td>{paymentStatus(value.payment_status)}</td>
                                        <td>{value.invoice_id}</td>
                                        <td>{ticketStatus(value.issue_ticket_status)}</td>
                                        <td className="d-flex justify-content-center">
                                            <Button className="btn btn-sm btn-danger ml-2" onClick={() => {
                                                setDeleteInfo({
                                                                  id   : value.id,
                                                                  name : "PNR:" + value.pnr + " - From:" + value.from_city + " - To:" + value.to_city +
                                                                      "- on:" + moment(value.first_departure).format('YYYY-MM-DD') +
                                                                      "-at:" + moment(value.first_departure).format("HH:mm")
                                                              });
                                                
                                                setAddMessage({
                                                                  show : false
                                                              });
                                                handleShow();
                                            }}>
                                                <FontAwesomeIcon icon={faTrashAlt}/>
                                            </Button>
                                            
                                            <button onClick={e => setDataForDetails(value.id)} className="btn btn-sm btn-info ml-2">
                                                <FontAwesomeIcon icon={faEye}/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </Fragment> : <tr>
                                 <td colSpan={12}>
                                     No data found!
                                 </td>
                             </tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <Modal show={modalShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Booking Remove</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure, you want to delete <span>{deleteInfo.name}</span></Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-danger" onClick={() => {
                            deleteBooking();
                            handleClose();
                        }}>
                            Confirm Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
                
                <Modal show={detailsModalShow} onHide={handleDetailsClose} dialogClassName={"modal-xl"}>
                    <Modal.Header closeButton>
                        <Modal.Title>Details Show</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>PNR : </Form.Label>
                                    <Form.Label> {booking_data.pnr}</Form.Label>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>Invoice Id : </Form.Label>
                                    <Form.Label> {booking_data.invoice_id}</Form.Label>
                                </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>From : </Form.Label>
                                    <Form.Label> {booking_data.from_city}</Form.Label>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>To : </Form.Label>
                                    <Form.Label> {booking_data.to_city}</Form.Label>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>Carrier : </Form.Label>
                                    <Form.Label>{booking_data.platingCarrier_name}</Form.Label>
                                </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>Flight Data : </Form.Label>
                                    <Form.Label> {moment(booking_data.first_departure).format('YYYY-MM-DD')} </Form.Label>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>Flight Time : </Form.Label>
                                    <Form.Label>{moment(booking_data.first_departure).format('HH:mm')} </Form.Label>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>Duration : </Form.Label>
                                    <Form.Label>{booking_data.total_duration}</Form.Label>
                                </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>Stoppage : </Form.Label>
                                    <Form.Label> {booking_data.stoppage} </Form.Label>
                                </Form.Group>
                            </div>
                            
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>Issue Ticket Status : </Form.Label>
                                    <Form.Label> {ticketStatus(booking_data.issue_ticket_status)} </Form.Label>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>Cancel Ticket Status : </Form.Label>
                                    <Form.Label> {paymentStatus(booking_data.payment_status)} </Form.Label>
                                </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>Total Price : </Form.Label>
                                    <Form.Label> {booking_data.totalPrice} {booking_data.currency} </Form.Label>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>Base Price : </Form.Label>
                                    <Form.Label> {booking_data.basePrice} {booking_data.currency} </Form.Label>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>Tax : </Form.Label>
                                    <Form.Label> {booking_data.taxes} {booking_data.currency} </Form.Label>
                                </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-12">
                                <h5>Passenger Information</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-bordered table-sm table-condensed table-responsive-sm text-center table-striped table-hover">
                                    <tr>
                                        <td>SL</td>
                                        <td>First Name</td>
                                        <td>Last Name</td>
                                        <td>Nationality</td>
                                        <td>Gender</td>
                                        <td>Birth Date</td>
                                        <td>Passport No</td>
                                        <td>Passport Exp</td>
                                        <td>Passenger Type</td>
                                    </tr>
                                    <tbody>
                                    {passenger_data.length > 0 ? <Fragment>
                                        {passenger_data.map((pass, key) => (
                
                                            <tr key={key} className={'table-info'}>
                                                <td>{key + 1}</td>
                                                <td>{pass.first_name}</td>
                                                <td>{pass.last_name}</td>
                                                <td>{pass.nationality}</td>
                                                <td>{pass.gender}</td>
                                                <td>{moment(pass.date_of_birth).format('YYYY-MM-DD')}</td>
                                                <td>{pass.passport_number}</td>
                                                <td>{moment(pass.passport_expiry_date).format('YYYY-MM-DD')}</td>
                                                <td>{pass.passenger_type}</td>
                                            </tr>
                                        ))}
                                    </Fragment> : <tr>
                                         <td colSpan={10}>
                                             No data found!
                                         </td>
                                     </tr>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h5>Segment Information</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-bordered table-sm table-condensed table-responsive-sm text-center table-striped table-hover">
                                    <tr>
                                        <td>SL</td>
                                        <td>From</td>
                                        <td>To</td>
                                        <td>Departure</td>
                                        <td>Arrival</td>
                                        <td>Duration</td>
                                        <td>Airline</td>
                                        <td>FlightNumber</td>
                                        <td>Class</td>
                                        <td>Baggage</td>
                                    </tr>
                                    <tbody>
                                    {segment_data.length > 0 ? <Fragment>
                                        {segment_data.map((seg, key) => (
                
                                            <tr key={key} className={'table-success'}>
                                                <td>{key + 1}</td>
                                                <td>{seg.from_city}</td>
                                                <td>{seg.to_city}</td>
                                                <td>{moment(seg.departure).format('HH : MM')}</td>
                                                <td>{moment(seg.arrival).format('HH : MM')}</td>
                                                <td>{seg.duration}</td>
                                                <td>{seg.airline_name}</td>
                                                <td>{seg.flightNumber}</td>
                                                <td>{seg.bookingClass}</td>
                                                <td>{seg.baggage}</td>
                                            </tr>
                                        ))}
                                    </Fragment> : <tr>
                                         <td colSpan={10}>
                                             No data found!
                                         </td>
                                     </tr>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleDetailsClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            
            </div>
        </div>
    </Fragment>;
};

export default FlightBooking;