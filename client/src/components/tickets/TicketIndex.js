import React, {Fragment, useEffect, useState} from "react";
import {faTicketAlt, faPrint}                 from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}                      from "@fortawesome/react-fontawesome";
import axios                                  from 'axios';
import moment                                 from 'moment';
import Alerts                                 from "../alert/alerts";
import {Badge, Modal, Button, Form}           from "react-bootstrap";
import {base_url}                             from "../../utils/Urls";
import {validateInput}                        from "../../utils/funcitons";
import classnames                             from "classnames";
import DatePicker                             from 'react-datepicker2';
import {PDFDownloadLink}                      from "@react-pdf/renderer";
import {PdfDocument}                          from "./PdfDocument";

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
    
    const [booking_data, set_booking_data]     = useState([]);
    const [passenger_data, set_passenger_data] = useState([]);
    const [segment_data, set_segment_data]     = useState([]);
    
    const fetchData = async () => {
        const result = await axios.get(`/api/ticket/all`);
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
        const result = await axios.get(base_url + `api/ticket/flight_details/${booking_id}`);
        set_booking_data(result.data.booking_data);
        set_passenger_data(result.data.passenger_data);
        set_segment_data(result.data.segment_data);
        
    };
    
    const onChange = e => {
        let valid = validateInput(e);
        if (valid || valid === '') {
            setFormData({...formData, [e.target.name] : valid});
        }
    };
    
    const [formData, setFormData] = useState({
                                                 pnr                 : '',
                                                 invoice_id          : '',
                                                 s_flight_date       : '',
                                                 from                : '',
                                                 to                  : '',
                                                 payment_status      : '',
                                                 issue_ticket_status : '',
                                                 booking_date        : '',
                                                 platingCarrier      : '',
                                             });
    
    const {
              pnr, invoice_id, from, to, platingCarrier, payment_status, issue_ticket_status, booking_date, s_flight_date,
          } = formData;
    
    const searchFormData = async (data) => {
        try {
            const config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            const res    = await axios.post(base_url + `api/ticket/search/`, formData, config);
            set_data_list(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    
    const resetFormData = async (data) => {
        setFormData({
                        pnr                 : '',
                        invoice_id          : '',
                        s_flight_date       : '',
                        from                : '',
                        to                  : '',
                        payment_status      : '',
                        issue_ticket_status : '',
                        booking_date        : '',
                        platingCarrier      : '',
                    });
        fetchData();
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
                    <h2>Ticket Info</h2>
                </div>
                
                <div className="row pb-3 custom-border-bottom">
                    <div className="col-md-12 col-sm-12 col-12 mx-auto  ">
                        <div className="row">
                            <div className="col-md-3">
                                <Form.Group controlId="promo_type">
                                    <Form.Label>PNR</Form.Label>
                                    <Form.Control type="text" name="pnr" value={pnr}
                                                  onChange={e => onChange(e)}
                                                  placeholder="Enter PNR"
                                                  className={'form-control'}/>
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="promo_type">
                                    <Form.Label>Invoice ID</Form.Label>
                                    <Form.Control type="text" name="invoice_id" value={invoice_id}
                                                  onChange={e => onChange(e)}
                                                  placeholder="Enter Invoice Id"
                                                  className={'form-control'}/>
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="booking_date">
                                    <Form.Label>Booking Date</Form.Label>
                                    <DatePicker timePicker={false}
                                                placeholder="e.g. 2020/03/03/"
                                                name="booking_date"
                                                id="booking_date"
                                                inputFormat="DD/MM/YYYY"
                                                value={booking_date}
                                                onChange={booking_date => setFormData((pv) => ({...pv, booking_date}))}
                                                className={'form-control'}/>
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="flight_date">
                                    <Form.Label>Flight Date</Form.Label>
                                    <DatePicker timePicker={false}
                                                placeholder="e.g. 2020/03/03/"
                                                name="flight_date"
                                                id="flight_date"
                                                inputFormat="DD/MM/YYYY"
                                                value={s_flight_date}
                                                onChange={s_flight_date => setFormData((pvf) => ({...pvf, s_flight_date}))}
                                                className={'form-control'}/>
                                </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-3">
                                <Form.Group controlId="payment_status">
                                    <Form.Label>Payment Status</Form.Label>
                                    <select name="payment_status" value={payment_status}
                                            onChange={e => onChange(e)}
                                            className={'form-control'}>
                                        <Fragment>
                                            <option>Select Payment Status</option>
                                            <option value='7' key='7'>Not Paid</option>
                                            <option value='8' key='8'>Partially Paid</option>
                                            <option value='9' key='9'>Paid</option>
                                        </Fragment>
                                    </select>
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="issue_ticket_status">
                                    <Form.Label>Ticket Issue Type</Form.Label>
                                    <select name="issue_ticket_status" value={issue_ticket_status}
                                            onChange={e => onChange(e)}
                                            className={'form-control'}>
                                        <Fragment>
                                            <option>Select Issue Type</option>
                                            <option value='6' key='6'>Confirmed</option>
                                            <option value='5' key='5'>Booked</option>
                                        </Fragment>
                                    </select>
                                </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <Button variant="outline-warning" className="ml-2"
                                    onClick={e => searchFormData(e)}>Search</Button>
                            
                            <Button variant="outline-danger" className="ml-2"
                                    onClick={e => resetFormData(e)}>Reset</Button>
                        </div>
                    </div>
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
                                <td>Paid</td>
                                <td>Due</td>
                                <td>Payment Status</td>
                                <td>Invoice ID</td>
                                <td>Ticket Status</td>
                                <td>Booking Date Time</td>
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
                                        <td>{parseFloat(value.totalPrice).toFixed(2)} {value.currency}</td>
                                        <td>{parseFloat(value.paid_amount ? value.paid_amount : 0).toFixed(2)} {value.currency}</td>
                                        <td>{parseFloat(value.totalPrice - value.paid_amount).toFixed(2)} {value.currency}</td>
                                        <td>{paymentStatus(value.payment_status)}</td>
                                        <td>{value.invoice_id}</td>
                                        <td>{ticketStatus(value.issue_ticket_status)}</td>
                                        <td>{moment(value.createdAt).format('YYYY-MM-DD HH:mm')}</td>
                                        <td className="d-flex justify-content-center">
                                            
                                            <button onClick={e => setDataForDetails(value.id)} className="btn btn-sm btn-info ml-2">
                                                <FontAwesomeIcon icon={faPrint}/>
                                            </button>
                                            
                                            <Button className="btn btn-sm btn-success ml-2" onClick={e => setDataForDetails(value.id)}>
                                                <FontAwesomeIcon icon={faTicketAlt}/>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </Fragment> : <tr>
                                 <td colSpan={15}>
                                     No data found!
                                 </td>
                             </tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>;
};

export default FlightBooking;