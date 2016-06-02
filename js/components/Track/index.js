/* @flow */

import React, { PropTypes, Component } from 'react';
import styles from './styles';

export default class Track extends Component {

  static propTypes = {
    trackRef: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  componentWillReceiveProps(properties: Object): void {
    if (properties.style !== this.props.style) {
      this.style = { ...styles.wrapper, ...properties.style };
    }
  }

  style: Object = { ...styles.track, ...this.props.style };

  render(): any {
    const { className, trackRef } = this.props;
    return (
      <div
        ref={trackRef}
        style={this.style}
        className={className}
      />
    );
  }
}
