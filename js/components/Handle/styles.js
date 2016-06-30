export default {
  handle: {
    position: 'absolute',
    display: 'inline-block',
    cursor: 'pointer',
    height: 30,
    width: 30,
    backgroundColor: '#dcfffc',
    border: '2px solid #71e4db',
    borderRadius: '50%',
    outline: 'none !important',
  },
  handleVertical: {
    position: 'absolute',
    display: 'inline-block',
    cursor: 'pointer',
    height: 30,
    width: 30,
    left: 0,
    backgroundColor: '#dcfffc',
    border: '2px solid #71e4db',
    borderRadius: '50%',
    outline: 'none !important',
  },
  focusedHandle: {
    border: '2px solid #11ada1',
  },
  hoveredHandle: {
    backgroundColor: 'white',
    border: '2px solid #6ae1ef',
    boxShadow: '0px 0px 5px 0px #71e4db',
  },
  activeHandle: {
    backgroundColor: 'white',
    border: '2px solid #6ae1ef',
    boxShadow: 'inset 0px 0px 5px 0px #71e4db',
  },
  disabledHandle: {
    backgroundColor: '#c4f9f4',
    border: '1px solid #71e4db',
    cursor: 'default',
  },
};
