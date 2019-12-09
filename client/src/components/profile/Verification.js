import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

// Css
import '../../assets/css/register.css';
import axios from "axios";

class Verification extends Component {
    constructor(props) {
        super(props);
        if (this.props.match.params.uuid) {
            this.verifyToken(this.props.match.params.uuid);
        }
    }

    verifyToken(token) {
        let param = {token: token};
        axios
            .post('/api/users/confirm/', param)
            .then(res => {
                let status = res.data.status;
                if(status){
                    localStorage.setItem('registration_success', res.data.msg);
                }else {
                    localStorage.setItem('registration_error', res.data.msg);
                }
                this.props.history.push('/login');
            })
            .catch(

            );
    }

    render() {
        return (
            <div className="login-area">
                <div className="login-overlay">
                    <div className="container login-area-container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(Verification);
