import React, {Component, Fragment} from 'react';
import Slider from 'react-animated-slider';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";

// Css
import 'react-animated-slider/build/horizontal.css';
import '../../assets/css/slider.css';
import '../../assets/css/landing.css';
import 'react-datepicker/dist/react-datepicker.css';

// Slider Image
import slider1 from '../../assets/img/slider1.jpg';
import slider2 from '../../assets/img/slider2.jpg';
import slider3 from '../../assets/img/slider3.jpg';


const sliderContent = [
    {
        title: 'Travel the World',
        description: 'Life is short so enjoy by travelling the whole world!',
        button: 'Read More',
        image: slider1,
        user: '',
        userProfile: ''
    },
    {
        title: 'Travel Like a Brid',
        description: 'You can fly, like bird fly!',
        button: 'Discover',
        image: slider2,
        user: '',
        userProfile: ''
    },
    {
        title: 'Travel is Beauty',
        description: 'Enjoy the beauty of world in a short tip',
        button: 'Buy now',
        image: slider3,
        user: '',
        userProfile: ''
    }
];

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departure: new Date(),
            return: new Date(),
            oneWay: true,
            roundTrip: false,
            multiCity: false
        };
    }

    render() {
        return (
            <Fragment>
                <Slider>
                    {
                        sliderContent.map((article, index) => <div key={index}
                                                                   className="slider-content"
                                                                   style={{background: `url('${article.image}') no-repeat center center`}}>
                                <div className="inner">
                                    <h2>{article.title}  </h2>
                                    <div>{article.description} </div>
                                    <button className="slider-button">{article.button}</button>
                                </div>
                            </div>
                        )}
                </Slider>
                <div className="container mt-130 z-index100">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bs-example bs-example-tabs cstyle04">
                                <ul className="nav nav-tabs" id="myTab">
                                    <li onClick={() => this.setState({
                                        oneWay: !this.state.oneWay,
                                        roundTrip: false,
                                        multiCity: false
                                    })} className={this.state.oneWay && 'active'}><Link data-toggle="tab"
                                                                 to="#"> <span
                                        className="hidetext">One Way</span>&nbsp;
                                    </Link>
                                    </li>
                                    <li onClick={() => this.setState({
                                        roundTrip: !this.state.roundTrip,
                                        oneWay: false,
                                        multiCity: false
                                    })} className={this.state.roundTrip && 'active'}><Link data-toggle="tab"
                                                           to="#"> <span className="hotel"> </span><span
                                        className="hidetext">Round Trip</span>&nbsp;
                                    </Link>
                                    </li>
                                    <li onClick={() => this.setState({
                                        multiCity: !this.state.multiCity,
                                        roundTrip: false,
                                        oneWay: false
                                    })} className={this.state.multiCity && 'active'}><Link data-toggle="tab"
                                                           to="#"> <span className="car"> </span><span
                                        className="hidetext">Multi City</span>&nbsp;
                                    </Link></li>
                                </ul>
                                <div className="tab-content2" id="myTabContent">
                                    {this.state.oneWay &&
                                    <Fragment>
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
                                                    {/*<input type="text" className="form-control mySelectCalendar"
                                                           id="datepicker3" placeholder="mm/dd/yyyy"/>*/}
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
                                    </Fragment>
                                    }
                                    {this.state.roundTrip &&
                                    <Fragment>
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
                                            <div className="wh33percent wh33percent_left_area">
                                                <div className="wh90percent textleft right">
                                                    <span className="opensans size13"><b>Departure</b></span>
                                                    <DatePicker className="form-control mySelectBoxclassName"
                                                                selected={this.state.departure}
                                                                onChange={date => this.setState({departure: date})}/>
                                                </div>
                                            </div>
                                            <div className="wh33percent wh33percent_left_area">
                                                <div className="wh90percent textleft right">
                                                    <span className="opensans size13"><b>Return</b></span>
                                                    <DatePicker className="form-control mySelectBoxclassName"
                                                                selected={this.state.return}
                                                                onChange={date => this.setState({return: date})}/>
                                                </div>
                                            </div>
                                            <div className="wh33percent wh33percent_right_area">
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
                                    </Fragment>
                                    }
                                    {this.state.multiCity &&
                                    <Fragment>
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
                                    </Fragment>
                                    }
                                    <div style={{marginTop: '15px'}}>
                                        <form action="#">
                                            <button type="submit" className="btn-search right mr30">Search</button>
                                        </form>
                                    </div>
                                </div>
                                {/*<div className="">
                                    <form action="#">
                                        <button type="submit" className="btn-search right mr30">Search</button>
                                    </form>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Landing
