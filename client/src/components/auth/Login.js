import React, { Component, Fragment } from 'react';


export class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className="login-fullwidith">
                    <div className="login-wrap">
                        <div className="login-c1">
                            <div className="cpadding50">
                                <input type="text" className="form-control logpadding" placeholder="Email" />
                                <br />
                                <input type="text" className="form-control logpadding" placeholder="Password" />
                            </div>
                        </div>
                        <div className="login-c2">
                            <div className="logmargfix">
                                <div className="chpadding50">
                                    <div className="alignbottom">
                                        <button className="btn-search4" type="submit" onclick="errorMessage()">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}



export default Login
