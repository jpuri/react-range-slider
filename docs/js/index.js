/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
// Following import is to copy normalize.css to destination folder
import styles from '../css/normalize.css'; // eslint-disable-line no-unused-vars

console.log('*****', window.location)
ReactDOM.render(<Router routes={routes} history={browserHistory} />,
  document.getElementById('app'));
