/* @flow */

import React, { Component, PropTypes } from 'react';
import styles from './styles';

export default class HighlightedTrack extends Component {

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    left: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  };

  componentWillReceiveProps(properties: Object): void {
    if (properties.left !== this.props.left ||
      properties.width !== this.props.width ||
      properties.style !== this.props.style) {
      this.style = {
        ...styles.highlightedTrack,
        ...properties.style,
        ...{
          left: properties.left,
          width: properties.width,
        },
      };
    }
  }

  style: Object = {
    ...styles.highlightedTrack,
    ...this.props.style,
    ...{
      left: this.props.left,
      width: this.props.width,
    },
  };

  render(): Object {
    const { className } = this.props;
    return (
      <div
        style={this.style}
        className={className}
      >
      </div>
    );
  }
}
