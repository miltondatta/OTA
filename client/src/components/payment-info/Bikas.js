import React, {Fragment} from "react";
import {Table, Form, Button, ButtonToolbar} from "react-bootstrap";

const Bkash = () => {
    return <Fragment>
        <Table responsive bordered={true}>
            <tbody>
            <tr>
                <td>ID</td>
                <td>4657684564</td>
            </tr>
            <tr>
                <td>NAME</td>
                <td>Plabon Joseph Costa</td>
            </tr>
            <tr>
                <td>MOBILE</td>
                <td>01554587874</td>
            </tr>
            <tr>
                <td>EMAIL</td>
                <td>costa@pentabd.com</td>
            </tr>
            </tbody>
        </Table>
        <Form>
            <Form.Group controlId="formReceiveAmount">
                <Form.Label>Receivable Amount</Form.Label>
                <Form.Control type="number" name="receive_amount" placeholder="Enter Receivable Amount"/>
            </Form.Group>

            <Form.Group controlId="formPaymentAmount">
                <Form.Label>Payment Amount</Form.Label>
                <Form.Control type="number" name="payment_amount" placeholder="Enter Payment Amount"/>
            </Form.Group>

            <ButtonToolbar className="pt-3">
                <Button variant="outline-success" type="submit">Pay Now</Button>
            </ButtonToolbar>
        </Form>
    </Fragment>;
};

export default Bkash;