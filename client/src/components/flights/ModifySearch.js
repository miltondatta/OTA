import React from 'react'
import {Tab, Tabs} from "react-bootstrap";

// Component
import OneWay from "../landing/OneWay";
import RoundTrip from "../landing/RoundTrip";
import MultiCity from "../landing/MultiCity";

const ModifySearch = ({modifySearch}) => {
    return (
        modifySearch &&
        <div className="row pb-3 modify-searched-area">
            <div className="col-md-12">
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
    )
};


export default ModifySearch;
