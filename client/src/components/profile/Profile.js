import React, {Component} from 'react';
import {Tabs,Tab} from "react-bootstrap";
import '../../assets/css/profile.css'

class Profile extends Component {

    render() {
        return (
            <div className="container profile-area-container">
                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                    <Tab eventKey="home" title="Home">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae dolores, eaque enim mollitia
                        natus nemo, nisi officia rerum tenetur veniam voluptatum! Consectetur excepturi nisi quasi
                        ratione, repellendus ullam voluptate?
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, assumenda consequatur eum
                        fuga non numquam praesentium quibusdam rerum veritatis. Blanditiis consequatur cupiditate ea est
                        facilis fugiat, hic necessitatibus porro reiciendis.
                    </Tab>
                    <Tab eventKey="contact" title="Contact" disabled>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda atque cumque et
                        ex expedita facilis itaque labore laborum laudantium molestias, mollitia nesciunt quas quia sit
                        tempora unde vel voluptate!
                    </Tab>
                </Tabs>
            </div>
        );
    }

}

export default Profile;