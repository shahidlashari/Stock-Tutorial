import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';

const App = () => (
    <Router>
      <Navbar/>
      <Route exact path='/' component={}/>
    </Router>
);
export default App;
