import React, {Component, Fragment} from 'react';
import {Accordion, Button} from "react-bootstrap";

class Airlines extends Component {
    render() {
        return (
            <Fragment>
                <Accordion>
                    <Accordion.Toggle as={Button} className="collapsebtn last" eventKey={0}>
                        Airlines <span className="collapsearrow"> </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={0}>
                        <div id="collapse3" className="collapse in">
                            <div className="hpadding20">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/>Qatar Airways (6)
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/>Emirates (11)
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/>Olympic (15)
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/>Wizz(15)
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/>Tarom
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


export default Airlines;