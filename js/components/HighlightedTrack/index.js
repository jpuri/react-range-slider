/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { notSimilar } from '../../utils/common';
import styles from './styles';

export default class HighlightedTrack extends Component {

  static propTypes = {
    style: PropTypes.object,
    disabledStyle: PropTypes.object,
    className: PropTypes.string,
    disabledClassName: PropTypes.string,
    disabled: PropTypes.bool,
    offset: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    orientation: PropTypes.string,
  };

  componentWillReceiveProps(properties: Object): void {
    if (notSimilar(
      properties,
      this.props,
      ['offset', 'style', 'length']
    )) {
      const { orientation, offset, length, style } = properties;
      this.style = {
        ...(orientation === 'vertical' ?
          styles.highlightedTrackVertical : styles.highlightedTrack),
        ...style,
        ...{
          [`${orientation === 'vertical' ? 'bottom' : 'left'}`]: offset,
          [`${orientation === 'vertical' ? 'height' : 'width'}`]: length,
        },
        ...(this.props.disabled ?
          { ...styles.disabledHighlightedTrack, ...this.props.disabledStyle }
           : {}),
      };
    }
  }

  style: Object = {
    ...(this.props.orientation === 'vertical' ?
      styles.highlightedTrackVertical : styles.highlightedTrack),
    ...this.props.style,
    ...{
      [`${this.props.orientation === 'vertical' ? 'bottom' : 'left'}`]: this.props.offset,
      [`${this.props.orientation === 'vertical' ? 'height' : 'width'}`]: this.props.length,
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
