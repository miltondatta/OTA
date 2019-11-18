import React, {Component} from 'react';
import {Form, Button, Card} from "react-bootstrap";
import PropTypes from 'prop-types';
import {NotificationContainer, NotificationManager} from 'react-notifications';

// Css
import '../../assets/css/contact.css';

// Redux
import {contactUserData} from "../../actions/contactActions";
import {connect} from 'react-redux';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            address: '',
            description: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const {name, phone, email, address, description} = this.state;
        const newContact = {
            name: name,
            phone: phone,
            email: email,
            address: address,
            description: description
        };

        this.props.contactUserData(newContact);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps.contact.msgs);
        if (nextProps.contact.msgs.msg) {
            NotificationManager.success(nextProps.contact.msgs.msg, 'Contact Message!', 3000);
            this.setState({
                name: '',
                phone: '',
                email: '',
                address: '',
                description: ''
            });
        }
    }

    render() {
        return (
            <div className="contact-area">
                <div className="contact-overlay">
                    <div className="container contact-area-container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <Card>
                                    <Card.Header>
                                        <h3>Contact Us</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form onSubmit={this.onSubmit}>
                                            <Form.Row>
                                                <Form.Group className="col-md-6"
                                                            controlId="formGridName">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" name="name" value={this.state.name}
                                                                  onChange={this.onChange} placeholder="Enter Name"
                                                                  required/>
                                                </Form.Group>

                                                <Form.Group className="col-md-6 pr-0"
                                                            controlId="formGridPhone">
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control type="text" name="phone" value={this.state.phone}
                                                                  onChange={this.onChange}
                                                                  placeholder="Enter Phone Number" required/>
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group className="col-md-6"
                                                            controlId="formGridEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" name="email" value={this.state.email}
                                                                  onChange={this.onChange} placeholder="Enter email"
                                                                  required/>
                                                </Form.Group>

                                                <Form.Group className="col-md-6 pr-0"
                                                            controlId="formGridAddress">
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control type="text" name="address" value={this.state.address}
                                                                  onChange={this.onChange} placeholder="Enter Address"
                                                                  required/>
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group className="col-md-12"
                                                            controlId="formGridDescription">
                                                    <Form.Label>Description</Form.Label>
                                                    <Form.Control as="textarea" value={this.state.description}
                                                                  onChange={this.onChange} name="description" rows="3"/>
                                                </Form.Group>
                                            </Form.Row>

                                            <Button variant="info" type="submit">
                                                Submit
                                            </Button>
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

Contact.propTypes = {
    contactUserData: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    contact: state.contact
});

const mapDispatchToProps = {contactUserData};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);