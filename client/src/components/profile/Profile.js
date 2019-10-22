import React, {Component} from 'react';
import {Tabs,Tab} from "react-bootstrap";
import '../../assets/css/profile.css'

class Profile extends Component {

    render() {
        return (
            <div className="container profile-area-container">
                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                    <Tab eventKey="home" title="Home">
                        
                    </Tab>
                    <Tab eventKey="profile" title="Profile">

                    </Tab>
                </Tabs>
            </div>
        );
    }

}

export default Profile;