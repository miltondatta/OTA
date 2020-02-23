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

const FixedValuesIndex = () => {
    const [fixed_values, set_fixed_values] = useState([]);
    
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
        const result = await axios.get(`/api/fixed_values/all`);
        set_fixed_values(result.data);
    };
    
    useEffect(() => {
        fetchData();
        
    }, []);
    
    const [formData, setFormData] = useState({
                                                 id           : '',
                                                 discount_name: '',
                                                 discount_code: '',
                                                 discount     : '',
                                                 discount_unit: '',
                                                 discount_type: '',
                                                 status_id    : '',
                                             });
    
    const {id, discount_name, discount_code, discount, discount_unit, discount_type, status_id} = formData;
    
    const onChange = e => {
        let valid = validateInput(e);
        if (valid || valid === '') {
            setFormData({...formData, [e.target.name]: valid});
        }
    };
    
    const resetFormData = e => {
        setFormData({
                        id           : '',
                        discount_name: '',
                        discount_code: '',
                        discount     : '',
                        discount_unit: '',
                        discount_type: '',
                        status_id    : '',
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
            
            const result = await axios.post(`api/fixed_values/delete/`, data, config);
            
            setAddMessage({
                              show   : true,
                              variant: 'success',
                              heading: 'Fixed Value Delete Message!',
                              message: `Fixed Value ${deleteInfo.name} has been deleted.`
                          });
            
            fetchData();
            
            return result.data;
            
        } catch (err) {
            setAddMessage({
                              show   : true,
                              variant: 'danger',
                              heading: 'Fixed Value Delete Error!',
                              message: 'Fixed Value is not deleted',
                          });
        }
    };
    
    function setDataForUpdate(id) {
        fixed_values.find(item => {
            if (item.id == id) {
                setFormData({
                                id           : item.id,
                                discount_name: item.discount_name,
                                discount_code: item.discount_code,
                                discount     : item.discount,
                                discount_unit: item.discount_unit,
                                discount_type: item.discount_type,
                                status_id    : item.status_id,
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
            let fxd_name = formData.discount_name;
            const res    = await axios.post(`/api/fixed_values/store/`, formData, config);
            
            setAddMessage({
                              show    : true,
                              variant : 'success',
                              headding: 'Fixed Value Add!',
                              message : `New Fixed Value, ${fxd_name} has been Added!`
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
            let fxd_name = formData.discount_name;
            const res    = await axios.post(base_url + `api/fixed_values/update/`, formData, config);
            
            setAddMessage({
                              show   : true,
                              variant: 'success',
                              heading: 'Fixed Value Update Message!',
                              message: `Fixed Value, ${fxd_name} has been Updated Successfully`
                          });
            fetchData();
        } catch (err) {
            setAddMessage({
                              show   : true,
                              variant: 'danger',
                              heading: 'Fixed Value Update Error!',
                              message: 'Fixed Value is not Updated',
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
                    <h2>Fixed Value Information</h2>
                </div>
                
                <div className="row pb-3 custom-border-bottom">
                    <div className="col-md-12 col-sm-12 col-12 mx-auto  ">
                        <div className="row">
                            <div className="col-md-4">
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="discount_name" value={discount_name}
                                                  onChange={e => onChange(e)}
                                                  placeholder="Enter name"/>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>Code</Form.Label>
                                    <Form.Control type="text" name="discount_code" value={discount_code}
                                                  onChange={e => onChange(e)}
                                                  placeholder="Enter Code" required/>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group controlId="formElevation_ft">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control type="text" name="discount" value={discount}
                                                  onChange={e => onChange(e)} data-number={'float_only'}
                                                  placeholder="Enter discount" required/>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Form.Group controlId="discount_unit">
                                    <Form.Label>Unit</Form.Label>
                                    <select className="form-control" name="discount_unit" value={discount_unit}
                                            onChange={e => onChange(e)}>
                                        <Fragment>
                                            <option>Select Unit</option>
                                            <option value='ps' key='ps'>Percentage</option>
                                            <option value='fxd' key='fxd'>Fixed Price</option>
                                        </Fragment>
                                    </select>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group controlId="discount_type">
                                    <Form.Label>Type</Form.Label>
                                    <select className="form-control" name="discount_type" value={discount_type}
                                            onChange={e => onChange(e)}>
                                        <Fragment>
                                            <option>Select Type</option>
                                            <option value='d' key='d'>Discount</option>
                                            <option value='a' key='a'>Addition</option>
                                        </Fragment>
                                    </select>
                                </Form.Group>
                            </div>
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
                                <td>Amount</td>
                                <td>Unit</td>
                                <td>Type</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                            </thead>
                            <tbody>
                            {fixed_values.length > 0 ? <Fragment>
                                {fixed_values.map((value, key) => (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{value.discount_name}</td>
                                        <td>{value.discount_code}</td>
                                        <td>{value.discount}</td>
                                        <td>
                                            {(value.discount_unit) === 'ps' ? 'Percentage' : 'Fixed'}
                                        </td>
                                        <td>{(value.discount_type) === 'd' ? 'Discount' : 'Addition'}</td>
                                        <td>{value.status.status_name}</td>
                                        <td className="d-flex justify-content-center">
                                            <button onClick={e => setDataForUpdate(value.id)} className="btn btn-sm btn-info">
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </button>
                                            <Button className="btn btn-sm btn-danger ml-2" onClick={() => {
                                                setDeleteInfo({
                                                                  id  : value.id,
                                                                  name: value.discount_name
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
                        <Modal.Title>Airport Information Remove</Modal.Title>
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

export default FixedValuesIndex;