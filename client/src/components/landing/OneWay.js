import React, {Component} from 'react';
import DatePicker from 'react-datepicker2';
import axios from 'axios';
import moment from 'moment';
import { shopApi } from '../../utils/Urls';


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
            destination: '',
            adult: 0,
            child: 0,
            infant: 0,
            class: 'Business'
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleSelectionChanged = this.handleSelectionChanged.bind(this);
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

        //let userParams = 'origin=' + org.split(",")[0] + '&destination=' + des.split(",")[0] + '&departure=' + moment(this.state.departure).format('YYYY-MM-DD');
        let searchParams = {
            from: org.split(",")[0],
            to: des.split(",")[0],
            departureDate: moment(this.state.departure).format('YYYY-MM-DD'),
            ADT: this.state.adult,
            CNN: this.state.child,
            INF: this.state.infant,
            cabins: this.state.class 
        };

        console.log(searchParams);
        
        axios
            .post(shopApi, searchParams)
            .then(res => {
                console.log(res.data);
            })
            .catch(err =>
                console.log("Error: " + err)
            );  
    }

    handleSelectionChanged(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
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
                                    onChange={departure => this.setState({departure: departure})}
                                    value={this.state.departure}/>
                    </div>
                </div>

                <div className="row pt-2">
                    <div className="col-xs-6 col-lg-4">
                        <label htmlFor="adult" className={'d-block mb-1'}><b>Adult</b></label>
                        <select className="form-control" name={'adult'} id={'adult'} value={this.state.adult} onChange={this.handleSelectionChanged}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div className="col-xs-6 col-lg-4 mobile-input">
                        <label htmlFor="child" className={'d-block mb-1'}><b>Child</b></label>
                        <select className="form-control" name={'child'} id={'child'} value={this.state.child} onChange={this.handleSelectionChanged}>
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
                        <select className="form-control" name={'infant'} id={'infant'} value={this.state.infant} onChange={this.handleSelectionChanged}>
                            <option>0</option>
                            <option>1</option>
                        </select>
                    </div>
                </div>

                <div className="row pt-2">
                    <div className="col-xs-6 col-lg-4">
                        <label htmlFor="class" className={'d-block mb-1'}><b>Class</b></label>
                        <select className="form-control" name={'class'} id={'class'} value={this.state.class} onChange={this.handleSelectionChanged}>
                            <option value="Business">Business Class</option>
                            <option value="Economy">Economic Class</option>
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