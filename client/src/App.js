import React                            from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import jwt_decode                       from 'jwt-decode';
import setAuthToken                     from './utils/setAuthToken';
import {setCurrentUser, logoutUser}     from './actions/authActions';
import {Provider}                       from 'react-redux';
import store                            from './stores';
import PrivateRoute                     from "./utils/private_route/private_route";

// Component
import Navbar           from './components/layout/Navbar';
import Landing          from './components/layout/Landing';
import Footer           from './components/layout/Footer';
import Login            from './components/auth/Login';
import Register         from './components/auth/Register';
import FlightList       from './components/flights/FlightList';
import FlightPayment    from './components/payments/FlightPayment';
import Contact          from "./components/contact/Contact";
import Profile          from "./components/profile/Profile";
import Verification     from "./components/profile/Verification";
import PaymentInfo      from "./components/payment-info/PaymentInfo";
import Airline          from "./components/airline/Airline";
import AirlineAdd       from "./components/airline/AirlineAdd";
import AirlineEdit      from "./components/airline/AirlineEdit";
import UserIndex        from "./components/users/UserIndex";
import UserEdit         from "./components/users/UserEdit";
import AirportIndex     from "./components/airports/AirportIndex";
import AirportEdit      from "./components/airports/AirportEdit";
import AirportAdd       from "./components/airports/AirportAdd";
import FixedValuesIndex from "./components/fixed-values/FixedValuesIndex";

// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import './assets/css/common.css';
import ApiSourcesIndex  from "./components/api-sources/ApiSourcesIndex";

// Check for token
if (localStorage.jwtToken) {
    console.log("jwt token");
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
                <Route exact path='/verification/:uuid' component={Verification}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/airline' component={Airline}/>
                <Route exact path='/airline-add' component={AirlineAdd}/>
                <Route exact path='/airline/edit/:id' component={AirlineEdit}/>
                <Route exact path='/users_index' component={UserIndex}/>
                <Route exact path='/users/edit/:id' component={UserEdit}/>
                <Route exact path='/airports' component={AirportIndex}/>
                <Route exact path='/airport/edit/:id' component={AirportEdit}/>
                <Route exact path='/airport_add' component={AirportAdd}/>
                <Route exact path='/fixed_values' component={FixedValuesIndex}/>
                <Route exact path='/api_sources' component={ApiSourcesIndex}/>
                <Footer/>
            </Router>
        </Provider>
    );
}

export default App;
