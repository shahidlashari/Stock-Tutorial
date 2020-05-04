import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Navbar = () => (
  <div>
    <Link to='/home'>Home</Link>
    <Link to='/trending'>Trending</Link>
    <Link to='/dashboard'>Dashboard</Link>
    <Link to='/signup'>Signup/Login</Link>
  </div>
);

export default Navbar;
