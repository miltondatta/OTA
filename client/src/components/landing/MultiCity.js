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
                to: '',
                origin: '',
                from: '',
                destination: '',
                departureDate: moment()
            },
            multiCity: [
                {
                    to: '',
                    origin: '',
                    from: '',
                    destination: '',
                    departureDate: moment()
                },
                {
                    to: '',
                    origin: '',
                    from: '',
                    destination: '',
                    departureDate: moment()
                }
            ],
            adult: 1,
            child: 0,
            infant: 0,
            class: 'Business',
        };

        this.addMultiCity = this.addMultiCity.bind(this);
        this.removeCity = this.removeCity.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleOriginData = this.handleOriginData.bind(this);
        this.handleDestinationData = this.handleDestinationData.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    addMultiCity(e) {
        e.preventDefault();

        const length = this.state.multiCity.length - 1;
        const updateObj = {
            from: this.state.multiCity[length].to,
            origin: this.state.multiCity[length].destination
        };

        const newObj = {...this.state.addCity, ...updateObj};
        const addCity = ([...this.state.multiCity, newObj]);

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

    onChange(e, key) {
        if (e.target) {
            const {name, value} = e.target;
            const updateMultiCity = this.state.multiCity.map((el, index) => (index === key ? Object.assign({}, el, {[name]: value}) : el));
            this.setState({
                multiCity: updateMultiCity
            });
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

    handleOriginData(data, key) {
        const updateMultiCity = this.state.multiCity.map((el, index) => (index === key ? Object.assign({}, el, {
            from: data.split(",")[0],
            origin: data
        }) : el));

        this.setState({
            multiCity: updateMultiCity
        });
    }

    handleDestinationData(data, key) {
        let updateMultiCity = [];
        this.state.multiCity.map((value, index) => {
            const returnValue = {...value};

            if (index === key) {
                returnValue.to = data.split(",")[0];
                returnValue.destination = data;
            }

            if (index === (key + 1)) {
                returnValue.from = '';
                returnValue.from = data.split(",")[0];
                returnValue.origin = '';
                returnValue.origin = data;
            }

            updateMultiCity.push(returnValue);
        });

        this.setState({
            multiCity: updateMultiCity
        });
    }

    onSubmit(e) {
        e.preventDefault();

        let searchParams = {
            multiCity: this.state.multiCity,
            ADT: this.state.adult,
            CNN: this.state.child,
            INF: this.state.infant,
            cabins: this.state.class
        };

        console.log(searchParams);
        //this.props.shopData(searchParams, this.props.history);
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.onSubmit} onKeyPress={event => {
                    if (event.which === 13) {
                        event.preventDefault();
                    }
                }}>
                    {this.state.multiCity.length > 0 && this.state.multiCity.map((value, key) => (
                        <Fragment key={key}>
                            <div className="row" style={key > 0 ? {'paddingTop': 8} : {}}>
                                <div className="col-xs-12 col-sm-6 col-lg-4">
                                    {key === 0 &&
                                    <label className={'d-block mb-1'}><b>Flying from</b></label>
                                    }
                                    <AirAutocomplete
                                        handlerFromParant={this.handleOriginData} index={key}
                                        storage_value={value.origin}/>
                                </div>

                                <div className="col-xs-12 col-sm-6 col-lg-4 pt-2 pt-sm-0 pt-md-0">
                                    {key === 0 &&
                                    <label className={'d-block mb-1'}><b>Flying to</b></label>
                                    }
                                    <AirAutocomplete
                                        handlerFromParant={this.handleDestinationData} index={key}
                                        storage_value={value.destination}
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
                                                    onChange={e => this.onChange(e, key)}
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
                            <Button variant="outline-success" onClick={e => this.addMultiCity(e)}
                                    disabled={this.state.multiCity.length === 8 ? true : false}>
                                <FontAwesomeIcon className="mr-2" icon={faPlusCircle}/>
                                Add Destination</Button>
                        </div>
                    </div>


                    <div className="row pt-2">
                        <div className="col-xs-6 col-lg-4">
                            <label htmlFor="adult" className={'d-block mb-1'}><b>Adult</b></label>
                            <select className="form-control" name={'adult'} id={'adult'} value={this.state.adult}
                                    onChange={e => this.setState({adult: e.target.value})}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div className="col-xs-6 col-lg-4 mobile-input">
                            <label htmlFor="child" className={'d-block mb-1'}><b>Child</b></label>
                            <select className="form-control" name={'child'} id={'child'} value={this.state.child}
                                    onChange={e => this.setState({child: e.target.value})}>
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
                            <select className="form-control" name={'infant'} id={'infant'} value={this.state.infant}
                                    onChange={e => this.setState({infant: e.target.value})}>
                                <option>0</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>

                    <div className="row pt-2">
                        <div className="col-xs-6 col-lg-4">
                            <label htmlFor="class" className={'d-block mb-1'}><b>Class</b></label>
                            <select className="form-control" name={'class'} id={'class'} value={this.state.class}
                                    onChange={e => this.setState({class: e.target.value})}>
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