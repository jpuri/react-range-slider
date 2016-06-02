import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Gradient from '../index';

describe('Gradient test suite', () => {
  it('should have a div when rendered', () => {
    expect(shallow(<Gradient />).node.type).to.equal('div');
  });
});
