import React from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom';

// Component
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
    <Navbar/>
        <Route exact path='/' component={Landing}/>
    <Footer/>
   </Router>
  );
}

export default App;
