import React, {Component, Fragment} from 'react';
import DatePicker from 'react-datepicker2';
import moment from 'moment';
import AirAutocomplete from "./AirAutocomplete";

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
            <Fragment>
                <form>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-lg-4">
                            <label className={'d-block mb-1'}><b>Flying from</b></label>
                            <AirAutocomplete
                                handlerFromParant={this.handleOriginData}/>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-lg-4">
                            <label className={'d-block mb-1'}><b>Flying to</b></label>
                            <AirAutocomplete
                                handlerFromParant={this.handleDestinationData}
                            />
                        </div>

                        <div className="col-xs-6 col-lg-4 mobile-input">
                            <label htmlFor="departure" className={'d-block mb-1'}><b>Departure</b></label>
                            <DatePicker timePicker={false}
                                        name={'departure'}
                                        id={'departure'}
                                        className="form-control"
                                        inputFormat="DD/MM/YYYY"
                                        onChange={date => this.setState({departure: date})}
                                        value={this.state.departure}/>
                        </div>

                        <div className="col-xs-6 col-lg-4 py-2">
                            <label htmlFor="return" className={'d-block mb-1'}><b>Return</b></label>
                            <DatePicker timePicker={false}
                                        className="form-control"
                                        id={'return'}
                                        name={'return'}
                                        inputFormat="DD/MM/YYYY"
                                        onChange={date => this.setState({return: date})}
                                        value={this.state.return}/>
                        </div>

                        <div className="col-xs-6 col-lg-4 py-2">
                            <label htmlFor="adult" className={'d-block mb-1'}><b>Adult</b></label>
                            <select className="form-control" name={'adult'} id={'adult'}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div className="col-xs-6 col-lg-4 py-2">
                            <label htmlFor="child" className={'d-block mb-1'}><b>Child</b></label>
                            <select className="form-control" name={'child'} id={'child'}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div className="col-xs-6 col-lg-4">
                            <label htmlFor="infant" className={'d-block mb-1'}><b>Infant</b></label>
                            <select className="form-control" name={'infant'} id={'infant'}>
                                <option>0</option>
                                <option>1</option>
                            </select>
                        </div>

                        <div className="col-xs-6 col-lg-4 mobile-input">
                            <label htmlFor="class" className={'d-block mb-1'}><b>Class</b></label>
                            <select className="form-control" name={'class'} id={'class'}>
                                <option>Business Class</option>
                                <option>Economic Class</option>
                            </select>
                        </div>

                        <div className="col-xs-6 col-lg-4 pt-2">
                            <button type="submit" className="btn btn-info" style={{marginTop: '20px'}}>Search
                            </button>
                        </div>
                    </div>
                </form>
            </Fragment>
        )
    }

}

export default RoundTrip;