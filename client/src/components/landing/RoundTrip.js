import React, {Component, Fragment} from 'react';
import DatePicker from 'react-datepicker2';
import moment from 'moment';

class RoundTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departure: moment(),
            return: moment()
        };
    }

    render() {
        return (
            this.props.roundTrip &&
            <Fragment>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-lg-4">
                        <span className="opensans size13"><b>Flying from</b></span>
                        <input type="text" className="form-control"
                               placeholder="City or airport"/>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-lg-4">
                        <span className="opensans size13"><b>Flying to</b></span>
                        <input type="text" className="form-control"
                               placeholder="City or airport"/>
                    </div>

                    <div className="col-xs-6 col-lg-4">
                        <span className="opensans size13"><b>Departure</b></span>
                        <DatePicker timePicker={false}
                                    className="form-control"
                                    inputFormat="DD/MM/YYYY"
                                    onChange={date => this.setState({departure: date})}
                                    value={this.state.departure}/>
                    </div>

                    <div className="col-xs-6 col-lg-4">
                        <span className="opensans size13"><b>Return</b></span>
                        <DatePicker timePicker={false}
                                    className="form-control"
                                    inputFormat="DD/MM/YYYY"
                                    onChange={date => this.setState({ return: date })}
                                    value={this.state.return} />
                    </div>

                    <div className="col-xs-6 col-lg-4">
                        <span className="opensans size13"><b>Adult</b></span>
                        <select className="form-control mySelectBoxclassName" value={this.state.adult}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div className="col-xs-6 col-lg-4">
                        <span className="opensans size13"><b>Child</b></span>
                        <select className="form-control mySelectBoxclassName">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div className="col-xs-6 col-lg-4">
                        <span className="opensans size13"><b>Infant</b></span>
                        <select className="form-control mySelectBoxclassName">
                            <option>0</option>
                            <option>1</option>
                        </select>
                    </div>

                    <div className="col-xs-6 col-lg-4">
                        <span className="opensans size13"><b>Class</b></span>
                        <select className="form-control mySelectBoxclassName">
                            <option>Bussiness Class</option>
                            <option>Economic Class</option>
                        </select>
                    </div>

                    <div className="col-md-12">
                        <button type="submit" className="btn-search right mr30" style={{marginTop: '20px'}}>Search
                        </button>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default RoundTrip;