import React, { Component, Fragment } from 'react';


export class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className="login-fullwidith">
                    <div className="login-wrap">
                        <div className="login-c1">
                            <div className="cpadding50">
                                <input type="text" name="email" className="form-control logpadding" placeholder="Email" />
                                <br />
                                <input type="text" name="password" className="form-control logpadding" placeholder="Password" />
                            </div>
                        </div>
                        <div className="login-c2">
                            <div className="logmargfix">
                                <div className="chpadding50">
                                    <div className="alignbottom">
                                        <button className="btn-search4" type="submit">Submit</button>
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
