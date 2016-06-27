export default {
  handle: {
    position: 'absolute',
    display: 'inline-block',
    cursor: 'pointer',
    height: 20,
    width: 20,
    backgroundColor: '#f1f1f1',
    border: '1px solid #b7b3b3',
    borderRadius: '50%',
    outline: 'none !important',
  },
  handleVertical: {
    position: 'absolute',
    display: 'inline-block',
    cursor: 'pointer',
    height: 20,
    width: 20,
    left: 0,
    backgroundColor: '#f1f1f1',
    border: '1px solid #b7b3b3',
    borderRadius: '50%',
    outline: 'none !important',
  },
  focusedHandle: {
    border: '1px solid #999999',
  },
  hoveredHandle: {
    backgroundColor: 'white',
    border: '1px solid #E6E6E6',
    boxShadow: '0px 0px 5px 0px #f2f2f2',
  },
  activeHandle: {
    backgroundColor: 'white',
    border: '1px solid #E6E6E6',
    boxShadow: 'inset 0px 0px 5px 0px #f2f2f2',
  },
  disabledHandle: {
    backgroundColor: '#f1ebeb',
    border: '1px solid #d2cece',
    cursor: 'default',
  },
};
