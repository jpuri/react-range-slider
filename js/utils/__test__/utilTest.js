/* @flow */

import { assert } from 'chai';
import { has } from '../index';

describe('Track test suite', () => {
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
