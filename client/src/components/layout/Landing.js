import React, {Component, Fragment} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import {NotificationContainer, NotificationManager} from 'react-notifications';

// Css
import '../../assets/css/landing.css';

// Component
import SliderComponent from "../landing/Slider";
import OneWay from "../landing/OneWay";
import RoundTrip from "../landing/RoundTrip";
import MultiCity from "../landing/MultiCity";

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departure: new Date(),
            return: new Date()
        };
    }

    createNotification = (type, msg) => {
        switch (type) {
            case 'success':
                NotificationManager.success(msg, 'Login Success', 3000);
                break;
            default:
                return;
        }
    };

    componentDidMount() {
        if (localStorage.login_success) {
            this.createNotification('success', localStorage.login_success);
            localStorage.removeItem('login_success');
        }
    }

    render() {
        return (
            <Fragment>
                <SliderComponent/>
                <div className="trip-search-area pb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 trip-search-area-col">
                                <Tabs defaultActiveKey="oneway" id="uncontrolled-tab-example">
                                    <Tab eventKey="oneway" title="One Way">
                                        <OneWay/>
                                    </Tab>
                                    <Tab eventKey="round-trip" title="Round Trip">
                                        <RoundTrip/>
                                    </Tab>
                                    <Tab eventKey="multi-city" title="Multi City">
                                        <MultiCity/>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                <NotificationContainer/>
            </Fragment>
        )
    }
}

export default Landing;
