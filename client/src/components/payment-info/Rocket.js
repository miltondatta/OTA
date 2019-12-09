import React, {Fragment} from "react";
import {Button, ButtonToolbar, Form, Table} from "react-bootstrap";

const Rocket = () => {
    return <Fragment>
        <h6 className="p-0 font-weight-bold">Please do below Steps for Payment :</h6>
        <Table responsive bordered={true}>
            <tbody>
            <tr>
                <td>1</td>
                <td>Dial *322#</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Choose 1. Bill Pay</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Choose 1. Self</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Choose 0. Other</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Enter the Merchant Rocket Biller ID : 2513</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Enter Bill Number: 1234</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Enter the Amount (Tk.) : Tk</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Now enter your Rocket PIN</td>
            </tr>
            <tr>
                <td colSpan={2}><span className="font-weight-bold">Done!</span> You will receive a confirmation message from Rocket with Transaction ID.</td>
            </tr>
            </tbody>
        </Table>
        <Form>
            <Form.Group controlId="formTransactionID">
                <Form.Label>Please Enter Rocket Transaction ID</Form.Label>
                <Form.Control type="number" name="transaction_id" placeholder="Enter Transaction ID"/>
            </Form.Group>

            <ButtonToolbar className="pt-3">
                <Button variant="outline-success" type="submit">Pay Now</Button>
            </ButtonToolbar>
        </Form>
    </Fragment>;
};

export default Rocket;