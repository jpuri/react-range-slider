/* @flow */

import { has } from './common';

export function defaultValueValidator( // eslint-disable-line consistent-return
  props: Object,
  propName: string,
  componentName: string) {
  if (has(props, propName)) {
    const value = props[propName];
    if (value) {
      if (value.start && (isNaN(value.start) || value.start < props.min ||
        value.start > Math.min(props.max, value.end))) {
        return new Error(
          `${componentName}: The property value provided to the component is
          not correct, check value.start.`
        );
      }
      if (value.end && (isNaN(value.end) || value.end > props.max ||
        value.end < Math.min(props.min, value.start))) {
        return new Error(
          `${componentName}: The property value provided to the component is
          not correct, check value.end.`
        );
      }
    }
  }
}

export function valueValidator(props: Object, propName: string, componentName: string) {
  if (has(props, propName)) {
    if (!has(props, 'onChange') && !has(props, 'afterChange')) {
      return new Error(
        `${componentName}: If you do not provide onChange/afterChange method to controlled
        component it will result in readOnly component.`
      );
    }
  }
  return defaultValueValidator(props, propName, componentName);
}
