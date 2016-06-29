/* @flow */

import React, { Component } from 'react';
import styles from './styles.css';
import SliderUncontrolled from '../SliderUncontrolled'; // eslint-disable-line import/no-unresolved
import SliderControlled from '../SliderControlled'; // eslint-disable-line import/no-unresolved
import SliderDisabled from '../SliderDisabled'; // eslint-disable-line import/no-unresolved
import RangeSliderUncontrolled
  from '../RangeSliderUncontrolled'; // eslint-disable-line import/no-unresolved
import RangeSliderControlled
  from '../RangeSliderControlled'; // eslint-disable-line import/no-unresolved
import RangeSliderReadOnly
  from '../RangeSliderReadOnly'; // eslint-disable-line import/no-unresolved
import VerticalSliderUncontrolled
  from '../VerticalSliderUncontrolled'; // eslint-disable-line import/no-unresolved
  import VerticalRangeSliderUncontrolled
    from '../VerticalRangeSliderUncontrolled'; // eslint-disable-line import/no-unresolved

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
        <div className={styles.featureSection}>
          <div className={styles.featureText}>Features</div>
          <ul className={styles.list}>
            <li>Support for both mobile and desktop devices</li>
            <li>Cutomizable styling</li>
            <li>Responsive to keyboard events</li>
            <li>ARIA support</li>
          </ul>
        </div>
        <div className={styles.examples}>
          <SliderUncontrolled />
          <VerticalSliderUncontrolled />
          <SliderControlled />
          <SliderDisabled />
          <RangeSliderUncontrolled />
          <VerticalRangeSliderUncontrolled />
          <RangeSliderControlled />
          <RangeSliderReadOnly />
        </div>
        <div className={styles.featureSection}>
          <div className={styles.featureText}>Future Plans</div>
          <ul className={styles.list}>
            <li>
              I plan to develop it into a complete set of slider components.
              I will soon add to it vertical slider and vertical range slider.
            </li>
          </ul>
        </div>
        <div className={styles.footer}>
          <span>Made By <a className={styles.link} href="https://twitter.com/jyopur" target="_blank">Jyoti</a></span>
          <a className={`${styles.link} ${styles.code}`} href="https://github.com/jpuri/react-range-slider" target="_blank">Code</a>
        </div>
      </div>
    );
  }
}
