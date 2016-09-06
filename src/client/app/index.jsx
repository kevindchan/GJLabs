import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import Results from './components/Results.jsx';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path='/results' component={Results}/>
    </Route>
  </Router>
), document.getElementById('app'))