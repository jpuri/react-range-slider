export default {
  handle: {
    position: 'absolute',
    display: 'inline-block',
    cursor: 'pointer',
    height: 30,
    width: 30,
    backgroundColor: '#2771e2',
    border: '1px solid #052350',
    outline: 'none !important',
  },
  handleVertical: {
    position: 'absolute',
    display: 'inline-block',
    cursor: 'pointer',
    height: 30,
    width: 30,
    left: 0,
    backgroundColor: '#2771e2',
    border: '1px solid #052350',

    outline: 'none !important',
  },
  focusedHandle: {
    border: '2px solid 052350',
  },
  hoveredHandle: {
    backgroundColor: 'white',
    border: '2px solid #052350',
    boxShadow: '0px 0px 5px 0px #0a53c3',
  },
  activeHandle: {
    backgroundColor: 'white',
    border: '2px solid #052350',
    boxShadow: 'inset 0px 0px 5px 0px #0a53c3',
  },
  disabledHandle: {
    backgroundColor: '#c4f9f4',
    border: '1px solid #71e4db',
    cursor: 'default',
  },
};
