/* @flow */

export function has(obj: any, key: any): boolean {
  return obj !== undefined && obj !== null && Object.prototype.hasOwnProperty.call(obj, key);
}

export function stepValidator( // eslint-disable-line consistent-return
  props: Object,
  propName: string,
  componentName: string
) {
  if (has(props, propName)) {
    if (isNaN(props.step) || props.step <= 0) {
      return new Error(
        `${componentName}: Step should be provided a positive numeric value.`
      );
    }
  }
}

export function getValueOrAlt(value: any, altValue: any): any {
  if (value !== undefined && value !== null) {
    return value;
  }
  return altValue;
}

export function isDefined(value: any): boolean {
  return value !== undefined && value !== null;
}

export function notSimilar(obj1: Object, obj2: Object, keys: Array) {
  if (obj1 && obj2) {
    const differences = keys && keys.filter((k) => obj1[k] !== obj2[k]);
    return differences && differences.length > 0;
  }
  return undefined;
}
