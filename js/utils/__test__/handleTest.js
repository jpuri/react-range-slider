/* @flow */

import { assert } from 'chai';
import { calculateStyle } from '../handle';

describe('HandleUtils: calculateStyle function test suite', () => {
  it('should add props.left to styles', () => {
    const obj = calculateStyle({}, {}, { left: 50 });
    assert.equal(obj.left, 50);
  });

  it('should add focus styles if component is focused', () => {
    const obj = calculateStyle(
      { focusedHandle: { backgroundColor: 'red' } },
      { focused: true },
      { focusStyle: { color: 'red' } }
    );
    assert.equal(obj.backgroundColor, 'red');
    assert.equal(obj.color, 'red');
  });

  it('should add hover styles if component is hovered', () => {
    const obj = calculateStyle(
      { hoveredHandle: { backgroundColor: 'red' } },
      { hovered: true },
      { hoverStyle: { color: 'red' } }
    );
    assert.equal(obj.backgroundColor, 'red');
    assert.equal(obj.color, 'red');
  });

  it('should add active styles if component is active', () => {
    const obj = calculateStyle(
      { activeHandle: { backgroundColor: 'red' } },
      { active: true },
      { activeStyle: { color: 'red' } }
    );
    assert.equal(obj.backgroundColor, 'red');
    assert.equal(obj.color, 'red');
  });

  it('should add disabled styles if component is disabled', () => {
    const obj = calculateStyle(
      { disabledHandle: { backgroundColor: 'red' } },
      { },
      { disabledStyle: { color: 'red' }, disabled: true }
    );
    assert.equal(obj.backgroundColor, 'red');
    assert.equal(obj.color, 'red');
  });

  it('should not add active, hover and focus styles to disabled component', () => {
    const obj = calculateStyle(
      {
        hoveredHandle: { backgroundColor: 'red' },
        activeHandle: { backgroundColor: 'red' },
        focusedHandle: { backgroundColor: 'red' },
      },
      { active: true, focused: true, hovered: true },
      {
        hoverStyle: { color: 'red' },
        focusStyle: { color: 'red' },
        activeStyle: { color: 'red' },
        disabled: true,
      },
    );
    assert.notEqual(obj.backgroundColor, 'red');
    assert.notEqual(obj.color, 'red');
  });

  it('should add default styles correctly', () => {
    const obj = calculateStyle(
      { handle: { backgroundColor: 'red' } },
      { },
      { style: { color: 'red' } }
    );
    assert.equal(obj.backgroundColor, 'red');
    assert.equal(obj.color, 'red');
  });
});
