/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import {
    App,
    Home,
    SliderPage,
} from './components';
// Following import is to copy normalize.css to destination folder
import styles from '../css/normalize.css'; // eslint-disable-line no-unused-vars

ReactDOM.render(<Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="slider" component={SliderPage} />
    <IndexRoute component={Home} />
  </Route>
</Router>, document.getElementById('app'));

// todo: fix use browserHistory instead of hashHistory

/**
Use  this line to generate gh-pages:
<Route path="/react-range-slider/" component={App}>
**/
