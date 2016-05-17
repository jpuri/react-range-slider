# React Range Slider

An elegant range slider component for React.
[Demo Page](https://jqueryui.com/slider/).

## Installing

The library is available as npm package.

`npm install rr-slider`

## Using The component
The component is easy to use. A simple use can be when no properties are provided to the component, it takes default value of props:

```
import React from 'react';
import styles from './styles.css';
import RangeSlider from 'r-slider';

const MyPage = () =>its used to initialize
  <div className={ styles.container }>
    <RangeSlider />
  </div>;
```
IMPORTANT: Please make sure that you include styles from `RRSlider.css`. The file is available in /lib folder in the repository and also part of npm package.
In case you are using webpack for build, please make sure that you do **not** use ExtractTextPlugin to load this css file.

![Small cart in header](http://i.imgur.com/r7Ot84g.gif)

An example passing the range of values and step to the component:
```
import React from 'react';
import styles from './styles.css';
import RangeSlider from 'r-slider';

const MyPage = () =>
  <div className={ styles.container }>
    <RangeSlider min={ 20 } max={ 100 } step={ 5 } />
  </div>;
```

More advanced example of a controlled range slider component:
```
import React from 'react';
import styles from './styles.css';
import RangeSlider from 'r-slider';

const MyPage = (value, onChange) =>
  <div className={ styles.container }>
    <RangeSlider value={ value }
      onChange={ onChange }
      min={ 20 }
      max={ 100 }
      step={ 5 }
    />
  </div>;
```

## List of properties supported
| Option | Description |
| ------ | ----------- |
| id   | id of the root div element |
| name | name of the root div element |
| min    | minimum value in the range |
| max    | maximum value in the range |
| step    | amount by which the position of slider will change in one movement |
| defaultValue    | it is used to initialize uncontrolled components, it is an object containing 2 keys: start, end |
| value    | it is used to set value in a controlled component, it is also an object containing 2 keys: start, end  |
| onChange    | the function is executed whenever the value changes |
| afterChange    | the function is executed after the user has stopped moving the slider |
| disabled    | property used to disable component, disable component can not even receive focus |
| readOnly    | property used to make component readOnly, it can still be focused |
| tabIndex    | this is used to set the tabIndex of 2 handles which are moved to change value of slider |
| rootClassName    | class applied to root div element |
| handleClassName    | class applied to movable handles |
| trackClassName    | class applied to track |
| highlightedTrackClassName    | class applied to highlighted portion of track between handles |

## Custom styling
Styling of Range Slider is highly customizable. Properties rootClassName, handleClassName, trackClassName, highlightedTrackClassName described above can be used for custom styling of the component.
By default the component uses a set of classes for styling, which is not used if a class for styking is passes in props. For example see code for docs page.

## Device support
Range Slider is responsive to different sizes and resolutions. Its responsive to mouse, keyboard and touch events.

## Future plans
Adding more sliders component like vertical slider, range input with single handle, etc
[motivation](https://jqueryui.com/slider/).

## License
MIT.
