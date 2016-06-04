/* @flow */

import React, { Component, PropTypes } from 'react';
import { injectStyle, removeStyle, calculateStyle } from '../../utils/handle';
import { notSimilar } from '../../utils/common';
import styles from './styles';

export default class Handle extends Component {

  static propTypes = {
    left: PropTypes.string,
    factor: PropTypes.number.isRequired,
    handleRef: PropTypes.func.isRequired,
    handleMove: PropTypes.func.isRequired,
    afterChange: PropTypes.func.isRequired,
    tabIndex: PropTypes.number,
    disabled: PropTypes.bool,
    step: PropTypes.number.isRequired,
    style: PropTypes.object,
    focusStyle: PropTypes.object,
    hoverStyle: PropTypes.object,
    activeStyle: PropTypes.object,
    disabledStyle: PropTypes.object,
    className: PropTypes.string,
    disabledClassName: PropTypes.string,
  };

  state: Object = {
    hovered: false,
    focused: false,
    active: false,
  };

  componentWillMount(): void {
    injectStyle();
  }

  componentDidMount(): void {
    document.addEventListener('mousemove', this._onDocumentMouseMove);
    document.addEventListener('mouseup', this._onDocumentMouseUp);
  }

  componentWillReceiveProps(properties: Object): void {
    if (notSimilar(
      properties,
      this.props,
      ['left', 'style', 'hoverStyle', 'focusStyle', 'activeStyle']
    )) {
      this.style = calculateStyle(styles, this.state, properties);
    }
  }

  componentWillUnmount(): void {
    removeStyle();
  }

  _onMouseEnter: Function = (): void => {
    this.style = calculateStyle(styles, { ...this.state, ...{ hovered: true } }, this.props);
    this.setState({
      hovered: true,
    });
  };

  _onMouseLeave: Function = (): void => {
    this.style = calculateStyle(styles, { ...this.state, ...{ hovered: false } }, this.props);
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
    this.style = calculateStyle(styles, { ...this.state, ...{ active: false } }, this.props);
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
    this.style = calculateStyle(styles, { ...this.state, ...{ active: true } }, this.props);
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
    this.style = calculateStyle(styles, { ...this.state, ...{ active: false } }, this.props);
    this.setState({
      active: false,
    });
  };

  _onFocus: Function = (): void => {
    this.style = calculateStyle(styles, { ...this.state, ...{ focused: true } }, this.props);
    this.setState({
      focused: true,
    });
  };

  _onBlur: Function = (): void => {
    this.style = calculateStyle(styles, { ...this.state, ...{ focused: false } }, this.props);
    this.setState({
      focused: false,
    });
  };

  _onKeyDown: Function = (event: Object): void => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.props.handleMove(-1);
      this.props.afterChange();
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.props.handleMove(1);
      this.props.afterChange();
    }
  };

  currentPos: number;
  lastPos: number;
  style: Object = {
    ...styles.handle,
    ...this.props.style,
    ...{
      left: this.props.left,
    },
    ...(this.props.disabled ?
      { ...styles.disabledHandle, ...this.props.disabledStyle } :
      {}
    ),
  };

  render(): Object {
    const { handleRef, tabIndex, className, disabledClassName, disabled } = this.props;
    return (
      <div
        ref={handleRef}
        style={this.style}
        disabled={disabled}
        tabIndex={tabIndex}
        className={
          (disabled && disabledClassName) ?
          `handle ${disabledClassName}` :
          `handle ${className}`
        }
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

// todo : use disabled and readonly for event handling
