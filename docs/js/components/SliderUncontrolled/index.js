/* @flow */

import React, { Component } from 'react';
import styles from './styles.css';
import { Slider } from 'reactrangeslider'; // eslint-disable-line import/no-unresolved
import Codemirror from 'react-codemirror';
require('codemirror/mode/jsx/jsx');

export default class SliderUncontrolled extends Component {

  state: any = {
  };

  render() {
    return (
      <div className={styles.root}>
        <span className={styles.description}>
          A un-controlled slider with single handle
        </span>
        <span className={styles.info}>
          default props
        </span>
        <span className={styles.info}>
          styling using classes
        </span>
        <Slider
          step={2}
          wrapperClassName={styles.slider}
          trackClassName={styles.sliderTrack}
          handleClassName={styles.sliderHandle}
        />
        <div className={styles.stateValue}>
          <span className={styles.valueText}>value: </span>
        </div>
        <div className={styles.code}>
          <Codemirror
            value={'<Slider\n  step={2}\n  wrapperClassName={styles.slider}\n  ' +
              'trackClassName={styles.sliderTrack}\n  handleClassName={styles.sliderHandle}\n/>'}
            options={{
              lineNumbers: true,
              mode: 'jsx',
            }}
          />
        </div>
      </div>
    );
  }
}
