import React from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores';

// Component
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <Provider store = {store}>
    <Router>
    <Navbar/>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
     <Footer/>   
   </Router>
   </Provider>
  );
}

export default App;
