import React, {Fragment, Component}       from 'react';
import axios                              from 'axios';
import {Badge, Modal, Button, Form}       from "react-bootstrap";
import {faEdit, faTrashAlt, faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}                  from "@fortawesome/react-fontawesome";
import Alerts                             from "../alert/alerts";
import {base_url}                         from "../../utils/Urls";
import {array}                            from "prop-types";

class UserGroupMappingIndex extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            group_id               : '',
            group_name               : '',
            user_id                : '',
            all_active_group_data  : [],
            all_user_data          : [],
            all_assigned_user_data : [],
            idHolder               : [],
            
            show    : '',
            variant : '',
            heading : '',
            message : '',
            
            saveButton : true,
            
        };
    }
    
    handleChange = e => {
        const {name, value} = e.target;
        let index = e.nativeEvent.target.selectedIndex;
        let label = e.nativeEvent.target[index].text;
        this.setState({[name] : value});
        this.setState({group_name : label});
    };
    
    handleGroupChange = e => {
        this.handleChange(e);
        this.gettingUserData(e.target.value);
    };
    
    gettingUserData = async (group_id) => {
        
        const assigned_users = await axios.get(base_url + `api/user_group_mapping/assignedUsers/${group_id}`)
                                          .then(res => {
                                              this.setState({all_assigned_user_data : res.data});
                                              let users_id = [];
                                              res.data.forEach(function (item) {
                                                  users_id.push(item.user_id);
                                              });
                                              this.setState({idHolder : [...this.state.idHolder, ...users_id]});
                                          })
                                          .then(ass_res => {
                                              const result = axios.get(base_url + `api/user_group_mapping/notAssignedUsers/${group_id}`)
                                                                  .then(res => {
                                                                      this.setState({all_user_data : res.data});
                                                                  })
                                                                  .catch(err => {
                                                                  
                                                                  });
                                          })
                                          .catch(err => {
                                          
                                          });
    };
    
    settingMessage = (variant, fxd_name = '', sort_message = '') => {
        if (variant === 'success') {
            this.setState({
                              show     : true,
                              variant  : 'success',
                              headding : 'Data Added!',
                              message  : `Users Successfully ${sort_message} in  ${fxd_name}`
                          });
        } else if (variant === 'danger') {
            this.setState({
                              show    : true,
                              variant : 'danger',
                              heading : 'Add Error...!',
                              message : `Users not ${sort_message} in  ${fxd_name}`,
                          });
        }
    };
    
    resetFormData = e => {
        this.setState({
                          group_id               : '',
                          user_id                : '',
                          all_user_data          : [],
                          all_assigned_user_data : [],
                          idHolder               : [],
            
                          saveButton : true,
                      });
    };
    
    prepareFormData = () => {
        const {id, user_id, group_id, all_assigned_user_data} = this.state;
        return {
            group_id               : group_id,
            all_assigned_user_data : all_assigned_user_data,
        };
    };
    
    fetchData = () => {
        const result = axios.get(`/api/user_group/all_active`)
                            .then(res => {
                                this.setState({all_active_group_data : res.data});
                            })
                            .catch(err => {
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
            const res    = await axios.post(`/api/user_group_mapping/store`, this.prepareFormData(), config);
            this.settingMessage('success', fxd_name, 'Added');
            this.resetFormData();
            this.fetchData();
        } catch (err) {
            this.settingMessage('danger', fxd_name, 'Added');
        }
    };
    
    removeArrayItemFromObject = (arr, itemToRemoveId) => {
        return arr.filter(item => item.id !== itemToRemoveId);
    };
    
    mergeArrayItemToObject  = (arr, itemToAdd) => {
        arr.push(itemToAdd);
        return arr;
    };
    
    findArrayItemFromObject = (arr, itemToFindId) => {
        let foundItem = arr.find(item => {
            if (item.id === itemToFindId) {
                return item;
            }
        });
        return foundItem;
    };
    
    assignToGroup = (user_id) => {
        let find_item = this.findArrayItemFromObject(this.state.all_user_data, user_id);
        if (find_item) {
            let merged_array  = this.mergeArrayItemToObject(this.state.all_assigned_user_data, find_item);
            let removed_array = this.removeArrayItemFromObject(this.state.all_user_data, user_id);
            this.setState({all_user_data : removed_array});
            this.setState({all_assigned_user_data : merged_array});
        }
        
    };
    
    removeFromGroup = (user_id) => {
        let find_item = this.findArrayItemFromObject(this.state.all_assigned_user_data, user_id);
        if (find_item) {
            let removed_array = this.removeArrayItemFromObject(this.state.all_assigned_user_data, user_id);
            let merged_array  = this.mergeArrayItemToObject(this.state.all_user_data, find_item);
            this.setState({all_user_data : merged_array});
            this.setState({all_assigned_user_data : removed_array});
        }
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
    
    componentDidMount() {
        this.fetchData();
    }
    
    render() {
        
        const {
                  show, variant, heading, message, all_user_data, all_active_group_data, all_assigned_user_data,
                  idHolder, group_id, saveButton
              } = this.state;
        
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
                            <h2>User Group Mapping</h2>
                        </div>
                        
                        <div className="row pb-3 custom-border-bottom">
                            <div className="col-md-12 col-sm-12 col-12 mx-auto">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 mx-auto">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Form.Group controlId="group_id">
                                                    <Form.Label>Group List</Form.Label>
                                                    
                                                    <select className="form-control" name="group_id" value={group_id}
                                                            onChange={this.handleGroupChange}>
                                                        {all_active_group_data.length > 0 ?
                                                         <Fragment>
                                                             <option>Select Group</option>
                                                             {all_active_group_data.map((value, key) => (
                                                                 <option value={value.id}
                                                                         key={key}>{value.group_name}</option>
                                                             ))}
                                                         </Fragment> :
                                                         <option>Select Group</option>}
                                                    </select>
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 mx-auto">
                                        <h4>
                                            <Badge variant="success">All User List</Badge>
                                        </h4>
                                        <table
                                            className="table table-bordered table-responsive-md text-center table-striped table-hover table-condensed">
                                            <thead className="font-weight-bold">
                                            <tr>
                                                <td>Name</td>
                                                <td>Email</td>
                                                <td>Mobile</td>
                                                <td>Action</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {all_user_data.length > 0 ? <Fragment>
                                                {all_user_data.map((value, key) => (
                                                    <tr key={key}>
                                                        <td>{value.name}</td>
                                                        <td>{value.email}</td>
                                                        <td>{value.mobile}</td>
                                                        <td className="d-flex justify-content-center">
                                                            
                                                            <button onClick={e => this.assignToGroup(value.id)}
                                                                    className="btn btn-sm btn-info">
                                                                <FontAwesomeIcon icon={faPlusSquare}/>
                                                            </button>
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
                                    <div className="col-md-6 col-sm-12 mx-auto">
                                        <h4>
                                            <Badge variant="info">Assigned User List</Badge>
                                        </h4>
                                        <table
                                            className="table table-bordered table-responsive-md text-center table-striped table-hover table-condensed">
                                            <thead className="font-weight-bold">
                                            <tr>
                                                <td>Name</td>
                                                <td>Email</td>
                                                <td>Mobile</td>
                                                <td>Action</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {all_assigned_user_data.length > 0 ? <Fragment>
                                                {all_assigned_user_data.map((value, key) => (
                                                    <tr key={key}>
                                                        <td>{value.name}</td>
                                                        <td>{value.email}</td>
                                                        <td>{value.mobile}</td>
                                                        <td className="d-flex justify-content-center">
                                                            {<Button className="btn btn-sm btn-danger ml-2" onClick={(e) => {
                                                                this.removeFromGroup(value.id);
                                                            }}>
                                                                <FontAwesomeIcon icon={faTrashAlt}/>
                                                            </Button>}
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
                                
                                <div className="row">
                                    <Button variant="outline-danger" type="reset" className="ml-2"
                                            onClick={e => this.resetFormData(e)}>Reset</Button>
                                    {saveButton === true ?
                                     <Button variant="outline-info" className="ml-2"
                                             onClick={e => {
                                                 this.saveFormData();
                                             }}>Save</Button> : ""}
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default UserGroupMappingIndex;