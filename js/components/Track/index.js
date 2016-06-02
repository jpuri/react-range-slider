/* @flow */

import React, { PropTypes, Component } from 'react';
import styles from './styles';

export default class Track extends Component {

  static propTypes = {
    trackRef: PropTypes.func.isRequired,
    className: PropTypes.string,
    disabledClassName: PropTypes.string,
    style: PropTypes.object,
    disabledStyle: PropTypes.object,
    disabled: PropTypes.bool,
  };

  componentWillReceiveProps(properties: Object): void {
    if (properties.style !== this.props.style) {
      this.style = {
        ...styles.track,
        ...properties.style,
        ...(properties.disabled ?
          { ...styles.disabledTrack, ...properties.disabledStyle }
           : {}),
      };
    }
  }

  style: Object = {
    ...styles.track,
    ...this.props.style,
    ...(this.props.disabled ?
      { ...styles.disabledTrack, ...this.props.disabledStyle }
       : {}),
  };

  render(): any {
    const { className, trackRef, disabledClassName, disabled } = this.props;
    return (
      <div
        ref={trackRef}
        style={this.style}
        disabled={disabled}
        className={(disabled && disabledClassName) ? disabledClassName : className}
      />
    );
  }
}
