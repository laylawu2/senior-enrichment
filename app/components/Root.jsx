'use strict'
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home'
import MoodContainer from './MoodList'
export default ({ children }) => (
  <div className="container-fluid">
    <Navbar />
    <MoodContainer />
    { children }
    <Footer />
  </div>
);
