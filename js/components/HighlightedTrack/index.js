/* @flow */

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './styles.css';

export default class HighlightedTrack extends Component {

  static propTypes = {
    className: PropTypes.string,
    left: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  };

  componentWillReceiveProps(props: Object): void {
    if (props.left !== this.props.left ||
      props.width !== this.props.width) {
      this.style = {
        left: props.left,
        width: props.width,
      };
    }
  }

  style: Object = {
    left: this.props.left,
    width: this.props.width,
  };


  render(): Object {
    const { className } = this.props;
    return (
      <div
        style={this.style}
        className={classnames(
          styles.highlightedTrack, {
            [`${className}`]: !!className,
            [`${styles.default}`]: !className,
          }
        )}
      >
      </div>
    );
  }
}
