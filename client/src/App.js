import React from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom';

// Component
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <Router>
    <Navbar/>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
   </Router>
  );
}

export default App;
