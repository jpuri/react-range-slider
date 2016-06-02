/* @flow */

import { assert } from 'chai';
import { has, notSimilar } from '../common';

describe('CommonUtils: has function test suite', () => {
  it('should return true when object has the property', () => {
    const obj = {
      value: 123,
    };
    assert.isTrue(has(obj, 'value'));
  });

  it('should return false when object does not has the property', () => {
    const obj = {
      value: 123,
    };
    assert.isNotTrue(has(obj, 'test'));
  });

  it('should work for array indexes', () => {
    const arr = [1, 2, 3];
    assert.isTrue(has(arr, 0));
    assert.isNotTrue(has(arr, 5));
  });
});

describe('CommonUtils: notSimilar test suite', () => {
  it('should check if defined objects are different on specific keys', () => {
    assert.isFalse(notSimilar({ key: 'value' }, { key: 'value' }, ['key']));
    assert.isFalse(
      notSimilar({
        key: 'value1', key1: 'value1',
      }, {
        key: 'value1', key1: 'value2',
      }, ['key']));
    assert.isTrue(
      notSimilar({ key: 'value1', key1: 'value1' }, { key: 'value2', key1: 'value2' }, ['key']));
  });
});
