/* @flow */

import React, { Component } from 'react';
import styles from './styles';
import { Slider } from 'reactrangeslider'; // eslint-disable-line import/no-unresolved
import Codemirror from 'react-codemirror';
require('codemirror/mode/jsx/jsx');

export default class SliderControlled extends Component {

  state: any = {
    value: 50,
  };

  onChange: Function = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div style={styles.root}>
        <span style={styles.description}>
          A controlled slider with single handle
        </span>
        <span style={styles.info}>
          parameters - step: 5, value :50, min: -100, max: 100
        </span>
        <span style={styles.info}>
          inline styling
        </span>
        <Slider
          step={5}
          value={value}
          min={-100}
          max={100}
          onChange={this.onChange}
          wrapperStyle={styles.slider}
          trackStyle={styles.sliderTrack}
          handleStyle={styles.sliderHandle}
          hoveredHandleHover={styles.sliderHandleHover}
          focusedHandleStyle={styles.sliderHandleFocus}
          activeHandleStyle={styles.sliderHandleActive}
        />
        <div style={styles.stateValue}>
          <span style={styles.valueText}>value: </span>
          {value}
        </div>
        <div style={styles.code}>
          <Codemirror
            value={'<Slider\n  step={2}\n  onChange={this.onChange}\n  ' +
              'wrapperStyle={styles.slider}\n  ' +
              'trackStyle={styles.sliderTrack}\n  handleStyle={styles.sliderHandle}\n  ' +
              'hoveredHandleHover={styles.sliderHandleHover}\n  ' +
              'focusedHandleStyle={styles.sliderHandleFocus}\n  ' +
              'activeHandleStyle={styles.sliderHandleActive}\n/>'}
            options={{
              lineNumbers: true,
              mode: 'jsx',
              readOnly: true,
            }}
          />
        </div>
      </div>
    );
  }
}
