/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import {
    App,
    Home,
} from './components';
// Following import is to copy normalize.css to destination folder
import '../resources/normalize.css'; // eslint-disable-line no-unused-vars
import '../resources/codemirror.css'; // eslint-disable-line no-unused-vars

ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
</Router>, document.getElementById('app'));

/**
Use  this line to generate gh-pages:
<Route path="/react-range-slider/" component={App}>
**/
