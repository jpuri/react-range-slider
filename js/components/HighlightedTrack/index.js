/* @flow */

import React, { Component, PropTypes } from 'react';
import { notSimilar } from '../../utils/common';
import styles from './styles';

export default class HighlightedTrack extends Component {

  static propTypes = {
    style: PropTypes.object,
    disabledStyle: PropTypes.object,
    className: PropTypes.string,
    disabledClassName: PropTypes.string,
    disabled: PropTypes.bool,
    left: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  };

  componentWillReceiveProps(properties: Object): void {
    if (notSimilar(
      properties,
      this.props,
      ['left', 'style', 'width']
    )) {
      this.style = {
        ...styles.highlightedTrack,
        ...properties.style,
        ...{
          left: properties.left,
          width: properties.width,
        },
        ...(this.props.disabled ?
          { ...styles.disabledHighlightedTrack, ...this.props.disabledStyle }
           : {}),
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
    ...(this.props.disabled ?
      { ...styles.disabledHighlightedTrack, ...this.props.disabledStyle }
       : {}),
  };

  render(): Object {
    const { className, disabledClassName, disabled } = this.props;
    return (
      <div
        style={this.style}
        disabled={disabled}
        className={(disabled && disabledClassName) ? disabledClassName : className}
      >
      </div>
    );
  }
}
