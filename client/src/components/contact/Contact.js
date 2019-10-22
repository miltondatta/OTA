import React, {Component} from 'react';
import {Form, Button, Card} from "react-bootstrap";

// Css
import '../../assets/css/contact.css';

class Contact extends Component {
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
                                        <Form>
                                            <Form.Row>
                                                <Form.Group className="col-md-6"
                                                            controlId="formGridEmail">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Name" required/>
                                                </Form.Group>

                                                <Form.Group className="col-md-6 pr-0"
                                                            controlId="formGridPassword">
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Phone Number"
                                                                  required/>
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group className="col-md-6"
                                                            controlId="formGridEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" required/>
                                                </Form.Group>

                                                <Form.Group className="col-md-6 pr-0"
                                                            controlId="formGridPassword">
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Address" required/>
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
            </div>
        )
    }
}


export default Contact;