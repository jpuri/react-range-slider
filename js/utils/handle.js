/* flow */

import { canUseDOM } from 'exenv';

let styleElement;

export function injectStyle(): void {
  if (canUseDOM && !styleElement) {
    styleElement = document.createElement('style');
    document.body.appendChild(styleElement);
    styleElement.innerHTML = '.handle:focus { outline: none !important;}';
  }
}

export function removeStyle(): void {
  if (canUseDOM && styleElement) {
    document.body.removeChild(styleElement);
  }
}

export function calculateStyle(styles, state, props): Object {
  const { hover, focus, active } = state;
  const { left, style, hoverStyle, focusStyle, activeStyle } = props;
  const calcHoverStyle = hover
    ? { ...styles.handleHover, ...hoverStyle }
    : undefined;
  const calcFocusStyle = focus
    ? { ...styles.handleFocus, ...focusStyle }
    : undefined;
  const calcActiveStyle = active
    ? { ...styles.handleActive, ...activeStyle }
    : undefined;
  return {
    ...styles.handle,
    ...style,
    ...{
      left,
    },
    ...calcHoverStyle,
    ...calcFocusStyle,
    ...calcActiveStyle,
  };
}
// todo: test coverage
