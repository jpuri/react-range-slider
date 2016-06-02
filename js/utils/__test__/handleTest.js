/* @flow */

import { assert } from 'chai';
import { calculateStyle } from '../handle';

describe('HandleUtils: calculateStyle function test suite', () => {
  it('should add props.left to styles', () => {
    const obj = calculateStyle({}, {}, { left: 50 });
    assert.equal(obj.left, 50);
  });

  it('should add focus styles if element is focused', () => {
    const obj = calculateStyle(
      { handleFocus: { backgroundColor: 'red' } },
      { focus: true },
      { focusStyle: { color: 'red' } }
    );
    assert.equal(obj.backgroundColor, 'red');
    assert.equal(obj.color, 'red');
  });

  it('should add hover styles if element is hovered', () => {
    const obj = calculateStyle(
      { handleHover: { backgroundColor: 'red' } },
      { hover: true },
      { hoverStyle: { color: 'red' } }
    );
    assert.equal(obj.backgroundColor, 'red');
    assert.equal(obj.color, 'red');
  });

  it('should add active styles if element is active', () => {
    const obj = calculateStyle(
      { handleActive: { backgroundColor: 'red' } },
      { active: true },
      { activeStyle: { color: 'red' } }
    );
    assert.equal(obj.backgroundColor, 'red');
    assert.equal(obj.color, 'red');
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
