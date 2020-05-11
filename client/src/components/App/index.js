import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../Navbar';
import Home from '../Home';
import Dashboard from '../../containers/Dashboard';
import Trending from '../../containers/Trending';
import SignUp from '../../containers/SignUp';

const App = () => (
  <Router>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/trending" component={Trending} />
    <Route exact path="/signup" component={SignUp} />
  </Router>
);

export default App;
