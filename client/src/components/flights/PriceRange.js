import React, {Component, Fragment} from 'react';
import InputRange from "react-input-range";
import {Accordion, Button} from "react-bootstrap";
import 'react-input-range/lib/css/index.css';

class PriceRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {min: 1, max: 100},
        };
    }

    render() {
        return (
            <Fragment>
                <Accordion>
                    <Accordion.Toggle as={Button} className="collapsebtn" eventKey={0}>
                        Price range <span className="collapsearrow"></span>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey={0}>
                        <div id="collapse2" className="collapse in">
                            <div className="padding20">
                                <div className="layout-slider wh100percent">
                            <span className="cstyle09">
                                <InputRange
                                    maxValue={1000}
                                    minValue={0}
                                    value={this.state.value}
                                    onChange={value => this.setState({value})}/>
                            </span>
                                </div>
                            </div>
                        </div>
                    </Accordion.Collapse>
                </Accordion>
            </Fragment>
        )
    }
}


export default PriceRange;