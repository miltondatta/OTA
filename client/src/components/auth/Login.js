import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Form} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

// Redux
import {loginUser} from '../../actions/authActions';
import {connect} from 'react-redux';

// Css
import '../../assets/css/register.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }

        if (localStorage.registration_success) {
            NotificationManager.success(localStorage.registration_success, 'Registration Successfull!', 3000);
            localStorage.removeItem('registration_success');
        }
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
        } else {
            if (nextProps.errors) {
                this.setState({errors: nextProps.errors});
                this.createNotification('error', nextProps.errors);
            }
        }

    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    createNotification = (type, errors) => {
        if(errors.msg) {
            switch (type) {
                case 'error':
                    NotificationManager.error(errors.msg, 'Login Error!', 3000);
                    break;
                default:
                    return;
            }
        }
    };

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    }


    render() {
        return (
            <div className="login-area">
                <div className="login-overlay">
                    <div className="container login-area-container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <Card>
                                    <Card.Header>
                                        <h3>Login</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form onSubmit={this.onSubmit}>
                                            <Form.Row>
                                                <Form.Group className="col-md-12"
                                                            controlId="formGridEmail">
                                                    <Form.Label>Email Address</Form.Label>
                                                    <Form.Control type="text" name={'email'} value={this.state.email}
                                                                  onChange={this.onChange} placeholder="Enter Email"
                                                                  required/>
                                                </Form.Group>

                                                <Form.Group className="col-md-12"
                                                            controlId="formGridPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" name={'password'}
                                                                  value={this.state.password} onChange={this.onChange}
                                                                  placeholder="Enter Password" required/>
                                                </Form.Group>
                                            </Form.Row>

                                            <Button variant="info" type="submit">
                                                Submit
                                            </Button>
                                            <p className={'pb-0 mb-0 pt-2'}>Not a member yet? <Link
                                                to={'/register'}>
                                                Join now
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


Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

const mapDispatchToProps = {loginUser};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
