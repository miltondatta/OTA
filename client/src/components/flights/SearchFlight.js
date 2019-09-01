import React, {Component} from 'react'
import DatePicker from "react-datepicker";

class SearchFlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departure: new Date(),
            return: new Date()
        };
    }

    render() {
        return (
            <div className="hotelstab2">
                <div className="wh100percent">
                    <div className="wh100percent textleft">
                        <span className="opensans size13">Flying from</span>
                        <input type="text" className="form-control" placeholder="City or airport"/>
                    </div>
                </div>

                <div className="wh100percent">
                    <div className="wh100percent textleft">
                        <span className="opensans size13">Flying To</span>
                        <input type="text" className="form-control" placeholder="City or airport"/>
                    </div>
                </div>
                <div className="clearfix pbottom15"> </div>
                <div className="w50percent">
                    <div className="wh90percent textleft">
                        <span className="opensans size13">Departure</span>
                        <DatePicker className="form-control mySelectBoxclassName"
                                    selected={this.state.departure}
                                    onChange={date => this.setState({departure: date})}/>
                    </div>
                </div>
                {this.props.roundTrip &&
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13">Return</span>
                            <DatePicker className="form-control mySelectBoxclassName"
                                        selected={this.state.return}
                                        onChange={date => this.setState({return: date})}/>
                        </div>
                    </div>
                }
                {this.props.oneWay &&
                <div className="w50percentlast">
                    <div className="wh90percent textleft right">
                        <span className="opensans size13">Class</span>
                        <select name="economy_class" className="form-control mySelectBoxclassName">
                            <option value="1">Economy Class</option>
                            <option value="2">Business Class</option>
                        </select>
                    </div>
                </div>
                }
                {this.props.roundTrip &&
                <div className="w50percent marginTop5">
                    <div className="wh90percent textleft">
                        <span className="opensans size13">Departure</span>
                        <select name="economy_class" className="form-control mySelectBoxclassName">
                            <option value="1">Economy Class</option>
                            <option value="2">Business Class</option>
                        </select>
                    </div>
                </div>
                }
                <div className="clearfix pbottom15"> </div>
                <div className="room1">
                    <div className="w50percent">
                        <div className="wh90percent textleft">
                            <span className="opensans size13">Adult</span>
                            <select className="form-control mySelectBoxClass">
                                <option>1</option>
                                <option selected>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13">Child</span>
                            <select className="form-control mySelectBoxClass">
                                <option>0</option>
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="clearfix"> </div>
                <br/>
                <div className="room1">
                    <div className="w50percent">
                        <div className="wh90percent textleft">
                            <span className="opensans size13">Child</span>
                            <select className="form-control mySelectBoxClass">
                                <option selected>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <button type="submit" className="btn-search3">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SearchFlight;