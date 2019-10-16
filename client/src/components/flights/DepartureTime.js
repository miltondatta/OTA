import React, {Component, Fragment} from 'react';
import {Accordion, Button} from "react-bootstrap";

class DepartureTime extends Component {
    render() {
        return (
            <Fragment>
                <Accordion>
                    <Accordion.Toggle as={Button} className="collapsebtn last" eventKey={0}>
                        Departure time <span className="collapsearrow"> </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={0}>
                        <div id="collapse4" className="collapse in">
                            <div className="hpadding20">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/>Morning (5:00a - 11:59a)
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/>Afternoon (12:00p - 5:59p)
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/>Evening (6:00p - 11:59p)
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


export default DepartureTime;