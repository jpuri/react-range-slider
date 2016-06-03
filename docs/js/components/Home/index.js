/* @flow */

import React, { Component } from 'react';
import styles from './styles.css';
import SliderUncontrolled from '../SliderUncontrolled'; // eslint-disable-line import/no-unresolved

export default class Home extends Component {

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <div>
            <div className={styles.title}>React Sliders</div>
            <div className={styles.subTitle}>A collection of slider components in React</div>
          </div>
          <div>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=jpuri&repo=react-range-slider&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              className={styles.gitLink}
            />
          </div>
        </div>
        <div className={styles.examples}>
          <SliderUncontrolled />
        </div>
        <div className={styles.footer}>
          <span>Made By <a className={styles.link} href="https://twitter.com/jyopur" target="_blank">Jyoti</a></span>
          <a className={`${styles.link} ${styles.code}`} href="https://github.com/jpuri/react-sliders" target="_blank">Code</a>
        </div>
      </div>
    );
  }
}
