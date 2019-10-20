import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Alert} from "react-bootstrap";

// Redux
import {loginUser} from '../../actions/authActions';
import {connect} from 'react-redux';

// Css
import '../../assets/css/register.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
        }

        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    }


    render() {
        const marginTop = this.state.errors.msg ? 'marginTopDecrease' : '';
        return (
            <Fragment>
                <div className="container breadcrub"></div>
                <div className="login-fullwidith">
                    {this.state.errors.msg &&
                    <div className="row" style={{paddingTop: '30px'}}>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <Alert variant={'danger'}>
                                {this.state.errors.msg}
                            </Alert>
                        </div>
                    </div>
                    }
                    <form onSubmit={this.onSubmit}>
                        <div className={`login-wrap ${marginTop}`}>
                            <div className="login-c1">
                                <div className="cpadding50">
                                    <input type="email" className="form-control logpadding"
                                           name="email" value={this.state.email}
                                           onChange={this.onChange}
                                           placeholder="Enter Your Email" required/> <br/>

                                    <input type="password" className="form-control logpadding"
                                           name="password" value={this.state.password}
                                           onChange={this.onChange}
                                           minLength="4"
                                           placeholder="Enter Your Password" required/> <br/>

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

const mapDispatchTopProps = {loginUser};
export default connect(mapStateToProps, mapDispatchTopProps)(Login);
