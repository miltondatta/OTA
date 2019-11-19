import React, {useState, useEffect} from 'react';
import {Tabs, Tab, Form, Button} from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

// Redux
import Proptypes from 'prop-types';
import {connect} from "react-redux";
import {updateProfile} from "../../actions/profileActions";

// Css
import '../../assets/css/profile.css'

function Profile({auth: {isAuthenticated, user}, updateProfile, profile}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
    });

    if (profile.msg.msg) NotificationManager.success(profile.msg.msg, 'Profile Update!', 5000);

    useEffect(() => {
        setFormData({
            name: !user.name ? '' : user.name,
            email: !user.email ? '' : user.email,
            mobile: !user.mobile ? '' : user.mobile
        });
    }, [user.name, user.email, user.mobile]);

    const {name, email, mobile} = formData;

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const onSubmit = e => {
        e.preventDefault();
        const data = {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
        };

        updateProfile(data);
    };

    return (
        isAuthenticated ?
            <div className="register-area">
                <div className="register-overlay">
                    <div className="container profile-area-container">
                        <Tabs defaultActiveKey="profile" transition={false} id="noanim-tab-example">
                            <Tab eventKey="profile" title="Profile">
                                <Form className={"profile-form"} onSubmit={onSubmit}>
                                    <Form.Row>
                                        <Form.Group controlId="formGridName"
                                                    className={'col-md-6 col-sm-12'}>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Name" name={'name'}
                                                          value={name} onChange={e => onChange(e)}/>
                                        </Form.Group>
                                        <Form.Group controlId="formGridEmail"
                                                    className={'col-md-6 col-sm-12'}>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name={'email'}
                                                          value={email} readOnly/>
                                        </Form.Group>
                                        <Form.Group controlId="formGridMobileNo"
                                                    className={'col-md-6 col-sm-12'}>
                                            <Form.Label>Mobile No</Form.Label>
                                            <Form.Control type="mobile" placeholder="Enter Mobile No" name={'mobile'}
                                                          value={mobile} onChange={e => onChange(e)}/>
                                        </Form.Group>
                                    </Form.Row>
                                    <Button variant="info" type="submit">
                                        Update
                                    </Button>
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
                <NotificationContainer/>
            </div>
            : <Redirect to={'/'}/>
    );
}

Profile.propTypes = {
    auth: Proptypes.object.isRequired,
    profile: Proptypes.object.isRequired,
    updateProfile: Proptypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

const mapDispatchToProps = {updateProfile};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);