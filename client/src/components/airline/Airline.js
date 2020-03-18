import React, {Fragment, useEffect, useState} from 'react';
import {Link}                                 from "react-router-dom";
import {Badge, Modal, Button, Form}           from "react-bootstrap";
import {faEdit, faTrashAlt}                   from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}                      from "@fortawesome/react-fontawesome";
import axios                                  from 'axios';

// Import Css
//import '../../assets/css/airline.css';
import Alerts                                 from "../alert/alerts";
import {base_url}                             from "../../utils/Urls";

const Airline = () => {
    const fetchData = async () => {
        const result = await axios.get(`/api/airline/all`);
        setAirlines(result.data);
    };
    
    const [airlines, setAirlines] = useState([]);
    
    const [airlineMessage, setAirlineMessage] = useState({
                                                             show    : false,
                                                             variant : '',
                                                             heading : '',
                                                             message : '',
                                                         });
    
    const [modalShow, setShow] = useState(false);
    const handleClose          = () => setShow(false);
    const handleShow           = () => setShow(true);
    
    const [deleteInfo, setDeleteInfo] = useState({
                                                     id   : '',
                                                     name : ''
                                                 });
    
    const {show, variant, heading, message} = airlineMessage;
    
    const [filterState, setfilterState] = useState({
                                                       search_value : '',
                                                   });
    
    const onChange = (e) => {
        setfilterState({search_value : e.target.value});
    };
    
    const getFilteredData = async () => {
        const  filter_data = {filter_data : filterState.search_value};
        if(filter_data.filter_data){
            const result      = await axios.post(base_url + `api/airline/getAirlinesByFilter`, filter_data);
            setAirlines(result.data);
        }else{
            fetchData();
        }
    };
    
    useEffect(() => {
        fetchData();
        
        const airline_add_message = localStorage.getItem('airline_add_message');
        if (airline_add_message) {
            setAirlineMessage({
                                  show     : true,
                                  variant  : 'success',
                                  headding : 'New Airline Added!',
                                  message  : airline_add_message
                              });
        }
        localStorage.removeItem('airline_add_message');
        
    }, []);
    
    const deleteAirline = async () => {
        try {
            const config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            
            const data = {
                id : deleteInfo.id
            };
            
            const result = await axios.post(`/api/airline/delete`, data, config);
            
            setAirlineMessage({
                                  show    : true,
                                  variant : 'success',
                                  heading : 'Airline Delete Message!',
                                  message : result.data.msg
                              });
            
            fetchData();
            return result.data;
            
        } catch (err) {
            setAirlineMessage({
                                  show    : true,
                                  variant : 'danger',
                                  heading : 'Airline Delete Message!',
                                  message : err.response.data.msg,
                              });
        }
    };
    
    return <Fragment>
        <div className="">
            <div className="container-fluid airline-area-container">
                <div className="col-md-8 mx-auto">
                    <Alerts
                        show={show}
                        variant={variant}
                        heading={heading}
                        message={message}
                    />
                </div>
                
                <div className="text-center pb-3">
                    <h2>Airlines Information</h2>
                </div>
                
                <div className="row pb-3">
                    <div className="col-md-12 col-sm-12 col-12 mx-auto">
                        <div className="col-md-12 col-sm-12 col-12 mx-auto">
                            <Link to="airline-add" className="btn btn-outline-primary d-block ml-auto mb-2" style={{width : 80}}>Create</Link>
                        </div>
                        <div className='col-md-12 mb-3'>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <Form.Control type="text" name="search_val" value={filterState.search_value}
                                                  onChange={e => onChange(e)}
                                                  placeholder="Enter Search Value"/>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <button type="button" className="btn btn-info" onClick={e => getFilteredData(e)}>Search</button>
                                </div>
                            </div>
                        </div>
                        <table className="table table-bordered table-responsive-md text-center">
                            <thead className="font-weight-bold">
                            <tr>
                                <td>Serial No</td>
                                <td>Name</td>
                                <td>IATA</td>
                                <td>ICAO</td>
                                <td>Call Sign</td>
                                <td>Country</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                            </thead>
                            <tbody>
                            {airlines.length > 0 ? <Fragment>
                                {airlines.map((value, key) => (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.iata}</td>
                                        <td>{value.icao}</td>
                                        <td>{value.callsign}</td>
                                        <td>{value.country}</td>
                                        <td>
                                            <Badge variant={(value.active === 'Y') ? 'success' : 'danger'}>{(value.active === 'Y') ? 'Active' :
                                                                                                            'Deactive'}</Badge>
                                        </td>
                                        <td className="d-flex justify-content-center">
                                            <Link to={`airline/edit/${value.id}`} className="btn btn-sm btn-info">
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </Link>
                                            <Button className="btn btn-sm btn-danger ml-2" onClick={() => {
                                                setDeleteInfo({
                                                                  id   : value.id,
                                                                  name : value.name
                                                              });
                                                
                                                setAirlineMessage({
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
                                 <td colSpan={8}>
                                     No data found!
                                 </td>
                             </tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <Modal show={modalShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Airline Information Remove</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete <span>{deleteInfo.name}</span> Airline?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-danger" onClick={() => {
                            deleteAirline();
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

export default Airline;