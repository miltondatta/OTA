import React, {Component} from 'react';
import DatePicker from "react-datepicker";


class OneWay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departure: new Date()
        };
    }

    render() {
        return (
            this.props.oneWay &&
            <div>
                <div className="col-md-4">
                    <div className="w50percent">
                        <div className="wh90percent textleft">
                            <span className="opensans size13"><b>Flying from</b></span>
                            <input type="text" className="form-control"
                                   placeholder="City or airport"/>
                        </div>
                    </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13"><b>Flying To</b></span>
                            <input type="text" className="form-control"
                                   placeholder="City or airport"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="w50percent">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13"><b>Departure</b></span>
                            <DatePicker className="form-control mySelectBoxclassName"
                                        selected={this.state.departure}
                                        onChange={date => this.setState({departure: date})}/>
                        </div>
                    </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13"><b>Class</b></span>
                            <select name="economy_class"
                                    className="form-control mySelectBoxclassName" id="">
                                <option value="1">Economy Class</option>
                                <option value="2">Business Class</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="room1">
                        <div className="wh33percent wh33percent_left_area">
                            <div className="wh90percent textleft">
                                <span className="opensans size13"><b>Adult</b></span>
                                <select className="form-control mySelectBoxclassName">
                                    <option>1</option>
                                    <option selected>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className="wh33percent wh33percent_left_area">
                            <div className="wh90percent textleft">
                                <span className="opensans size13"><b>Child</b></span>
                                <select className="form-control mySelectBoxclassName">
                                    <option>0</option>
                                    <option selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className="wh33percent wh33percent_right_area">
                            <div className="wh90percent textleft right">
                                <span className="opensans size13"><b>Infant</b></span>
                                <select className="form-control mySelectBoxclassName">
                                    <option selected>0</option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default OneWay;