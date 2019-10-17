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
            destination: '',
            adult: '1',
            child: '',
            infant: ''
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
            this.props.oneWay &&
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-lg-4">
                            <span className="opensans size13"><b>Flying from</b></span>
                            <AirAutocomplete
                                name={'origin'}
                                handlerFromParant={this.handleOriginData}
                            />
                        </div>

                        <div className="col-xs-12 col-sm-6 col-lg-4">
                            <span className="opensans size13"><b>Flying to</b></span>
                            <AirAutocomplete
                                name={'destination'}
                                handlerFromParant={this.handleDestinationData}
                            />
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
                </form>
            </div>
        )
    }

}

export default OneWay;