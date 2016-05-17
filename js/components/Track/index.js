/* @flow */

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './styles.css';

const Track = ({ className, trackRef } : Object) =>
  <div
    className={classnames(
      styles.track, {
        [`${className}`]: !!className,
        [`${styles.default}`]: !className,
      }
    )}
    ref={trackRef}
  >
  </div>;

Track.propTypes = {
  className: PropTypes.string,
  trackRef: PropTypes.func.isRequired,
};

export default Track;
