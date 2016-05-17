/* @flow */

/**
  Some of the enzyme methods like hasClass fail at time, mostly with pure components.
  testUtils has some methods to help unit test coverage with enzyme.
*/
function getValues(obj: Object): Array {
  const vals = [];
  for (const key in obj) { // eslint-disable-line no-restricted-syntax
    if (obj.hasOwnProperty(key)) {
      vals.push(obj[key]);
    }
  }
  return vals;
}

export function getReactNativeNode(elm: Object): Object {
  return elm.node._reactInternalInstance._renderedComponent._nativeNode;
}

export function getReactClassNames(elm: Object): Object {
  return getValues(elm.node._reactInternalInstance._renderedComponent._nativeNode._classList);
}

export function getClassNames(elm: Object): Object {
  return getValues(elm.node._renderedComponent._nativeNode._classList);
}

export function getNativeNode(elm: Object): Object {
  return elm.node._renderedComponent._nativeNode;
}
