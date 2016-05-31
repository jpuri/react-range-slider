/* @flow */

import React, { Component } from 'react';
import styles from './styles.css';
import { Slider } from 'reactrangeslider'; // eslint-disable-line import/no-unresolved

export default class SliderPage extends Component {

  state: any = {
  };

  render() {
    return (
      <div className={styles.root}>
        testing me here
        <Slider />
      </div>
    );
  }
}
