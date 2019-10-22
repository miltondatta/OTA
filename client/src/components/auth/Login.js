import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Alert, Button, Card, Form} from "react-bootstrap";

// Redux
import {loginUser} from '../../actions/authActions';
import {connect} from 'react-redux';

// Css
import '../../assets/css/register.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
        }

        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

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
                <div className="container login-area-container">
                    {this.state.errors.msg &&
                    <div className="row" style={{paddingTop: '30px'}}>
                        <div className="offset-md-2 col-md-8">
                            <Alert variant={'danger'}>
                                {this.state.errors.msg}
                            </Alert>
                        </div>
                    </div>
                    }
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
                                                <Form.Label htmlFor={'email'}>Email Address</Form.Label>
                                                <Form.Control type="text" name={'email'} id={'email'} value={this.state.email}
                                                              onChange={this.onChange} placeholder="Enter Email"
                                                              required/>
                                            </Form.Group>

                                            <Form.Group className="col-md-12 pr-0"
                                                        controlId="formGridPassword">
                                                <Form.Label htmlFor={'password'}>Phone</Form.Label>
                                                <Form.Control type="password" name={'password'} id={'password'}
                                                              value={this.state.password} onChange={this.onChange}
                                                              placeholder="Enter Phone Number" required/>
                                            </Form.Group>
                                        </Form.Row>

                                        <Button className={'login-button'} variant="info" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
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

const mapDispatchTopProps = {loginUser};
export default connect(mapStateToProps, mapDispatchTopProps)(Login);
