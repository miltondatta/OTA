import React, {Fragment, useEffect, useState} from 'react';
import {Link}                                 from "react-router-dom";
import {Badge, Modal, Button}                 from "react-bootstrap";
import {faEdit, faTrashAlt}                   from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}                      from "@fortawesome/react-fontawesome";
import axios                                  from 'axios';
import moment                                 from 'moment';

// Import Css
import '../../assets/css/airline.css';
import Alerts                                 from "../alert/alerts";
import {base_url}                             from "../../utils/Urls";

const AirportIndex = () => {
    const [airportData, setairportData] = useState([]);
    const [countryList, setcountryList] = useState([]);
    const [filterState, setfilterState] = useState({
                                                       country: '',
                                                   });
    
    const fetchData = async () => {
        const result = await axios.get(`/api/airport/all`);
        setairportData(result.data);
    };
    
    const fetchCountryList = async () => {
        const res = await axios.get(base_url + `api/country/all`);
        setcountryList(res.data);
    };
    
    const getFilteredData = async () => {
        
        const filter_data = {iso_country: filterState.country};
        const result      = await axios.post(base_url +  `api/airport/getAirportByCountry`, filter_data);
        setairportData(result.data);
    };
    
    const [airportDataMessage, setairportDataMessage] = useState({
                                                                     show   : false,
                                                                     variant: '',
                                                                     heading: '',
                                                                     message: '',
                                                                 });
    
    const [modalShow, setShow] = useState(false);
    const handleClose          = () => setShow(false);
    const handleShow           = () => setShow(true);
    
    const [deleteInfo, setDeleteInfo] = useState({
                                                     id  : '',
                                                     name: ''
                                                 });
    
    const {show, variant, heading, message} = airportDataMessage;
    
    const onChange = (e) => {
        setfilterState({country: e.target.value});
    };
    
    useEffect(() => {
        
        fetchData();
        fetchCountryList();
        
        const airportData_add_message = localStorage.getItem('airport_add_message');
        if (airportData_add_message) {
            setairportDataMessage({
                                      show    : true,
                                      variant : 'success',
                                      headding: 'New Airport Added!',
                                      message : airportData_add_message
                                  });
        }
        localStorage.removeItem('airport_add_message');
    
        const airport_update_message = localStorage.getItem('airport_update_message');
        if (airport_update_message) {
            setairportDataMessage({
                                      show    : true,
                                      variant : 'success',
                                      headding: 'New Airport Added!',
                                      message : airport_update_message
                                  });
        }
        localStorage.removeItem('airport_update_message');
    }, []);
    const deleteUser = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            
            const data = {
                id: deleteInfo.id
            };
            
            const result = await axios.post(`api/airport/delete/`, data, config);
            
            setairportDataMessage({
                                      show   : true,
                                      variant: 'success',
                                      heading: 'Airport Delete Message!',
                                      message: result.data.msg
                                  });
            
            fetchData();
            
            return result.data;
            
        } catch (err) {
            setairportDataMessage({
                                      show   : true,
                                      variant: 'danger',
                                      heading: 'Airport Delete Message!',
                                      message: err.response.data.msg,
                                  });
        }
    };
    
    return <Fragment>
        <div className="user-area">
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
                    <h2>Airport Information</h2>
                </div>
                
                <div className="row pb-3">
                    <div className="col-md-12 col-sm-12 col-12 mx-auto">
                        <Link to="/airport_add" className="btn btn-outline-primary d-block ml-auto mb-2"
                              style={{width: 80}}>Create</Link>
                    </div>
                    <div className='col-md-12 mb-3'>
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <select className="form-control" name="country" value={filterState.country}
                                        onChange={e => onChange(e)}>
                                    {countryList.length > 0 ?
                                     <Fragment>
                                         <option>Select Country</option>
                                         {countryList.map((value, key) => (
                                             <option value={value.iso3166_1_alpha_2}
                                                     key={key}>{value.country_name}</option>
                                         ))}
                                     </Fragment> :
                                     <option>Select Country</option>}
                                </select>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <button type="button" className="btn btn-info" onClick={e => getFilteredData(e)}>Search</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 col-sm-12 col-12 mx-auto">
                        <table
                            className="table table-bordered table-responsive text-center table-striped table-hover table-condensed ">
                            <thead className="font-weight-bold">
                            <tr>
                                <td>Serial No</td>
                                <td>Ident</td>
                                <td>Type</td>
                                <td>Name</td>
                                <td>Latitude_deg</td>
                                <td>Longitude_deg</td>
                                <td>Elevation_ft</td>
                                <td>Continent</td>
                                <td>Iso_country</td>
                                <td>Iso_region</td>
                                <td>Municipality</td>
                                <td>Scheduled_service</td>
                                <td>Gps_code</td>
                                <td>Iata_code</td>
                                <td>Local_code</td>
                                <td>Home_link</td>
                                <td>Wikipedia_link</td>
                                <td>Keywords</td>
                                <td>Score</td>
                                <td>Last_updated</td>
                                <td>Action</td>
                            </tr>
                            </thead>
                            <tbody>
                            {airportData.length > 0 ? <Fragment>
                                {airportData.map((value, key) => (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{value.ident}</td>
                                        <td>{value.type}</td>
                                        <td>{value.name}</td>
                                        <td>{value.latitude_deg}</td>
                                        <td>{value.longitude_deg}</td>
                                        <td>{value.elevation_ft}</td>
                                        <td>{value.continent}</td>
                                        <td>{value.iso_country}</td>
                                        <td>{value.iso_region}</td>
                                        <td>{value.municipality}</td>
                                        <td>{value.scheduled_service}</td>
                                        <td>{value.gps_code}</td>
                                        <td>{value.iata_code}</td>
                                        <td>{value.local_code}</td>
                                        <td>{value.home_link}</td>
                                        <td>{value.wikipedia_link}</td>
                                        <td>{value.keywords}</td>
                                        <td>{value.score}</td>
                                        <td>{moment(new Date(value.last_updated)).format('YYYY-MM-DD')}</td>
                                        <td className="d-flex justify-content-center">
                                            <Link to={`airport/edit/${value.id}`} className="btn btn-sm btn-info">
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </Link>
                                            <Button className="btn btn-sm btn-danger ml-2" onClick={() => {
                                                setDeleteInfo({
                                                                  id  : value.id,
                                                                  name: value.name
                                                              });
                                                
                                                setairportDataMessage({
                                                                          show: false
                                                                      });
                                                handleShow();
                                            }}>
                                                <FontAwesomeIcon icon={faTrashAlt}/>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </Fragment> : <tr>
                                 <td colSpan={21}>
                                     No data found!
                                 </td>
                             </tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <Modal show={modalShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Airport Information Remove</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete <span>{deleteInfo.name}</span> from here.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-danger" onClick={() => {
                            deleteUser();
                            handleClose();
                        }}>
                            Confirm Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    </Fragment>
};

export default AirportIndex;