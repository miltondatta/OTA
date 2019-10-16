import React, {Component, Fragment} from 'react';
import {Accordion, Button} from "react-bootstrap";

class Connection extends Component {
    render() {
        return (
            <Fragment>
                <Accordion>
                    <Accordion.Toggle as={Button} className="collapsebtn last" eventKey="0">
                        Connection <span className="collapsearrow"></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <div id="collapse5" className="collapse in">
                            <div className="hpadding20">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/>Offers without connection (13)
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/>Offers with connection (88)
                                    </label>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </Accordion.Collapse>
                </Accordion>
            </Fragment>
        )
    }
}


export default Connection;