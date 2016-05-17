import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Gradient from '../index';
import { getReactClassNames } from '../../../testUtils';

describe('Gradient test suite', () => {
  it('should have a div when rendered', () => {
    expect(shallow(<Gradient />).node.type).to.equal('div');
  });

  it('should add className in props to the rendered div', () => {
    assert.isTrue(getReactClassNames(mount(<Gradient className="testClassName" />))
      .indexOf('testClassName') > 0);
  });
});
