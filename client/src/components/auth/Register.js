import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {Button, Card, Form} from "react-bootstrap";
import {NotificationContainer, NotificationManager} from 'react-notifications';

// Css
import '../../assets/css/register.css';

// Redux
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile: '',
            password: '',

            password2: '',
            errors: {},
            pass_match: true
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    createNotification = (type, errors) => {
        if(errors.msg) {
            switch (type) {
                case 'error':
                    NotificationManager.error(errors.msg, 'Registration Error!', 3000);
                    break;
                default:
                    return;
            }
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
            this.createNotification('error', nextProps.errors);
        }
    } 


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    onSubmit(e) {
        e.preventDefault();

        // Check Confirm Password
        if (this.state.password2 !== '') {
            const password = this.state.password;
            const password2 = this.state.password2;
            if (password !== password2) {
                this.setState({pass_match: false});
                return;
            }
            if (password === password2) this.setState({pass_match: true});
        }

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            password: this.state.password,
            password2: this.state.password2,
        };

        this.props.registerUser(newUser, this.props.history);
    }


    render() {
        const password_matched = this.state.pass_match ? '' : 'password_not_matched';
        return (
            <div className="register-area">
                <div className="register-overlay">
                    <div className="container register-area-container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <Card>
                                    <Card.Header>
                                        <h3>Register</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form onSubmit={this.onSubmit}>
                                            <Form.Row>
                                                <Form.Group className="col-md-12"
                                                            controlId="formGridEmail">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" name={'name'} value={this.state.name}
                                                                  onChange={this.onChange} placeholder="Enter Name"
                                                                  required/>
                                                </Form.Group>

                                                <Form.Group className="col-md-12"
                                                            controlId="formGridEmail">
                                                    <Form.Label>Email Address</Form.Label>
                                                    <Form.Control type="text" name={'email'} value={this.state.email}
                                                                  onChange={this.onChange} placeholder="Enter Email"
                                                                  required/>
                                                </Form.Group>

                                                <Form.Group className="col-md-12"
                                                            controlId="formGridEmail">
                                                    <Form.Label>Mobile Number</Form.Label>
                                                    <Form.Control type="text" name={'mobile'} value={this.state.mobile}
                                                                  onChange={this.onChange}
                                                                  maxLength="11"
                                                                  placeholder="Enter Mobile Number"
                                                                  required/>
                                                </Form.Group>

                                                <Form.Group className="col-md-12"
                                                            controlId="formGridPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" name={'password'}
                                                                  value={this.state.password} onChange={this.onChange}
                                                                  placeholder="Enter Password" required/>
                                                </Form.Group>

                                                <Form.Group className="col-md-12"
                                                            controlId="formGridPassword">
                                                    <Form.Label>Confirm Password</Form.Label>
                                                    <Form.Control type="password" className={`${password_matched}`}
                                                                  name={'password2'}
                                                                  value={this.state.password2} onChange={this.onChange}
                                                                  placeholder="Enter Confirm Password" required/>
                                                    {!this.state.pass_match &&
                                                    <span style={{color: 'red', fontSize: '12px'}}>Confirm password did not matched with password!</span>
                                                    }
                                                </Form.Group>
                                            </Form.Row>

                                            <Button variant="info" type="submit">
                                                Submit
                                            </Button>

                                            <p className={'pb-0 mb-0 pt-2'}>Already a member? <Link
                                                to={'/login'}>
                                                Sign In
                                            </Link></p>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <NotificationContainer/>
            </div>
        )
    }
}


Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

const mapDispatchToProps = {registerUser};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));