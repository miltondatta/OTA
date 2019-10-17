import React, {Component} from 'react';
import {Form, Button, Card} from "react-bootstrap";

// Css
import '../../assets/css/contact.css';


class Contact extends Component {
    render() {
        return (
            <div className="contact-area">
                <div className="container contact-area-container">
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
                                        <Form.Control type="text" placeholder="Enter Name"/>
                                    </Form.Group>

                                    <Form.Group className="col-md-6 pr-0"
                                                controlId="formGridPassword">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Phone Number"/>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group className="col-md-6"
                                                controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email"/>
                                    </Form.Group>

                                    <Form.Group className="col-md-6 pr-0"
                                                controlId="formGridPassword">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Address"/>
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
        )
    }
}


export default Contact;