/* @flow */

import React, { PropTypes } from 'react';
import styles from './styles.css';

const Gradient = ({ className }: Object) =>
  <div className={`${styles.wrapper} ${className}`} />;

Gradient.propTypes = {
  className: PropTypes.string,
};

export default Gradient;
