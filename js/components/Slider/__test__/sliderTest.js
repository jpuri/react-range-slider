import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Slider from '../index';

describe('Slider test suite', () => {
  it('should have a div when rendered', () => {
    expect(shallow(<Slider />).node.type).to.equal('div');
  });

  it('should set the default props correctly', () => {
    const node = mount(<Slider />);
    expect(node.props().min).to.equal(0);
    expect(node.props().max).to.equal(100);
    expect(node.props().step).to.equal(1);
    expect(node.props().disabled).to.equal(false);
    expect(node.props().readOnly).to.equal(false);
  });

  it('should have 2 child nodes', () => {
    const slider = mount(<Slider max={10} min={2} />);
    expect(slider.children().length).to.equal(2);
  });
});
