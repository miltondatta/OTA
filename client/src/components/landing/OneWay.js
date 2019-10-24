import React, {Component} from 'react';
import DatePicker from 'react-datepicker2';
import axios from 'axios';
import moment from 'moment';

// Component
import AirAutocomplete from './AirAutocomplete';


class OneWay extends Component {
    constructor(props) {
        super(props);
        this.handleOriginData = this.handleOriginData.bind(this);
        this.handleDestinationData = this.handleDestinationData.bind(this);
        this.state = {
            departure: moment(),
            origin: '',
            destination: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleOriginData(data) {
        this.setState({
            origin: data
        });
    }

    handleDestinationData(data) {
        this.setState({
            destination: data
        });
    }


    onSubmit(e) {
        e.preventDefault();
        let org = this.state.origin;
        let des = this.state.destination;
        let userParams = 'origin=' + org.split(",")[0] + '&destination=' + des.split(",")[0] + '&departure=' + moment(this.state.departure).format('YYYY-MM-DD');

        axios
            .get('api/amadeus/flight_offers?' + userParams)
            .then(res => {
                console.log(res);
            })
            .catch(err =>
                console.log("Error: " + err)
            );
    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
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
                </div>

                <div className="row pt-2">
                    <div className="col-xs-6 col-lg-4">
                        <label htmlFor="adult" className={'d-block mb-1'}><b>Adult</b></label>
                        <select className="form-control" name={'adult'} id={'adult'}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div className="col-xs-6 col-lg-4 mobile-input">
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

                    <div className="col-xs-6 col-lg-4 mobile-input">
                        <label htmlFor="infant" className={'d-block mb-1'}><b>Infant</b></label>
                        <select className="form-control" name={'infant'} id={'infant'}>
                            <option>0</option>
                            <option>1</option>
                        </select>
                    </div>
                </div>

                <div className="row pt-2">
                    <div className="col-xs-6 col-lg-4">
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
        )
    }

}

export default OneWay;