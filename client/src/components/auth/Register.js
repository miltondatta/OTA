import React, { Component, Fragment } from 'react'

class Register extends Component {
    render() {
        return (
            <Fragment>
                <div className="container breadcrub"></div>
                <div className="register-fullwidith">
                    <div className="register-wrap">
                        <div className="register-c1">
                            <div className="cpadding50">
								<input type="text" className="form-control logpadding" placeholder="Enter Name"  required/> <br/>
								<input type="text" className="form-control logpadding" placeholder="Enter Email" required/> <br/>
                                <input type="text" className="form-control logpadding" placeholder="Enter Mobile" required/> <br/>
								<input type="text" className="form-control logpadding" placeholder="Enter Password" required/> <br/>
								<input type="text" className="form-control logpadding" placeholder="Confirm Password" required/> <br/>
                            </div>
                        </div>
                        <div className="register-c2">
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


export default Register