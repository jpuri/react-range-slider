/* @flow */

import React, { Component } from 'react';
import styles from './styles.css';
import { RangeSlider } from 'rr-slider'; // eslint-disable-line import/no-unresolved

export default class Home extends Component {

  state: any = {
    status: false,
    sliderValues: [{}, {}, { start: 200, end: 900 }],
  };

  changeState: any = () => {
    const status = !this.state.status;
    this.setState({
      status,
    });
  };

  _setSliderValue: Function = (index, sliderValue) => {
    const sliderValues = this.state.sliderValues;
    sliderValues[index] = sliderValue;
    this.setState({
      sliderValues,
    });
  };

  _updateControlledStart: Function = (event) => {
    const sliderValues = this.state.sliderValues;
    const start = Number(event.target.value);
    if (!sliderValues[2]) {
      sliderValues[2] = { start, end: undefined };
    } else {
      sliderValues[2].start = start;
    }
    this.setState({
      sliderValues,
    });
  };

  _updateControlledEnd: Function = (event) => {
    const sliderValues = this.state.sliderValues;
    const end = Number(event.target.value);
    if (!sliderValues[2]) {
      sliderValues[2] = { start: undefined, end };
    } else {
      sliderValues[2].end = end;
    }
    this.setState({
      sliderValues,
    });
  };

  render() {
    const { sliderValues } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.headerSection}>
          <h1>Demo page for React Range Slider</h1>
          <div>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=jpuri&repo=react-component-stores&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              className={styles.gitLink}
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.label}>
            A simple un-controlled slider in shades of pink
            <div>
              <span className={styles.boldText}>props: </span>
               min: 0, max: 100, step: 1 (default props)
            </div>
            <div className={styles.stateValue}>
              <span className={styles.boldText}>start: </span>
              {sliderValues[0] && sliderValues[0].start} &nbsp;
              <span className={styles.boldText}>end: </span>
              {sliderValues[0] && sliderValues[0].end}
            </div>
          </div>
          <RangeSlider
            trackClassName={styles.firstTrack}
            highlightedTrackClassName={styles.firstHighlightedTrack}
            handleClassName={styles.firstHandle}
            onChange={this._setSliderValue.bind(this, 0)}
          />
        </div>
        <div className={styles.container}>
          <div className={styles.label}>
            A simple un-controlled slider in shades of blue.
            <div>
              <span className={styles.boldText}>props: </span>
              min: 5, max: 25, step: 5
            </div>
            <div className={styles.stateValue}>
              <span className={styles.boldText}>start: </span>
              {sliderValues[1] && sliderValues[1].start} &nbsp;
              <span className={styles.boldText}>end: </span>
              {sliderValues[1] && sliderValues[1].end}
            </div>
          </div>
          <RangeSlider
            min={5}
            max={25}
            step={5}
            trackClassName={styles.secondTrack}
            highlightedTrackClassName={styles.secondHighlightedTrack}
            handleClassName={styles.secondHandle}
            onChange={this._setSliderValue.bind(this, 1)}
          />
        </div>
        <div className={styles.container}>
          <div className={styles.label}>
            A controlled slider in default colors.
            <div>
              <span className={styles.boldText}>props: </span>
              min: 0, max: 1000, step: 50, value: {'{ start: 200, end: 900 }'}
            </div>
            <div className={styles.stateValue}>
              <span className={styles.boldText}>start: </span>
              {sliderValues[2] && sliderValues[2].start} &nbsp;
              <span className={styles.boldText}>end: </span>
              {sliderValues[2] && sliderValues[2].end}
            </div>
          </div>
          <div className={styles.inputSection}>
            <span>
              Start:
              <input
                type="number"
                className={styles.input}
                value={sliderValues[2] && sliderValues[2].start}
                onChange={this._updateControlledStart}
              />
            </span>
            <span>
              End:
              <input
                type="number"
                className={styles.input}
                value={sliderValues[2] && sliderValues[2].end}
                onChange={this._updateControlledEnd}
              />
            </span>
          </div>
          <RangeSlider
            min={0}
            max={1000}
            step={50}
            value={sliderValues[2]}
            onChange={this._setSliderValue.bind(this, 2)}
          />
        </div>
        <div className={styles.container}>
          <div className={styles.label}>
            A disabled component. Disabled component can not even be focused.
            <div>
              <span className={styles.boldText}>props: </span>
              min: 0, max: 100, step: 1, value: {'{ start: 20, end: 80 }'}, disabled: true
            </div>
          </div>
          <RangeSlider
            disabled
            defaultValue={{ start: 20, end: 80 }}
            trackClassName={styles.firstTrack}
            highlightedTrackClassName={styles.firstHighlightedTrack}
            handleClassName={styles.firstHandle}
          />
        </div>
        <div className={styles.container}>
          <div className={styles.label}>
            A readOnly component. ReadOnly component can be focused.
            <div>
              <span className={styles.boldText}>props: </span>
              min: 0, max: 100, step: 1, value: {'{ start: 20, end: 80 }'}, readOnly: true
            </div>
          </div>
          <RangeSlider
            readOnly
            defaultValue={{ start: 20, end: 80 }}
            trackClassName={styles.secondTrack}
            highlightedTrackClassName={styles.secondHighlightedTrack}
            handleClassName={styles.secondHandle}
          />
        </div>
      </div>
    );
  }
}
