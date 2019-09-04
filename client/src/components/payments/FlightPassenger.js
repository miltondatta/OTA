import React from 'react';
import DatePicker from 'react-datepicker2';
import moment from 'moment';

class FlightPassenger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passengerDate: moment()
        };
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <span className="size13 dark">First Name</span>
                    <input type="text" className="form-control " placeholder=""/>
                </div>
                <div className="col-md-4">
                    <span className="size13 dark">Last Name</span>
                    <input type="text" className="form-control " placeholder=""/>
                </div>
                <div className="col-md-4">
                    <span className="size13 dark">Date of birth</span>
                    <DatePicker timePicker={false}
                                className="form-control"
                                inputFormat="DD/MM/YYYY"
                                onChange={date => this.setState({ passengerDate: date })}
                                value={this.state.passengerDate} />
                </div>
                <div className="clearfix"></div>
                <br/>
                <div className="col-md-4 passenger-gender">
                    <input type="radio" name="gender" value="male"/> Male
                    <span class="margright10"></span>
                    <input type="radio" name="gender" value="female"/> Female
                </div>
                <div className="col-md-4">
                    <span className="size13 dark">Citizenship</span>
                    <select className="form-control mySelectBoxClass">
                        <option selected>Bangladeshi</option>
                        <option>American</option>
                        <option>Canadian</option>
                        <option>Australian</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <span className="size13 dark">NID</span>
                    <input type="text" className="form-control " placeholder=""/>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}


export default FlightPassenger;
