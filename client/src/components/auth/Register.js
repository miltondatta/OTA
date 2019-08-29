import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import '../../assets/css/register.css';

// Redux
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile: '',
            password: '',
            password2: '',
            errors: {},
            pass_match: true
        };

        this.onChange   =   this.onChange.bind(this);
        this.onSubmit   =   this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push('/');
        }
      }
    
      componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }


    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit(e){
        e.preventDefault();

        // Check Confirm Password
        if(this.state.password2 !== '') {
            const password = this.state.password;
            const password2 = this.state.password2;
            if(password !== password2) {
                this.setState({pass_match: false});
                return;
            }
            if(password === password2) this.setState({pass_match: true});
        }

        const newUser   =   {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            password: this.state.password,
            password2: this.state.password2,
        };

        this.props.registerUser(newUser, this.props.history);
    }


    render() {
        const password_matched = this.state.pass_match ? '' : 'password_not_matched';
        return (
            <Fragment>
                <div className="container breadcrub"> </div>
                <div className="register-fullwidith">
                    <form onSubmit={this.onSubmit}>
                        <div className="register-wrap">
                            <div className="register-c1">
                                <div className="cpadding50">
                                    <input type="text" className="form-control logpadding"
                                        name="name" value={this.state.name}
                                        onChange={this.onChange}
                                        placeholder="Enter Name" required /> <br />

                                    <input type="text" className="form-control logpadding"
                                        name="email" value={this.state.email}
                                        onChange={this.onChange}
                                        placeholder="Enter Email" required /> <br />

                                    <input type="text" className="form-control logpadding"
                                        name="mobile" value={this.state.mobile}
                                        onChange={this.onChange}
                                        placeholder="Enter Mobile" required /> <br />

                                    <input type="password" className="form-control logpadding"
                                        name="password" value={this.state.password}
                                        onChange={this.onChange}
                                        placeholder="Enter Password" required /> <br />

                                    <input type="password" className={`form-control logpadding ${password_matched}`}
                                        name="password2" value={this.state.password2}
                                        onChange={this.onChange}
                                        placeholder="Confirm Password" required /> <br />
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
                    </form>
                </div>
            </Fragment>
        )
    }
}


Register.propTypes  =   {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = { registerUser };

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Register));