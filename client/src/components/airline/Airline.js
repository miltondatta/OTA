import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {Badge, Button} from "react-bootstrap";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Import Css
import '../../assets/css/airline.css';

const Airline = () => {
    return <Fragment>
        <div className="airline-area">
            <div className="container-fluid airline-area-container">
                <div className="text-center pb-3">
                    <h2>Airlines Information</h2>
                </div>

                <div className="row">
                    <div className="col-md-8 col-sm-12 col-12 mx-auto">
                        <Link to="airline-add" className="btn btn-outline-primary d-block ml-auto mb-2" style={{width: 80}}>Create</Link>

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
                            <tr>
                                <td>01</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>
                                    <Badge variant="success">Active</Badge>
                                </td>
                                <td className="d-flex justify-content-center">
                                    <Link to="#" className="btn btn-sm btn-info">
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </Link>
                                    <Link to="#" className="btn btn-sm btn-danger ml-2">
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>
                                    <Badge variant="danger">Inactive</Badge>
                                </td>
                                <td>
                                    <Link to="#" className="btn btn-sm btn-info">
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </Link>
                                    <Link to="#" className="btn btn-sm btn-danger ml-2">
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>
                                    <Badge variant="success">Active</Badge>
                                </td>
                                <td>
                                    <Link to="#" className="btn btn-sm btn-info">
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </Link>
                                    <Link to="#" className="btn btn-sm btn-danger ml-2">
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>
                                    <Badge variant="success">Active</Badge>
                                </td>
                                <td>
                                    <Link to="#" className="btn btn-sm btn-info">
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </Link>
                                    <Link to="#" className="btn btn-sm btn-danger ml-2">
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>
                                    <Badge variant="danger">Inactive</Badge>
                                </td>
                                <td>
                                    <Link to="#" className="btn btn-sm btn-info">
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </Link>
                                    <Link to="#" className="btn btn-sm btn-danger ml-2">
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>Test</td>
                                <td>
                                    <Badge variant="danger">Inactive</Badge>
                                </td>
                                <td>
                                    <Link to="#" className="btn btn-sm btn-info">
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </Link>
                                    <Link to="#" className="btn btn-sm btn-danger ml-2">
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
};

export default Airline;