/* @flow */

import React, { Component } from 'react';
import styles from './styles.css';
import { Slider } from 'reactrangeslider'; // eslint-disable-line import/no-unresolved
import Codemirror from 'react-codemirror';
require('codemirror/mode/jsx/jsx');

export default class SliderDisabled extends Component {

  state: any = {
    value: 50,
  };

  onChange: Function = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.root}>
        <span className={styles.description}>
          A disabled slider with single handle
        </span>
        <span className={styles.info}>
          disabled components can not be focused &nbsp;
          <a href="https://www.w3.org/TR/html401/interact/forms.html#adef-disabled">W3C</a>
        </span>
        <span className={styles.info}>
          parameters - step: 2, defaultValue: 25
        </span>
        <span className={styles.info}>
          styling using classes
        </span>
        <div className={styles.sliderWrapper}>
          <Slider
            step={2}
            disabled
            defaultValue={25}
            onChange={this.onChange}
            wrapperClassName={styles.slider}
            trackClassName={styles.sliderTrack}
            handleClassName={styles.sliderHandle}
            disabledHandleClassName={styles.disabledSliderHandle}
          />
        </div>
        <div className={styles.stateValue}>
          <span className={styles.valueText}>value: </span>
          {value}
        </div>
        <div className={styles.code}>
          <Codemirror
            value={'<Slider\n  step={2}\n  disabled\n  defaultValue={25}\n  ' +
              'onChange={this.onChange}\n  ' +
              'wrapperClassName={styles.slider}\n  ' +
              'trackClassName={styles.sliderTrack}\n  handleClassName={styles.sliderHandle}\n  ' +
              'disabledHandleClassName={styles.disabledSliderHandle}\n/>'}
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
