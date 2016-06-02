export default {
  root: {
    width: '50%',
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  description: {
    color: '#545252',
  },
  label: {
    marginBottom: 10,
  },
  valueText: {
    color: '#000066',
    fontWeight: '600',
  },
  code: {
    margin: '10px 0',
    textAlign: 'left',
  },
  info: {
    fontStyle: 'italic',
    color: '#3131d4',
    fontSize: 15,
    margin: '5px 0',
  },
  sliderWrapper: {
    width: '75%',
  },
  slider: {
    height: 32,
  },
  trackStyle: {
    height: 5,
    border: '3px solid black',
    backgroundColor: 'white',
    top: 14,
  },
  handleStyle: {
    height: 30,
    width: 30,
    border: '5px solid black',
    backgroundColor: '#dc0d0d',
  },
  hoveredHandleStyle: {
    backgroundColor: 'white',
    border: '5px solid black',
    boxShadow: '0px 0px 5px 0px #dc0d0d',
  },
  activeHandleStyle: {
    backgroundColor: 'white',
    border: '5px solid black',
    boxShadow: 'inset 0px 0px 5px 0px #dc0d0d',
  },
  focusedHandleStyle: {
    boxShadow: '0px 0px 5px 0px #dc0d0d',
    border: '5px solid black',
  },
};
