import React from 'react';
import { spy } from 'sinon';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Handle from '../index';
import { getReactClassNames } from '../../../testUtils';

describe('Handle test suite', () => {
  it('should have a div when rendered', () => {
    expect(shallow(
      <Handle
        factor={1}
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
      />).node.type).to.equal('div');
  });

  xit('should add className in props to the rendered div', () => {
    assert.isTrue(getReactClassNames(mount(
      <Handle
        factor={1}
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
        className="testClassName"
      />))
      .indexOf('testClassName') > 0);
  });

  it('should have false value for state variables hovered and active by default', () => {
    const handle = mount(
      <Handle
        factor={1}
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
      />
    );
    expect(handle.state().hovered).to.equal(false);
    expect(handle.state().active).to.equal(false);
  });

  it('should execute function handleRef when component is mount', () => {
    const handleRef = spy();
    mount(<Handle
      handleRef={handleRef}
      factor={1}
      handleMove={() => {}}
      afterChange={() => {}}
    />);
    assert.isTrue(handleRef.calledOnce);
  });

  it('should add props values of left to the component styles', () => {
    const handle = mount(
      <Handle
        offset={10}
        factor={1}
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
      />
    );
    expect(handle.node.style.left).to.equal(10);
  });

  it('should add props values of bottom to the component styles for vertical orientation', () => {
    const handle = mount(
      <Handle
        offset={10}
        factor={1}
        orientation="vertical"
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
      />
    );
    expect(handle.node.style.bottom).to.equal(10);
  });

  it('should set state to active when mouse is down', () => {
    const handle = mount(
      <Handle
        offset={10}
        right={50}
        factor={1}
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
      />
    );
    expect(handle.state().active).to.equal(false);
    handle.simulate('mouseDown');
    expect(handle.state().active).to.equal(true);
  });

  it('should set state to active when mouse is down', () => {
    const handle = mount(
      <Handle
        left={10}
        right={50}
        factor={1}
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
      />
    );
    expect(handle.state().active).to.equal(false);
    handle.simulate('mouseDown');
    expect(handle.state().active).to.equal(true);
  });

  it('should set state to hovered when mouse is above it', () => {
    const handle = mount(
      <Handle
        left={10}
        right={50}
        factor={1}
        handleRef={() => {}}
        handleMove={() => {}}
        afterChange={() => {}}
      />
    );
    expect(handle.state().hovered).to.equal(false);
    handle.simulate('mouseEnter');
    expect(handle.state().hovered).to.equal(true);
    handle.simulate('mouseLeave');
    expect(handle.state().hovered).to.equal(false);
  });

  it('should add disabledClass if component is disabled', () => {
    const handle =
      shallow(<Handle disabledClassName={'testing'} />);
    expect(handle.node.props.disabled).to.not.equal(true);
    expect(handle.node.props.className.indexOf('testing') >= 0).to.not.equal(true);
    const disabledHandle =
      shallow(<Handle disabled disabledClassName={'testing'} />);
    expect(disabledHandle.node.props.disabled).to.equal(true);
    expect(disabledHandle.node.props.className.indexOf('testing') >= 0).to.equal(true);
  });

  it('should add disabledStyle if component is disabled', () => {
    const handle =
      shallow(<Handle componentdisabledStyle={{ color: 'red' }} />);
    expect(handle.node.props.disabled).to.not.equal(true);
    expect(handle.node.props.style.color).to.not.equal('red');
    const disabledHandle =
      shallow(<Handle disabled disabledStyle={{ color: 'red' }} />);
    expect(disabledHandle.node.props.disabled).to.equal(true);
    expect(disabledHandle.node.props.style.color).to.equal('red');
  });
});
