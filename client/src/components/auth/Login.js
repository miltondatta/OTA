import React, { Component, Fragment } from 'react';


export class Login extends Component {
    render() {
        return (
            <Fragment>
                <div class="login-fullwidith">
                    <div class="login-wrap">
                        <div class="login-c1">
                            <div class="cpadding50">
                                <input type="text" class="form-control logpadding" placeholder="Email" />
                                <br />
                                <input type="text" class="form-control logpadding" placeholder="Password" />
                            </div>
                        </div>
                        <div class="login-c2">
                            <div class="logmargfix">
                                <div class="chpadding50">
                                    <div class="alignbottom">
                                        <button class="btn-search4" type="submit" onclick="errorMessage()">Submit</button>
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
