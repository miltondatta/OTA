import React from 'react';
import { BrowserRouter as Router }  from 'react-router-dom';


import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

function App() {
  return (
    <Router>
    <Navbar/>
    <Landing/>
   </Router>
  );
}

export default App;
