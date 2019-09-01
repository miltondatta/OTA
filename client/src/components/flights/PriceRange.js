import React, {Component, Fragment} from 'react'
import InputRange from "react-input-range";
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
                <button type="button" className="collapsebtn" data-toggle="collapse" data-target="#collapse2">
                    Price range <span className="collapsearrow"></span>
                </button>

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
            </Fragment>
        )
    }
}


export default PriceRange;