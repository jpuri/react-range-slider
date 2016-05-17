/* @flow */

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './styles.css';

export default class Handle extends Component {

  static propTypes = {
    left: PropTypes.string,
    factor: PropTypes.number.isRequired,
    handleRef: PropTypes.func.isRequired,
    handleMove: PropTypes.func.isRequired,
    afterChange: PropTypes.func.isRequired,
    tabIndex: PropTypes.number,
    step: PropTypes.number.isRequired,
    className: PropTypes.string,
  };

  state: Object = {
    hovered: false,
    active: false,
  };

  componentDidMount(): void {
    document.addEventListener('mousemove', this._onDocumentMouseMove);
    document.addEventListener('mouseup', this._onDocumentMouseUp);
  }

  componentWillReceiveProps(props: Object): void {
    if (props.left !== this.props.left
      || props.right !== this.props.right) {
      this.style = { left: props.left, right: props.right };
    }
  }

  _onMouseEnter: Function = (): void => {
    this.setState({
      hovered: true,
    });
  };

  _onMouseLeave: Function = (): void => {
    this.setState({
      hovered: false,
    });
  };

  _onMouseDown: Function = (event: Object): void => {
    this._moveStart(event.pageX);
  };

  _onDocumentMouseMove: Function = (event: Object): void => {
    if (this.state.active) {
      this._move(event.pageX);
    }
  };

  _onDocumentMouseUp: Function = (): void => {
    this._moveEnd();
  };

  _onContextMenu: Function = (): void => {
    this.setState({
      active: false,
    });
  };

  _onTouchStart: Function = (event: Object): void => {
    if (event.touches.length === 1) {
      event.preventDefault();
      this._moveStart(event.touches[0].pageX);
    }
  };

  _onTouchMove: Function = (event: Object): void => {
    if (this.state.active) {
      event.preventDefault();
      this._move(event.touches[0].pageX);
    }
  };

  _onTouchEnd: Function = (event: Object): void => {
    if (this.state.active) {
      event.preventDefault();
      this._moveEnd();
      this.props.afterChange();
    }
  };

  _moveStart: Function = (position: number): void => {
    this.currentPos = position;
    this.lastPos = position;
    this.setState({
      active: true,
    });
  };

  _move: Function = (position: number): void => {
    const { factor, step, handleMove } = this.props;
    const direction = position - this.lastPos;
    const distance = position - this.currentPos;
    const increment = direction > 0 ? 1 : -1;
    const calculatedFactor = ((factor || 1) * step) / Math.max(1, step / 2);
    if (direction * distance > calculatedFactor) {
      handleMove(increment);
      this.currentPos += factor * step * increment;
    }
    this.lastPos = position;
  };

  _moveEnd: Function = (): void => {
    this.setState({
      active: false,
    });
  };

  _onFocus: Function = (): void => {
    this.setState({
      focus: true,
    });
  };

  _onBlur: Function = (): void => {
    this.setState({
      focus: false,
    });
  };

  _onKeyDown: Function = (event: Object): void => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
      this.props.handleMove(-1);
      this.props.afterChange();
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
      this.props.handleMove(1);
      this.props.afterChange();
    }
  };

  currentPos: number;
  lastPos: number;
  style: Object = {
    left: this.props.left,
    right: this.props.right,
  };

  render(): Object {
    const { handleRef, tabIndex, className } = this.props;
    return (
      <div
        ref={handleRef}
        style={this.style}
        tabIndex={tabIndex}
        className={classnames(
          styles.handle, {
            [`${className}`]: !!className,
            [`${styles.default}`]: !className,
          }
        )}
        onFocus={this._onFocus}
        onBlur={this._onBlur}
        onKeyDown={this._onKeyDown}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        onMouseDown={this._onMouseDown}
        onContextMenu={this._onContextMenu}
        onTouchStart={this._onTouchStart}
        onTouchMove={this._onTouchMove}
        onTouchEnd={this._onTouchEnd}
      >
      </div>
    );
  }
}
