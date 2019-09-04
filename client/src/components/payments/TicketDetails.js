import React, {Fragment} from 'react';
import {Accordion} from "react-bootstrap";

class TicketDetails extends React.Component {
    render() {
        return (
            <Fragment>
                <Accordion defaultActiveKey="0">
                    <div>
                        Traveler 1: Adult <span className="right bold green">$787.25</span>
                        <Accordion.Toggle eventKey="0" className="collapsebtn3 collapsed mt-5">
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <div id="collapse1" className="collapse in">
                                <div className="left size14">
                                    Flight<br/>
                                    Taxes & Fees
                                </div>
                                <div className="right size14">
                                    $458.00<br/>
                                    $329.25
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </Accordion.Collapse>
                        <div className="mt10"></div>
                    </div>
                    <div className="fdash mt10"></div>
                    <br/>
                    <div>
                        Traveler 1: Adult <span className="right bold green">$787.25</span>
                        <Accordion.Toggle className="collapsebtn3 collapsed mt-5" eventKey="1">
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <div id="collapse1" className="collapse in">
                                <div className="left size14">
                                    Flight<br/>
                                    Taxes & Fees
                                </div>
                                <div className="right size14">
                                    $458.00<br/>
                                    $329.25
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </Accordion.Collapse>
                        <div className="mt10"></div>
                    </div>
                </Accordion>
            </Fragment>
        )
    }
}

export default TicketDetails;
