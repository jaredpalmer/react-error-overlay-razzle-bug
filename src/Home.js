import './Home.css';

import React, { Component } from 'react';

import logo from './react.svg';

class Home extends Component {
  render() {
    return (
      <div className="Home" onClick={() => window.foo()}>
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Click the icon</h2>
        </div>
      </div>
    );
  }
}

export default Home;
