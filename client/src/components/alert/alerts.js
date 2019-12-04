import React, {Component} from 'react';
import {Alert} from "react-bootstrap";

class Alerts extends Component {
    constructor(props) {
        super(props);
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
                    {this.state.heading ? <Alert.Heading className="my-0" style={{ fontSize: 20 }}>{this.state.heading}</Alert.Heading> : ''}
                    <strong style={{ fontSize: 15 }}>{this.state.message}</strong>
                </Alert>
            );
        } else {
            return ('');
        }
    }
}

export default Alerts;