import React from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
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

// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';


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
    <Provider store = {store}>
    <Router>
    <Navbar/>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/flight-list' component={FlightList}/>
        <Route exact path='/flight-payment' component={FlightPayment}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/profile' component={Profile}/>
     <Footer/>
   </Router>
   </Provider>
  );
}

export default App;
