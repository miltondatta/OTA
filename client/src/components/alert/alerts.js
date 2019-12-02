import React, {Component} from 'react';
import {Alert} from "react-bootstrap";

class Alerts extends Component {
    constructor(props) {
        super(props);
        console.log("baccha cele");
        console.log(props);
        this.state     = {
            show   : false,
            variant: '',
            heading: '',
            message: '',
        };
        this.hideAlert = this.hideAlert.bind(this);
    }

    hideAlert() {
        this.setState({show: false})
    }

    componentWillReceiveProps(props) {
        this.setState({
            show   : props.show,
            variant: props.variant,
            heading: props.heading,
            message: props.message,
        })
    }

    render() {
        if (this.state.show) {
            return (
                <Alert variant={this.state.variant} onClose={this.hideAlert} dismissible>
                    {this.state.heading ? <Alert.Heading>{this.state.heading}</Alert.Heading> : ''}
                    <p>{this.state.message}</p>
                </Alert>
            );
        } else {
            return ('');
        }
    }
}

export default Alerts;