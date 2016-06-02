/* @flow */

import React, { PropTypes, Component } from 'react';
import styles from './styles';

export default class Gradient extends Component {

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };

  componentWillReceiveProps(properties: Object): void {
    if (properties.style !== this.props.style) {
      this.style = { ...styles.wrapper, ...properties.style };
    }
  }

  style: Object = { ...styles.wrapper, ...this.props.style };

  render(): any {
    const { className } = this.props;
    return (
      <div
        style={this.style}
        className={className}
      />
    );
  }
}
