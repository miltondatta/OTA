import React, {Fragment, Component} from 'react'
import axios                        from 'axios';
import {Badge, Modal, Button, Form} from "react-bootstrap";
import {faEdit, faTrashAlt}         from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}            from "@fortawesome/react-fontawesome";
import Alerts                       from "../alert/alerts";

class UserGroupIndex extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            group_name    : '',
            description   : '',
            status_id     : '',
            selected_users: '',
            user_list     : [],
            
            show   : '',
            variant: '',
            heading: '',
            message: ''
        };
        
    }
    
    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    };
    
    componentDidMount() {
        this.getUsers();
    }
    
    getUsers = async () => {
        let result = await axios.get(`/api/users/index`);
        console.log(result.data);
        this.setState({user_list: result.data});
    };
    
    render() {
        const {show, variant, heading, message} = this.state;
        
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
                                            <Form.Control type="text" name="group_name" value={this.group_name}
                                                          onChange={this.handleChange}
                                                          placeholder="Enter Group Name" required/>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-8">
                                        <Form.Group controlId="description">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control type="text" name="description" value={this.description}
                                                          onChange={this.handleChange}
                                                          placeholder="Enter Description"/>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-12 col-sm-12 col-12 mx-auto  ">
                                <div className="row">
                                    <div className="col-md-4">
                                        <Form.Group controlId="status_id">
                                            <Form.Label>Status</Form.Label>
                                            <select className="form-control" name="status_id" value={this.status_id}
                                                    onChange={this.handleChange}>
                                                <Fragment>
                                                    <option>Select Status</option>
                                                    <option value='3' key='3'>Active</option>
                                                    <option value='4' key='4'>Inactive</option>
                                                </Fragment>
                                            </select>
                                        </Form.Group>
                                    </div>
                                    
                                    <div className="col-md-4">
                                        <Form.Group controlId="booking_class">
                                            <Form.Label>User Lists</Form.Label>
                                            <select className="form-control" name="selected_users" value={this.selected_users}
                                                    onChange={this.handleChange}>
                                                <Fragment>
                                                    <option>Select Users</option>
                                                    {this.state.user_list.map((value) => {
                                                        return <option value={value.id} key={value.id}>{value.name} ( {value.email} )</option>
                                                    })}
                                                </Fragment>
                                            </select>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row pb-3">
                            <div className="col-md-8 col-sm-12 col-12 mx-auto mt-4">
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
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        {/*<Modal show={modalShow} onHide={handleClose}>
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
                         </Modal>*/}
                    </div>
                </div>
            </>
        )
    }
}

export default UserGroupIndex;