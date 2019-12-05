import React, {Fragment} from 'react';
import {Button, ButtonToolbar, Form} from "react-bootstrap";

const Bank = () => {
    return <Fragment>
        <Form>
            <Form.Group controlId="formBankList">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control as="select" name="bank_name">
                    <option value={0}>Select Bank</option>
                    <option value="CDA AVENUE BRANCH|01833001423">BANK ASIA LIMITED</option>
                    <option value="AGRABAD BRANCH|1101103706143001">BRAC BANK LIMITED</option>
                    <option value="AGRABAD BRANCH|1021200004203">DUTCH BANGLA BANK LIMITED</option>
                    <option value="AGRABAD BRANCH|0011360992944">EASTERN BANK LIMITED</option>
                    <option value="JUBILEE ROAD BRANCH|0233000000475">ONE BANK LIMITED</option>
                    <option value="GEC MORE BRANCH|0421360001042">SOCIAL ISLAMI BANK LTD</option>
                    <option value="EPZ BRANCH|02936000142">STANDARD BANK LIMITED</option>
                    <option value="AGRABAD BRANCH|1401891752001">THE CITY BANK LIMITED</option>
                    <option value="DEWAN BAZAR BRANCH|00680210002316">TRUST BANK LIMITED</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBranchList">
                <Form.Label>Branch Name</Form.Label>
                <Form.Control as="select" name="branch_name">
                    <option value={0}>Select Branch</option>
                    <option value="gulsan_2">Gulsan 2</option>
                    <option value="motijheel">Motijheel</option>
                    <option value="mohakhali">Mohakhali</option>
                    <option value="mohammadpur">Mohammadpur</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formAccountNumber">
                <Form.Label>Bank Account Number</Form.Label>
                <Form.Control type="number" name="account_number" placeholder="Enter Account Number"/>
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

export default Bank;