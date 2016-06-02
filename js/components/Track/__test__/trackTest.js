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

  xit('should add className in props to the rendered div', () => {
    assert.isTrue(getReactClassNames(
      mount(<Track className="testClassName" trackRef={trackRef} />))
      .indexOf('testClassName') > 0);
  });

  it('should execute track ref to give reference of track when component is mount', () => {
    mount(<Track trackRef={trackRef} />);
    expect(trackReference instanceof Element).to.equal(true);
  });

  it('should add disabledClass if component is disabled', () => {
    const track =
      shallow(<Track trackRef={trackRef} disabledClassName={'testing'} />);
    expect(track.node.props.disabled).to.not.equal(true);
    expect(track.node.props.className).to.not.equal('testing');
    const disabledTrack =
      shallow(<Track trackRef={trackRef} disabled disabledClassName={'testing'} />);
    expect(disabledTrack.node.props.disabled).to.equal(true);
    expect(disabledTrack.node.props.className).to.equal('testing');
  });

  it('should add disabledStyle if component is disabled', () => {
    const track =
      shallow(<Track trackRef={trackRef} disabledStyle={{ color: 'red' }} />);
    expect(track.node.props.disabled).to.not.equal(true);
    expect(track.node.props.style.color).to.not.equal('red');
    const disabledTrack =
      shallow(<Track trackRef={trackRef} disabled disabledStyle={{ color: 'red' }} />);
    expect(disabledTrack.node.props.disabled).to.equal(true);
    expect(disabledTrack.node.props.style.color).to.equal('red');
  });
});
