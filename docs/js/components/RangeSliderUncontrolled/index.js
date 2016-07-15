/* @flow */

import React, { Component } from 'react';
import styles from './styles.css';
import { RangeSlider } from 'reactrangeslider'; // eslint-disable-line import/no-unresolved
import Codemirror from 'react-codemirror';
require('codemirror/mode/jsx/jsx');

export default class SliderUncontrolled extends Component {

  state: any = {
    value: {},
  };

  onChange: Function = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.root}>
        <span className={styles.description}>
          A uncontrolled slider with two handles
        </span>
        <span className={styles.info}>
          parameters - step: 2
        </span>
        <span className={styles.info}>
          styling using classes
        </span>
        <div className={styles.sliderWrapper}>
          <RangeSlider
            step={2}
            value={value}
            onChange={this.onChange}
            wrapperClassName={styles.slider}
            trackClassName={styles.sliderTrack}
            highlightedTrackClassName={styles.sliderHighlightedTrack}
            highlightedTrackClassName2={styles.sliderHighlightedTrack2}
            handleClassName={styles.sliderHandle}
          />
        </div>
        <div>
          <span className={styles.valueText}>value.start: {value.start}</span>
          <span className={styles.valueText}>value.end: {value.end}</span>
        </div>
        <div className={styles.code}>
          <Codemirror
            value={'<RangeSlider\n  step={2}\n  onChange={this.onChange}\n  ' +
            'wrapperClassName={styles.slider}\n  ' +
            'highlightedTrackClassName={styles.sliderHighlightedTrack}\n  ' +
            'trackClassName={styles.sliderTrack}\n  handleClassName={styles.sliderHandle}\n/>'}
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
