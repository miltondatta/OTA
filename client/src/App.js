import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authActions';
import {Provider} from 'react-redux';
import store from './stores';

// Component
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FlightList from './components/flights/FlightList';
import FlightPayment from './components/payments/FlightPayment';
import Contact from "./components/contact/Contact";
import Profile from "./components/profile/Profile";
import Verification from "./components/profile/Verification";
import PaymentInfo from "./components/payment-info/PaymentInfo";
import Airline from "./components/airline/Airline";
import AirlineAdd from "./components/airline/AirlineAdd";
import AirlineEdit from "./components/airline/AirlineEdit";
import UserIndex from "./components/users/UserIndex";

// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import './assets/css/common.css';

// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Clear current Profile
        //store.dispatch(clearCurrentProfile());
        // Redirect to login
        window.location.href = '/login';
    }
}

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar/>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/flight-list' component={FlightList}/>
                <Route exact path='/flight-payment' component={FlightPayment}/>
                <Route exact path='/flight-payment-info' component={PaymentInfo}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/verification/:uuid' component={Verification}/>
                <Route exact path='/airline' component={Airline}/>
                <Route exact path='/airline-add' component={AirlineAdd}/>
                <Route exact path='/airline/edit/:id' component={AirlineEdit}/>
                <Route exact path='/users_index' component={UserIndex}/>
                <Footer/>
            </Router>
        </Provider>
    );
}

export default App;
