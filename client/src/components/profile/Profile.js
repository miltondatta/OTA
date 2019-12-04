import React, {useState, useEffect} from 'react';
import {Tabs, Tab, Form, Button} from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

// Redux
import Proptypes from 'prop-types';
import {connect} from "react-redux";
import {updateProfile, updatePassword, emptyMessage} from "../../actions/profileActions";
import {emptyError} from "../../actions/errorActions";

// Css
import '../../assets/css/profile.css'

function Profile({auth: {isAuthenticated, user}, updateProfile, profile, updatePassword, errors, emptyError, emptyMessage}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
    });
    const [passwordFormData, setPasswordFormData] = useState({
        password: '',
        newPassword: '',
        confirmPassword: ''
    });

    if (profile.msg.profile_update_msg) {
        NotificationManager.success(profile.msg.profile_update_msg, 'Profile Update!', 5000);
        emptyMessage();
    }
    if (errors.profile_update_msg) {
        NotificationManager.error(errors.profile_update_msg, 'Password Error!', 5000);
        emptyError();
    }

    useEffect(() => {
        setFormData({
            name: !user.name ? '' : user.name,
            email: !user.email ? '' : user.email,
            mobile: !user.mobile ? '' : user.mobile
        });
    }, [user.name, user.email, user.mobile]);

    const {name, email, mobile} = formData;
    const {password, newPassword, confirmPassword} = passwordFormData;

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

    const passwordOnChange = e => {
        setPasswordFormData({...passwordFormData, [e.target.name]: e.target.value});
    };

    const onSubmitPassword = e => {
        e.preventDefault();

        // Check Confirm Password
        if (confirmPassword !== '') {
            if (newPassword !== confirmPassword) {
                NotificationManager.error("New Password and Confirm Password did not matched!", 'Confirmation Error!', 3000);
                return false;
            } else {
                const data = {
                    email: email,
                    password: password,
                    newPassword: newPassword
                };

                updatePassword(data);
                setPasswordFormData({
                    password: '',
                    newPassword: '',
                    confirmPassword: ''
                });
            }
        }
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
                                <Form onSubmit={onSubmitPassword}>
                                    <Form.Row>
                                        <Form.Group controlId="formGridCurrentPass"
                                                    className={'col-md-6 col-sm-12'}>
                                            <Form.Label>Current Password</Form.Label>
                                            <Form.Control type="password" name="password"
                                                          onChange={e => passwordOnChange(e)} value={password}
                                                          placeholder="Enter Current Password" required/>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group controlId="formGridNewPass"
                                                    className={'col-md-6 col-sm-12'}>
                                            <Form.Label>New Password</Form.Label>
                                            <Form.Control type="password" name="newPassword"
                                                          onChange={e => passwordOnChange(e)} value={newPassword}
                                                          placeholder="Enter New Password" required/>
                                        </Form.Group>
                                        <Form.Group controlId="formGridConfirmPass"
                                                    className={'col-md-6 col-sm-12'}>
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" name="confirmPassword"
                                                          onChange={e => passwordOnChange(e)} value={confirmPassword}
                                                          placeholder="Enter Confirm Password" required/>
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
    errors: Proptypes.object.isRequired,
    updateProfile: Proptypes.func.isRequired,
    updatePassword: Proptypes.func.isRequired,
    emptyError: Proptypes.func.isRequired,
    emptyMessage: Proptypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    errors: state.errors
});

const mapDispatchToProps = {updateProfile, updatePassword, emptyError, emptyMessage};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);