'use strict'
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home'
import MoodList, {MoodContainer} from './MoodList'

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
