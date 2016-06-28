/* @flow */

import React, { Component, PropTypes } from 'react';
import Track from '../Track';
import Handle from '../Handle';
import styles from './styles';
import {
  has,
  stepValidator,
  getValueOrAlt,
} from '../../utils/common';
import {
  valueValidator,
  defaultValueValidator,
} from '../../utils/slider';

export default class Slider extends Component {

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: stepValidator,
    value: valueValidator,
    defaultValue: defaultValueValidator,
    tabIndex: PropTypes.number,
    onChange: PropTypes.func,
    afterChange: PropTypes.func,
    orientation: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    'aria-labelledby': PropTypes.string,
    wrapperClassName: PropTypes.string,
    trackClassName: PropTypes.string,
    disabledTrackClassName: PropTypes.string,
    handleClassName: PropTypes.string,
    disabledHandleClassName: PropTypes.string,
    wrapperStyle: PropTypes.object,
    trackStyle: PropTypes.object,
    disabledTrackStyle: PropTypes.object,
    handleStyle: PropTypes.object,
    focusedHandleStyle: PropTypes.object,
    hoveredHandleStyle: PropTypes.object,
    activeHandleStyle: PropTypes.object,
    disabledHandleStyle: PropTypes.object,
  };

  static defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    readOnly: false,
    orientation: 'horizontal',
  };

  constructor(props: Object): void {
    super(props);
    let value;
    if (has(props, 'value')) {
      value = this.props.value;
    } else if (props.defaultValue) {
      value = props.defaultValue;
    }
    this.state = {
      value,
    };
  }

  state: Object;

  componentWillReceiveProps(properties: Object): void {
    if (has(properties, 'value')) {
      this.setState({
        value: properties.value,
      });
    }
    if (properties.style !== this.props.style) {
      this.style = {
        ...(this.props.orientation === 'vertical' ? styles.wrapperVertical : styles.wrapper),
        ...properties.wrapperStyle,
      };
    }
  }

  factor: number;
  trackOffset: number;
  value: number;

  _setTrackDimensions: Function = (track: Object): void => {
    const { orientation } = this.props;
    const trackLength = orientation === 'vertical' ? track.clientHeight : track.clientWidth;
    this.setState({
      trackLength,
    });
    this.trackOffset = orientation === 'vertical' ?
      track.offsetParent.offsetTop :
      track.offsetParent.offsetLeft;
  };

  _setHandleSize: Function = (handle): void => {
    const { orientation } = this.props;
    const hendleSize = orientation === 'vertical' ?
      handle.clientHeight :
      handle.clientWidth;
    if (!this.state.hendleSize) {
      this.setState({
        hendleSize,
      });
    }
  };

  _handleMove: Function = (increase: number): void => {
    const { disabled, readOnly, step, min } = this.props;
    const { value } = this.state;
    if (!disabled && !readOnly) {
      const newValue = this._getValue(getValueOrAlt(value, min) + increase * step);
      if (newValue !== value) {
        this._updateState(newValue);
        this._onChange(newValue);
      }
    }
  };

  _onWrapperMouseDown: Function = (event: Object): void => {
    const { disabled, readOnly, orientation } = this.props;
    if (!disabled && !readOnly) {
      this._moveHandleToPosition(orientation === 'vertical' ? event.pageY : event.pageX);
    }
  };

  _onWrapperTouchStart: Function = (event: Object): void => {
    const { disabled, readOnly, orientation } = this.props;
    if (!disabled && !readOnly) {
      if (event.touches.length === 1) {
        event.preventDefault();
        this._moveHandleToPosition(
          orientation === 'vertical' ?
          event.touches[0].pageY :
          event.touches[0].pageX
        );
      }
    }
  };

  _moveHandleToPosition: Function = (position: number): void => {
    const { disabled, readOnly, orientation } = this.props;
    if (!disabled && !readOnly) {
      const { value, trackLength } = this.state;
      const { min } = this.props;
      let mouseDownPosition;
      if (orientation === 'vertical') {
        mouseDownPosition = trackLength - (position - this.trackOffset);
      } else {
        mouseDownPosition = position - this.trackOffset + (min * this.factor);
      }
      let newValue = this._getStepValue(
        (mouseDownPosition - this.state.hendleSize / 2) / this.factor);
      newValue = this._getValue(newValue);
      if (newValue !== getValueOrAlt(value, min)) {
        this._updateState(newValue);
        this._onChange(newValue);
        this._afterChange(newValue);
      }
    }
  };

  _getStepValue: Function = (position: number) => {
    const { step } = this.props;
    const remainder = position % step;
    if (remainder < step / 2) {
      return position - remainder;
    }
    return position - remainder + step;
  };

  _getValue(value: number): number {
    let newValue = value;
    if (newValue < this.props.min) {
      newValue = this.props.min;
    } else if (newValue > this.props.max) {
      newValue = this.props.max;
    }
    return newValue;
  }

  _updateState: Function = (value: number): void => {
    if (!has(this.props, 'value')) {
      this.setState({
        value,
      });
    }
  };

  _onChange: Function = (value: number): void => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  _afterChange: Function = (value: number): void => {
    if (this.props.afterChange) {
      this.props.afterChange(getValueOrAlt(value, this.state.value));
    }
  };

  style: Object = {
    ...(this.props.orientation === 'vertical' ? styles.wrapperVertical : styles.wrapper),
    ...this.props.wrapperStyle,
  };

  render(): Object {
    let position = 0;
    let percentageFactor = 1;
    this.factor = 1;
    const {
      hendleSize,
      trackLength,
      value,
    } = this.state;
    const {
      id,
      min,
      max,
      step,
      name,
      tabIndex,
      disabled,
      readOnly,
      trackStyle,
      orientation,
      disabledTrackStyle,
      handleStyle,
      focusedHandleStyle,
      hoveredHandleStyle,
      activeHandleStyle,
      disabledHandleStyle,
      wrapperClassName,
      trackClassName,
      disabledTrackClassName,
      handleClassName,
      disabledHandleClassName,
    } = this.props;
    this.value = getValueOrAlt(value, min);
    if (trackLength && hendleSize) {
      const calculatedTrackLength = trackLength - hendleSize;
      this.factor = calculatedTrackLength / (max - min);
      if (this.value < min) {
        position = min;
      } else if (this.value > max) {
        position = max;
      } else {
        position = this.value;
      }
      position = (position - min) * getValueOrAlt(this.factor, 1);
      percentageFactor = 100 / trackLength;
    }
    return (
      <div
        id={id}
        name={name}
        style={this.style}
        className={wrapperClassName}
        onClick={this._onWrapperMouseDown}
        onTouchStart={this._onWrapperTouchStart}
        role="slider"
        aria-labelledby={this.props['aria-labelledby']}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuetext={value}
        aria-orientation="horizontal"
        aria-disabled={disabled}
        aria-readonly={readOnly}
      >
        <Track
          disabled={disabled}
          trackRef={this._setTrackDimensions}
          style={trackStyle}
          orientation={orientation}
          disabledStyle={disabledTrackStyle}
          className={trackClassName}
          disabledClassName={disabledTrackClassName}
        />
        <Handle
          disabled={disabled}
          offset={`${position * percentageFactor}%`}
          tabIndex={disabled ? undefined : tabIndex || 0}
          handleRef={this._setHandleSize}
          handleMove={this._handleMove}
          afterChange={this._afterChange}
          factor={this.factor}
          step={step}
          orientation={orientation}
          style={handleStyle}
          focusStyle={focusedHandleStyle}
          hoverStyle={hoveredHandleStyle}
          activeStyle={activeHandleStyle}
          disabledStyle={disabledHandleStyle}
          className={handleClassName}
          disabledClassName={disabledHandleClassName}
        />
      </div>
    );
  }
}
