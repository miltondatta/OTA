import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";

// Date Picker
import DatePicker from 'react-datepicker2';
import moment from 'moment';

// Css
import '../../assets/css/flight-payment.css';

// Component

class FlightPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateOfBirth: moment(),
        };
    }

    render() {
        return (
            <div className="flight-payment-area">
                <div className="container flight-payment-area-container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="flight-payment-form">
                                <div className="flight-payment-header">
                                    <p>Passenger Information : Adult</p>
                                </div>
                                <Form>
                                    <Form.Row>
                                        <Form.Group className="col-md-6"
                                                    controlId="formGridFirstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text" name="first_name" placeholder="Enter First Name" required/>
                                        </Form.Group>

                                        <Form.Group className="col-md-6"
                                                    controlId="formGridLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" name="last_name" placeholder="Enter Last Name" required/>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group className="col-md-6"
                                                    controlId="formGridEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" name="email" placeholder="Enter email" required/>
                                        </Form.Group>

                                        <Form.Group className="col-md-6"
                                                    controlId="formGridPhoneNumber">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" name="mobile" placeholder="Enter Phone Number" required/>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <div className="col-md-6">
                                            <label>Gender</label>
                                            <div className="d-flex">
                                                <Form.Check
                                                    custom
                                                    type={'radio'} name={'gender'}
                                                    className="pr-2"
                                                    label={`Male`}
                                                />
                                                <Form.Check
                                                    custom
                                                    type={'radio'} name={'gender'}
                                                    label={`Female`}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="dateOfBirth">Date Of Birth</label>
                                            <DatePicker timePicker={false}
                                                        name={'dateOfBirth'}
                                                        id={'dateOfBirth'}
                                                        className="form-control"
                                                        inputFormat="DD/MM/YYYY"
                                                        onChange={date => this.setState({dateOfBirth: date})}
                                                        value={this.state.dateOfBirth}/>
                                        </div>
                                    </Form.Row>
                                </Form>
                            </div>
                        </div>
                        <div className="col-md-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda cupiditate enim libero
                            maiores neque obcaecati quos? Aspernatur atque ipsam nisi officiis placeat quidem, similique
                            suscipit unde? Autem, nulla recusandae!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae blanditiis consequuntur
                            corporis dicta, modi mollitia nam quis repellat voluptatem. Assumenda blanditiis commodi
                            corporis cumque doloremque earum eligendi esse et exercitationem expedita ipsam maiores
                            minus mollitia natus nemo neque nostrum possimus quas quibusdam repellendus rerum tempora ut
                            veniam, veritatis voluptas? Ab, blanditiis consequatur delectus dolore doloremque dolores
                            eligendi enim excepturi explicabo facere hic impedit in incidunt ipsa pariatur quasi
                            recusandae repellendus tenetur totam voluptates. Amet assumenda atque cumque explicabo
                            inventore laudantium minima, natus perferendis, praesentium rem sapiente vitae, voluptas!
                            Aliquid, amet aperiam cupiditate dolorem ducimus error ex ipsa nisi quam sed, tenetur veniam
                            voluptate. Adipisci consectetur corporis debitis dolor ea earum esse, ex excepturi expedita
                            facilis fugit harum illum in labore laudantium libero maxime modi molestias neque pariatur
                            perferendis quas qui quis quod quos recusandae repudiandae sed similique sit suscipit
                            temporibus tenetur ut vero! Accusantium adipisci culpa cumque earum error explicabo, facilis
                            hic, inventore libero nesciunt optio quaerat quibusdam repellat repellendus temporibus
                            veniam veritatis voluptate, voluptates. Dolores eius enim in suscipit vitae. Iste itaque
                            laborum magnam modi, optio porro quas quibusdam quis recusandae sunt velit voluptate. A
                            accusantium ad amet aperiam commodi deleniti deserunt distinctio eaque eligendi enim eum
                            eveniet expedita fuga impedit ipsa ipsam ipsum non nulla porro qui recusandae reiciendis
                            sequi similique sint tempore temporibus veritatis vero vitae voluptate, voluptatibus. Ab
                            aliquid animi atque blanditiis culpa ducimus, ea, eaque eveniet in incidunt itaque molestiae
                            nesciunt nobis reprehenderit sit suscipit totam ullam vel veritatis vitae. Animi corporis
                            hic laudantium saepe ut voluptates. Consequatur cupiditate eius error excepturi incidunt
                            iste molestiae nostrum, officiis provident quaerat, recusandae sit, soluta suscipit
                            veritatis vitae. Commodi dolorum, ducimus in laborum nihil quae quis similique voluptates.
                            Aliquid animi assumenda dolor dolore ducimus error eveniet excepturi id, illo in maiores
                            mollitia nam nesciunt nobis officiis possimus reprehenderit suscipit temporibus tenetur
                            totam? Animi assumenda blanditiis culpa debitis deleniti illo maxime minus necessitatibus
                            non voluptates. Aliquam aliquid architecto assumenda autem beatae blanditiis commodi
                            cupiditate dolor dolores eligendi, eos est excepturi explicabo fugit in iure iusto minima
                            molestiae nam natus nesciunt nostrum nulla obcaecati optio pariatur perferendis possimus
                            qui, tempore temporibus tenetur unde ut vero voluptatum! Alias magnam nihil quis sunt.
                            Architecto aspernatur, at dolorum eum illum nulla odit officia omnis quam voluptates.
                            Accusamus alias amet aut commodi debitis dolor est hic inventore obcaecati, perferendis
                            possimus quas, qui repellat saepe similique sint temporibus tenetur velit veniam vitae. Eum,
                            voluptatibus.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default FlightPayment;
