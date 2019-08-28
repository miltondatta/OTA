import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';


class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(userData);
    }


    render() {
        return (
            <Fragment>
                <div className="container breadcrub"></div>
                <div className="login-fullwidith">
                    <form onSubmit={this.onSubmit}>
                        <div className="login-wrap">
                            <div className="login-c1">
                                <div className="cpadding50">
                                    <input type="email" className="form-control logpadding"
                                        name="email" value={this.state.email}
                                        onChange={this.onChange}
                                        placeholder="Enter Your Email" required /> <br />

                                    <input type="password" className="form-control logpadding"
                                        name="password" value={this.state.password}
                                        onChange={this.onChange}
                                        minLength="5"
                                        placeholder="Enter Your Password" required /> <br />

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
                    </form>
                </div>
            </Fragment>
        )
    }
}



Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(mapStateToProps, { loginUser })(Login);
