import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import HighlightedTrack from '../index';
import { getReactClassNames } from '../../../testUtils';

describe('HighlightedTrack test suite', () => {
  it('should have a div when rendered', () => {
    expect(shallow(<HighlightedTrack left={20} width={10} />).node.type).to.equal('div');
  });

  it('should add className in props to the rendered div', () => {
    const highlightedTrack =
      mount(<HighlightedTrack className={'testClassName'} left={20} width={10} />);
    assert.isTrue(getReactClassNames(highlightedTrack).indexOf('testClassName') > 0);
  });

  it('should add left and width props to style', () => {
    const highlightedTrack = mount(<HighlightedTrack left={20} width={10} />);
    expect(highlightedTrack.node.style.left).to.equal(20);
    expect(highlightedTrack.node.style.width).to.equal(10);
  });
});
