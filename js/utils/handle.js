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

export function calculateStyle(styles: Object, state: Object, props: Object): Object {
  const { hovered, focused, active } = state;
  const { offset, style, hoverStyle, focusStyle, activeStyle, disabledStyle, disabled } = props;
  let calcHoverStyle;
  let calcFocusStyle;
  let calcActiveStyle;
  let calcDisabledStyle;
  if (disabled) {
    calcDisabledStyle = { ...styles.disabledHandle, ...disabledStyle };
  } else {
    if (hovered) {
      calcHoverStyle = { ...styles.hoveredHandle, ...hoverStyle };
    }
    if (focused) {
      calcFocusStyle = { ...styles.focusedHandle, ...focusStyle };
    }
    if (active) {
      calcActiveStyle = { ...styles.activeHandle, ...activeStyle };
    }
  }
  return {
    ...(props.orientation === 'vertical' ? styles.handleVertical : styles.handle),
    ...style,
    ...{
      [`${props.orientation === 'vertical' ? 'bottom' : 'left'}`]: offset,
    },
    ...calcDisabledStyle,
    ...calcHoverStyle,
    ...calcFocusStyle,
    ...calcActiveStyle,
  };
}

export function getMousePosition(obj: Object, orientation: string): number {
  return orientation === 'vertical' ? obj.pageY : obj.pageX;
}
