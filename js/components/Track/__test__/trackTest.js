import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Track from '../index';
import { getReactClassNames } from '../../../testUtils';

describe('Track test suite', () => {
  let trackReference;
  const trackRef = (node) => {
    trackReference = node;
  };

  it('should have a div when rendered', () => {
    expect(shallow(<Track trackRef={trackRef} />).node.type).to.equal('div');
  });

  it('should add className in props to the rendered div', () => {
    assert.isTrue(getReactClassNames(
      mount(<Track className="testClassName" trackRef={trackRef} />))
      .indexOf('testClassName') > 0);
  });

  it('should execute track ref to give reference of track when component is mount', () => {
    mount(<Track trackRef={trackRef} />);
    expect(trackReference instanceof Element).to.equal(true);
  });
});
