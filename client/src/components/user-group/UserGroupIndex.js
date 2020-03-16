import React, {Fragment, Component} from 'react';
import axios                        from 'axios';
import {Badge, Modal, Button, Form} from "react-bootstrap";
import {faEdit, faTrashAlt}         from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}            from "@fortawesome/react-fontawesome";
import Alerts                       from "../alert/alerts";
import {base_url}                   from "../../utils/Urls";

class UserGroupIndex extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            group_name  : '',
            description : '',
            status_id   : 3,
            
            all_data : [],
            
            show    : '',
            variant : '',
            heading : '',
            message : '',
            
            saveButton   : true,
            updateButton : false,
            
            delete_id   : '',
            delete_name : '',
            modal_show  : false,
        };
        
    }
    
    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name] : value});
    };
    
    settingMessage = (variant, fxd_name = '', sort_message = '') => {
        if (variant === 'success') {
            this.setState({
                              show     : true,
                              variant  : 'success',
                              headding : 'Data Added!',
                              message  : `User group ${fxd_name} has been ${sort_message}`
                          });
        } else if (variant === 'danger') {
            this.setState({
                              show    : true,
                              variant : 'danger',
                              heading : 'Add Error...!',
                              message : `User group ${fxd_name} has not been ${sort_message} Please Try again Later.`,
                          });
        }
    };
    
    resetFormData = e => {
        this.setState({
                          id           : '',
                          group_name   : '',
                          description  : '',
                          status_id    : 3,
                          saveButton   : true,
                          updateButton : false,
                      });
    };
    
    prepareFormData = () => {
        const {id, group_name, description, status_id} = this.state;
        return {
            id          : id,
            group_name  : group_name,
            description : description,
            status_id   : status_id,
        };
    };
    
    fetchData = () => {
        const result = axios.get(`/api/user_group/all`)
                            .then(res => {
                                this.setState({all_data : res.data});
                            })
                            .catch(err => {
                                console.log(err.msg);
                            });
    };
    
    saveFormData = async () => {
        let fxd_name = this.state.group_name;
        if (fxd_name === '') {
            alert("Please input the Group name.");
            return;
        }
        
        try {
            const config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            const res    = await axios.post(`/api/user_group/store`, this.prepareFormData(), config);
            this.settingMessage('success', fxd_name, 'Added !');
            this.resetFormData();
            this.fetchData();
        } catch (err) {
            this.settingMessage('danger', fxd_name, 'Added !');
        }
    };
    
    setDataForUpdate = id => {
        this.state.all_data.find(item => {
            if (item.id === id) {
                this.setState({
                                  id           : item.id,
                                  group_name   : item.group_name,
                                  description  : item.description,
                                  status_id    : item.status_id,
                                  saveButton   : false,
                                  updateButton : true,
                              });
            }
        });
    };
    
    updateFormData = async (e) => {
        let fxd_name = this.state.group_name;
        if (fxd_name === '') {
            alert("Please input the Group name.");
            return;
        }
        try {
            const config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            const res    = await axios.post(base_url + `api/user_group/update/`, this.prepareFormData(), config);
            this.settingMessage('success', fxd_name, 'updated !');
            this.resetFormData();
            this.fetchData();
            
        } catch (err) {
            this.settingMessage('danger', fxd_name, 'updated !');
        }
    };
    
    setDeleteInfo = (delete_id, delete_name) => {
        this.setState({
                          delete_id   : delete_id,
                          delete_name : delete_name,
                          modal_show  : true
                      });
    };
    
    deleteFixedValue = async () => {
        let fxd_name = this.state.delete_name;
        try {
            const config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            
            const data = {
                id : this.state.delete_id
            };
            
            const result = await axios.post(`api/user_group/delete/`, data, config);
            
            this.settingMessage('success', fxd_name, 'Added !');
            this.resetFormData();
            this.fetchData();
            
        } catch (err) {
            this.settingMessage('danger', fxd_name, 'Added !');
        }
    };
    
    handleClose = (e) => {
        this.setState({
                          delete_id   : "",
                          delete_name : "",
                          modal_show  : false
                      });
    };
    
    componentDidMount() {
        this.fetchData();
    }
    
    render() {
        const {show, variant, heading, message, group_name, description, status_id, all_data, saveButton, updateButton} = this.state;
        
        return (
            <>
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
                            <h2>User Groups</h2>
                        </div>
                        
                        <div className="row pb-3 custom-border-bottom">
                            <div className="col-md-12 col-sm-12 col-12 mx-auto  ">
                                <div className="row">
                                    <div className="col-md-4">
                                        <Form.Group controlId="group_name">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" name="group_name" value={group_name}
                                                          onChange={this.handleChange}
                                                          placeholder="Enter Group Name" required/>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-8">
                                        <Form.Group controlId="description">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control type="text" name="description" value={description}
                                                          onChange={this.handleChange}
                                                          placeholder="Enter Description"/>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <Form.Group controlId="status_id">
                                            <Form.Label>Status</Form.Label>
                                            <select className="form-control" name="status_id" value={status_id}
                                                    onChange={this.handleChange}>
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
                                    <Button variant="outline-danger" type="reset" className="ml-2"
                                            onClick={e => this.resetFormData(e)}>Reset</Button>
                                    {saveButton === true ?
                                     <Button variant="outline-info" className="ml-2"
                                             onClick={e => {
                                                 this.saveFormData();
                                             }}>Save</Button> : ""}
                                    {updateButton === true ?
                                     <Button variant="outline-success" className="ml-2"
                                             onClick={e => this.updateFormData(e)}>Update</Button> : ""}
                                </div>
                            
                            </div>
                        </div>
                        
                        <div className="row pb-3">
                            <div className="col-md-12 col-sm-12 col-12 mx-auto mt-4">
                                <table
                                    className="table table-bordered table-responsive-md text-center table-striped table-hover table-condensed">
                                    <thead className="font-weight-bold">
                                    <tr>
                                        <td>Serial No</td>
                                        <td>Group Name</td>
                                        <td>Group Description</td>
                                        <td>Status</td>
                                        <td>Action</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {all_data.length > 0 ? <Fragment>
                                        {all_data.map((value, key) => (
                                            <tr key={key}>
                                                <td>{key + 1}</td>
                                                <td>{value.group_name}</td>
                                                <td>{value.description}</td>
                                                <td>
                                                    <Badge variant={(value.status_id === 3) ? 'success' : 'danger'}>{(value.status_id === 3) ?
                                                                                                                     'Active' :
                                                                                                                     'Inactive'}</Badge>
                                                </td>
                                                <td className="d-flex justify-content-center">
                                                    <button onClick={e => this.setDataForUpdate(value.id)} className="btn btn-sm btn-info">
                                                        <FontAwesomeIcon icon={faEdit}/>
                                                    </button>
                                                    <Button className="btn btn-sm btn-danger ml-2" onClick={(e) => {
                                                        this.setDeleteInfo(value.id, value.group_name);
                                                    }}>
                                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </Fragment> : <tr>
                                         <td colSpan={5}>
                                             No data found!
                                         </td>
                                     </tr>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <Modal show={this.state.modal_show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>User Group Remove</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Are you sure you want to delete <span>{this.state.delete_name}</span> from here.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="outline-secondary" onClick={this.handleClose}>
                                    Close
                                </Button>
                                <Button variant="outline-danger" onClick={() => {
                                    this.deleteFixedValue();
                                    this.handleClose();
                                }}>
                                    Confirm Delete
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </>
        );
    }
}

export default UserGroupIndex;