import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {connect} from "react-redux";
import {Tabs, Tab, Form, Button, Card} from "react-bootstrap";
import '../../assets/css/profile.css'

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile: '',
        };

         this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const {isAuthenticated,user} = this.props.auth;
        return (
            <div className="register-area">
                <div className="register-overlay">
                    <div className="container profile-area-container">
                        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                            <Tab eventKey="home" title="Profile">
                                <Form>
                                    <Form.Row>
                                        <Form.Group controlId="formGridName"
                                                    className={'col-md-6 col-sm-12'}>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Name" value={user.name} onChange={this.onChange}/>
                                        </Form.Group>
                                        <Form.Group controlId="formGridEmail"
                                                    className={'col-md-6 col-sm-12'}>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" value={user.email} onChange={this.onChange}/>
                                        </Form.Group>
                                        <Form.Group controlId="formGridMobileNo"
                                                    className={'col-md-6 col-sm-12'}>
                                            <Form.Label>Mobile No</Form.Label>
                                            <Form.Control type="mobile" placeholder="Enter Mobile No" value={user.mobile} onChange={this.onChange}/>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </Tab>
                            <Tab eventKey="password" title="Password">
                                <Form>
                                    <Form.Row>
                                        <Form.Group controlId="formGridCurrentPass"
                                                    className={'col-md-6 col-sm-12'}>
                                            <Form.Label>Current Password</Form.Label>
                                            <Form.Control type="password"
                                                          placeholder="Enter Current Password"/>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group controlId="formGridNewPass"
                                                    className={'col-md-6 col-sm-12'}>
                                            <Form.Label>New Password</Form.Label>
                                            <Form.Control type="password"
                                                          placeholder="Enter New Password"/>
                                        </Form.Group>
                                        <Form.Group controlId="formGridConfirmPass"
                                                    className={'col-md-6 col-sm-12'}>
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password"
                                                          placeholder="Enter Confirm Password"/>
                                        </Form.Group>
                                    </Form.Row>
                                    <Button type="submit">Change Password</Button>
                                </Form>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}

Profile.propTypes = {
    auth: Proptypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Profile);