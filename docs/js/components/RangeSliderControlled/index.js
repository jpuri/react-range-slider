/* @flow */

import React, { Component } from 'react';
import styles from './styles';
import { RangeSlider } from 'react-sliders'; // eslint-disable-line import/no-unresolved
import Codemirror from 'react-codemirror';
require('codemirror/mode/jsx/jsx');

export default class SliderControlled extends Component {

  state: any = {
    value: {
      start: -50,
      end: 50,
    },
  };

  onChange: Function = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div style={styles.root}>
        <span style={styles.description}>
          A controlled slider with two handles
        </span>
        <span style={styles.info}>
          parameters - step: 5, value : {'{ start: -50, end: 50 }'}, min: -100, max: 100
        </span>
        <span style={styles.info}>
          inline styling
        </span>
        <div style={styles.sliderWrapper}>
          <RangeSlider
            step={5}
            value={value}
            min={-100}
            max={100}
            onChange={this.onChange}
            wrapperStyle={styles.slider}
            trackStyle={styles.trackStyle}
            highlightedTrackStyle={styles.highlightedTrackStyle}
            handleStyle={styles.handleStyle}
            hoveredHandleStyle={styles.hoveredHandleStyle}
            focusedHandleStyle={styles.focusedHandleStyle}
            activeHandleStyle={styles.activeHandleStyle}
          />
        </div>
        <div>
          <span style={styles.valueText}>value.start: {value.start}</span>
          <span style={styles.valueText}>value.end: {value.end}</span>
        </div>
        <div style={styles.code}>
          <Codemirror
            value={
              '<RangeSlider\n  ' +
                'step={5}\n  ' +
                'value={value}\n  ' +
                'min={-100}\n  ' +
                'max={100}\n  ' +
                'onChange={this.onChange}\n  ' +
                'wrapperStyle={styles.slider}\n  ' +
                'trackStyle={styles.trackStyle}\n  ' +
                'highlightedTrackStyle={styles.highlightedTrackStyle}\n  ' +
                'handleStyle={styles.handleStyle}\n  ' +
                'hoveredHandleStyle={styles.hoveredHandleStyle}\n  ' +
                'focusedHandleStyle={styles.focusedHandleStyle}\n  ' +
                'activeHandleStyle={styles.activeHandleStyle}\n' +
              '/>'
            }
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
