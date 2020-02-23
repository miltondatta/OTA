import React, {Fragment, useEffect, useState} from 'react';
import {Link}                                 from "react-router-dom";
import {Badge, Modal, Button, Form}           from "react-bootstrap";
import {faEdit, faTrashAlt}                   from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}                      from "@fortawesome/react-fontawesome";
import axios                                  from 'axios';
import moment                                 from 'moment';

// Import Css
import '../../assets/css/airline.css';
import Alerts                                 from "../alert/alerts";
import {base_url}                             from "../../utils/Urls";
import {validateInput}                        from "../../utils/funcitons";
import {func}                                 from "prop-types";

const ApiSourcesIndex = () => {
    const [data_list, set_data_list] = useState([]);
    
    const [deleteInfo, setDeleteInfo] = useState({id: '', name: ''});
    
    const [addMessage, setAddMessage] = useState({
                                                     show   : false,
                                                     variant: '',
                                                     heading: '',
                                                     message: '',
                                                     disable: false
                                                 });
    
    const {show, variant, heading, message} = addMessage;
    
    const [modalShow, setShow]            = useState(false);
    const [saveButton, setSaveButton]     = useState(true);
    const [updateButton, setUpdateButton] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow  = () => setShow(true);
    
    const fetchData = async () => {
        const result = await axios.get(`/api/api_sources/all`);
        set_data_list(result.data);
    };
    
    useEffect(() => {
        fetchData();
        
    }, []);
    
    const [formData, setFormData] = useState({
                                                 id       : '',
                                                 api_code : '',
                                                 api_name : '',
                                                 end_point: '',
                                                 status_id: '',
                                             });
    
    const {id, api_code, api_name, end_point, status_id} = formData;
    
    const onChange = e => {
        let valid = validateInput(e);
        if (valid || valid === '') {
            setFormData({...formData, [e.target.name]: valid});
        }
    };
    
    const resetFormData = e => {
        setFormData({
                        id       : '',
                        api_code : '',
                        api_name : '',
                        end_point: '',
                        status_id: '',
                    });
    };
    
    const deleteFixedValue = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            
            const data = {
                id: deleteInfo.id
            };
            
            const result = await axios.post(`api/api_sources/delete/`, data, config);
            
            setAddMessage({
                              show   : true,
                              variant: 'success',
                              heading: 'Data Delete Message!',
                              message: `Api Source, ${deleteInfo.name} has been deleted.`
                          });
            
            fetchData();
            
            return result.data;
            
        } catch (err) {
            setAddMessage({
                              show   : true,
                              variant: 'danger',
                              heading: 'Data Delete Error!',
                              message: 'Api Source is not deleted',
                          });
        }
    };
    
    function setDataForUpdate(id) {
        data_list.find(item => {
            if (item.id == id) {
                setFormData({
                                id       : item.id,
                                api_code : item.api_code,
                                api_name : item.api_name,
                                end_point: item.end_point,
                                status_id: item.status_id,
                            });
                setUpdateButton(true);
                setSaveButton(false);
            }
        });
    }
    
    const saveFormData = async (data) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            let fxd_name = formData.api_name;
            const res    = await axios.post(`/api/api_sources/store/`, formData, config);
            
            setAddMessage({
                              show    : true,
                              variant : 'success',
                              headding: 'Data Add!',
                              message : `Api Source, ${fxd_name} has been Added!`
                          });
            
            resetFormData();
            fetchData();
        } catch (err) {
            setAddMessage({
                              show   : true,
                              variant: 'danger',
                              heading: 'Add Error!',
                              message: "Error... Please Try again. ",
                          });
        }
        
    };
    
    const updateFormData = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            let fxd_name = formData.api_name;
            const res    = await axios.post(base_url + `api/api_sources/update/`, formData, config);
            
            setAddMessage({
                              show   : true,
                              variant: 'success',
                              heading: 'Data Update Message!',
                              message: `Api Source, ${fxd_name} has been Updated Successfully`
                          });
            fetchData();
        } catch (err) {
            setAddMessage({
                              show   : true,
                              variant: 'danger',
                              heading: 'Data Update Error!',
                              message: 'Api Source is not Updated',
                          });
        }
    }
    
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
                    <h2>Api Source Information</h2>
                </div>
                
                <div className="row pb-3 custom-border-bottom">
                    <div className="col-md-12 col-sm-12 col-12 mx-auto  ">
                        <div className="row">
                            <div className="col-md-4">
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="api_code" value={api_code}
                                                  onChange={e => onChange(e)}
                                                  placeholder="Enter name"/>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>Code</Form.Label>
                                    <Form.Control type="text" name="api_name" value={api_name}
                                                  onChange={e => onChange(e)}
                                                  placeholder="Enter Code" required/>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>End Point</Form.Label>
                                    <Form.Control type="text" name="end_point" value={end_point}
                                                  onChange={e => onChange(e)}
                                                  placeholder="Enter End Point" required/>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Form.Group controlId="status_id">
                                    <Form.Label>Status</Form.Label>
                                    <select className="form-control" name="status_id" value={status_id}
                                            onChange={e => onChange(e)}>
                                        <Fragment>
                                            <option>Select Status</option>
                                            <option value='3' key='3'>Active</option>
                                            <option value='4' key='4'>Inactive</option>
                                        </Fragment>
                                    </select>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <Button variant="outline-warning" type="reset" className="ml-2"
                                    onClick={e => resetFormData(e)}>Reset</Button>
                            {saveButton === true ?
                             <Button variant="outline-info" className="ml-2"
                                     onClick={e => saveFormData(e)}>Save</Button> : ""}
                            {updateButton === true ?
                             <Button variant="outline-success" className="ml-2"
                                     onClick={e => updateFormData(e)}>Update</Button> : ""}
                        </div>
                    </div>
                </div>
                
                <div className="row pb-3">
                    <div className="col-md-8 col-sm-12 col-12 mx-auto mt-4">
                        <table className="table table-bordered table-responsive-md text-center table-striped table-hover table-condensed">
                            <thead className="font-weight-bold">
                            <tr>
                                <td>Serial No</td>
                                <td>Name</td>
                                <td>Code</td>
                                <td>End Point</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                            </thead>
                            <tbody>
                            {data_list.length > 0 ? <Fragment>
                                {data_list.map((value, key) => (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{value.api_code}</td>
                                        <td>{value.api_name}</td>
                                        <td>{value.end_point}</td>
                                        <td>{value.status.status_name}</td>
                                        <td className="d-flex justify-content-center">
                                            <button onClick={e => setDataForUpdate(value.id)} className="btn btn-sm btn-info">
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </button>
                                            <Button className="btn btn-sm btn-danger ml-2" onClick={() => {
                                                setDeleteInfo({
                                                                  id  : value.id,
                                                                  name: value.api_name
                                                              });
                                                
                                                setAddMessage({
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
                        <Modal.Title>Api Source Remove</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete <span>{deleteInfo.name}</span> from here.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-danger" onClick={() => {
                            deleteFixedValue();
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

export default ApiSourcesIndex;