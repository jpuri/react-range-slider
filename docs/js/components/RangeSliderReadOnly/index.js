/* @flow */

import React, { Component } from 'react';
import styles from './styles.css';
import { RangeSlider } from 'reactrangeslider'; // eslint-disable-line import/no-unresolved
import Codemirror from 'react-codemirror';
require('codemirror/mode/jsx/jsx');

export default class SliderDisabled extends Component {

  state: any = {
    value: {
      start: 20,
      end: 80,
    },
  };

  onChange: Function = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.root}>
        <span className={styles.description}>
          A readonly slider with two handles
        </span>
        <span className={styles.info}>
          readOnly components can be focused &nbsp;
          <a href="https://www.w3.org/TR/html401/interact/forms.html#adef-readonly">W3C</a>
        </span>
        <span className={styles.info}>
          parameters - step: 2, defaultValue: {'{ start: 20, end: 80 }'}
        </span>
        <span className={styles.info}>
          default styles
        </span>
        <div className={styles.sliderWrapper}>
          <RangeSlider
            step={2}
            readOnly
            defaultValue={value}
            onChange={this.onChange}
            highlightedTrackStyle={styles.highlightedTrackStyle}
            highlightedTrackStyle2={styles.highlightedTrackStyle2}
          />
        </div>
        <div>
          <span className={styles.valueText}>value.start: {value.start}</span>
          <span className={styles.valueText}>value.end: {value.end}</span>
        </div>
        <div className={styles.code}>
          <Codemirror
            value={
              '<RangeSlider\n  ' +
                'step={2}\n  ' +
                'readOnly\n  ' +
                'defaultValue={value}\n  ' +
                'onChange={this.onChange}\n' +
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
