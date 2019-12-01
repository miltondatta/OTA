import React, {Component, Fragment} from 'react';
import DatePicker from 'react-datepicker2';
import moment from 'moment';
import AirAutocomplete from "./AirAutocomplete";
import {Button, Card} from "react-bootstrap";
import {faPlusCircle, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class MultiCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addCity: {
                from: '',
                to: '',
                departureDate: moment()
            },
            multiCity: [
                {
                    from: '',
                    to: '',
                    departureDate: moment()
                },
                {
                    from: '',
                    to: '',
                    departureDate: moment()
                }
            ]
        };

        this.addMultiCity = this.addMultiCity.bind(this);
        this.removeCity = this.removeCity.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    addMultiCity(e) {
        e.preventDefault();
        const addCity = ([...this.state.multiCity, this.state.addCity]);
        this.setState({
            multiCity: addCity
        });
    }

    removeCity(e, key) {
        e.preventDefault();
        this.state.multiCity.splice(key, 1);
        const multiCity = this.state.multiCity;
            this.setState({
            multiCity: multiCity
        });
    }

    onChange(e, key, input_name) {
        if (e.target) {
            const {name, value} = e.target;
            this.setState(this.state.multiCity.map((el, index) => (index === key ? Object.assign({}, el, {[name]: value}) : el)));
        } else {
            const updateDate = this.state.multiCity.map((value, index) => {
                const returnValue = {...value};

                if (index === key) {
                    returnValue.departureDate = e;
                }
                return returnValue;
            });

            this.setState({
                multiCity: updateDate
            });
        }
    }

    render() {
        return (
            <Fragment>
                <form>
                    {this.state.multiCity.length > 0 && this.state.multiCity.map((value, key) => (
                        <Fragment key={key}>
                            <div className="row" style={key > 0 ? {'paddingTop': 8} : {}}>
                                <div className="col-xs-12 col-sm-6 col-lg-4">
                                    {key === 0 &&
                                    <label className={'d-block mb-1'}><b>Flying from</b></label>
                                    }
                                    <AirAutocomplete
                                        handlerFromParant={this.handleOriginData}/>
                                </div>

                                <div className="col-xs-12 col-sm-6 col-lg-4">
                                    {key === 0 &&
                                    <label className={'d-block mb-1'}><b>Flying to</b></label>
                                    }
                                    <AirAutocomplete
                                        handlerFromParant={this.handleDestinationData}
                                    />
                                </div>

                                <div className="col-xs-6 col-lg-4 mobile-input"
                                     style={key > 1 ? {display: 'flex'} : {}}>
                                    <div style={{width: '100%'}} className="mr-2">
                                        {key === 0 &&
                                        <label htmlFor="departure" className={'d-block mb-1'}><b>Departure</b></label>
                                        }
                                        <DatePicker timePicker={false}
                                                    name={'departureDate'}
                                                    id={'departureDate'}
                                                    className="form-control"
                                                    inputFormat="DD/MM/YYYY"
                                                    onChange={e => this.onChange(e, key, 'departureDate')}
                                                    value={value.departureDate}/>
                                    </div>
                                    {key > 1 &&
                                    <FontAwesomeIcon onClick={(e) => this.removeCity(e, key)}
                                                     style={{fontSize: 40, color: '#c7c6c6', cursor: 'pointer'}}
                                                     icon={faWindowClose}/>
                                    }
                                </div>
                            </div>
                        </Fragment>
                    ))}

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <Button variant="outline-success" onClick={e => this.addMultiCity(e)} disabled={this.state.multiCity.length === 8 ? true : false}>
                                <FontAwesomeIcon className="mr-2" icon={faPlusCircle}/>
                                Add Destination</Button>
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
            </Fragment>
        )
    }

}

export default MultiCity;