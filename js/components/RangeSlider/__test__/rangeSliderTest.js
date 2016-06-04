import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import RangeSlider from '../index';

describe('rangeSlider test suite', () => {
  it('should have a div when rendered', () => {
    expect(shallow(<RangeSlider />).node.type).to.equal('div');
  });

  it('should set the default props correctly', () => {
    const node = mount(<RangeSlider />);
    expect(node.props().min).to.equal(0);
    expect(node.props().max).to.equal(100);
    expect(node.props().step).to.equal(1);
    expect(node.props().disabled).to.equal(false);
    expect(node.props().readOnly).to.equal(false);
  });

  it('should have 4 child nodes', () => {
    const rangeSlider = mount(<RangeSlider max={10} min={2} />);
    expect(rangeSlider.children().length).to.equal(4);
  });
});
