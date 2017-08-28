import './App.css';

import Home from './Home';
import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

const App = () =>
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>;

export default App;
