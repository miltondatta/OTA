import React, {Fragment, useEffect, useState} from "react";
import {faEdit, faTrashAlt}                   from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}                      from "@fortawesome/react-fontawesome";
import axios  from 'axios';
import moment from 'moment';
import Alerts from "../alert/alerts";
import {Badge, Modal, Button, Form}           from "react-bootstrap";

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
    const [deleteInfo, setDeleteInfo]       = useState({id: '', name: ''});
    
    const handleClose = () => setShow(false);
    const handleShow  = () => setShow(true);
    
    const [modalShow, setShow]                = useState(false);
    
    const deleteBooking = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            
            const data = {
                id: deleteInfo.id
            };
            
            const result = await axios.post(`api/flight_booking/delete/`, data, config);
            
            setAddMessage({
                              show   : true,
                              variant: 'success',
                              heading: 'Data Delete Message!',
                              message: `Promotion condition, ${deleteInfo.name} has been deleted.`
                          });
            
            fetchData();
            
            return result.data;
            
        } catch (err) {
            setAddMessage({
                              show   : true,
                              variant: 'danger',
                              heading: 'Data Delete Error!',
                              message: 'Promotion condition is not deleted',
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
                                                                  name : "PNR:"+value.pnr+" - From:"+value.from_city+" - To:"+value.to_city+
                                                                      "- on:"+moment(value.first_departure).format('YYYY-MM-DD')+
                                                                        "-at:"+moment(value.first_departure).format("HH:mm")
                                                              });
                                                
                                                setAddMessage({
                                                                  show : false
                                                              });
                                                handleShow();
                                            }}>
                                                <FontAwesomeIcon icon={faTrashAlt}/>
                                            </Button>
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
                
            </div>
        </div>
    </Fragment>;
};

export default FlightBooking;