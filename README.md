# react-swipe-to-reveal-options2

[![Build Status](https://travis-ci.org/mookiejones/react-swipe-to-reveal-options.svg?branch=master)](https://travis-ci.org/mookiejones/react-swipe-to-reveal-options)  
[![NPM](https://img.shields.io/npm/v/react-swipe-to-reveal-options2.svg)](https://www.npmjs.com/package/react-swipe-to-reveal-options2)  

[![npm](https://img.shields.io/npm/dt/react-swipe-to-reveal-options2.svg)](https://www.npmjs.com/package/react-swipe-to-reveal-options2)



> Description

## Table of Contents  

- [Installation](#Installation)
- [Components](#components)
  - [Swipeable](#swipeable)
  - [SwipeItem](#swipeitem)
  - [SwipeToRevealList](#swipetoreveallist)
  - [SwipeToRevealOptions](#swipetorevealoptions)  
- [Example](#example)

## Installation
```bash
npm install --save react-swipe-to-reveal-options2

or

yarn add react-swipe-to-reveal-option2

```

## Components

### SwipeToRevealList  
The SwipeToRevealList is a single component to provide a list of swipeable items.
**Example**  

```jsx  
const items = [
      {
        leftOptions: [{
          label: 'Trash',
          class: 'trash'
        }],
        rightOptions: [{
          label: 'Move',
          class: 'move',
        },{
          label: 'Archive',
          class: 'archive',
        }],
        content: "Mail from Mathieu",
        callActionWhenSwipingFarLeft: true,
        callActionWhenSwipingFarRight: true
      },
];

const Example=()=>(
<SwipeToRevealList items={items} width={window.innerWidth}>
)


```  
#### PropTypes

|Name|Type|Default|Description|
| ------------- |:-------------:| -----:|-----:|
|width|Number|window.InnerWidth|Width of list *required*|
|items|Array|[]|Array of SwipePropType
---


### Swipeable
```jsx
<Swipeable>
```
#### PropTypes

|Name|Type|Default|Description|
| ------------- |:-------------:| -----:|-----:|
|delta|Number|10||
|flickThreshold|Number|0.6||
|onSwiped|func|()=>{}|Action to perform on swiped|  
|onSwipedDown|func|()=>{}|Action to perform when swiped down|
|onSwipedLeft|func|()=>{}|Action to perform when swiped left|
|onSwipedRight|func|()=>{}|Action to perform when swiped right|
|onSwipedUp|func|()=>{}|Action to perform on swiping up|
|onSwipingDown|func|()=>{}|Action to perform on swiping down|
|onSwipingLeft|func|()=>{}|Action to perform on swiping left|
|onSwipingRight|func|()=>{}|Action to perform on swiping right|
|onSwipingUp|func|()=>{}|Action to perform on swiping up| 

---

### SwipeItem  

|Name|Type|Default|Description|
| ------------- |:-------------:| -----:|-----:|
|disabled|Boolean|false|Disables item|
|onDoubleClick|func|()=>{})|Action on double click|
|onSingleTap|func|()=>{})|Action on single click|
|threshold|Number|45|Threshold|



#### OptionType

|Name|Type|Default|Description|
| ------------- |:-------------:| -----:|-----:|
|label|String|''|label|
|class|String|''|label|

#### SwipeItemPropType  

|Name|Type|Default|Description|
| ------------- |:-------------:| -----:|-----:|
|leftOptions|Array of OptionType|[]||
|rightOptions|Array of OptionType|[]||
|callActionWhenSwipingFarLeft|bool|{}||
|callActionWhenSwipingFarRight|bool|{}||




|Name|Type|Default|Description|
| ------------- |:-------------:| -----:|-----:|
|width|Number|window.InnerWidth|Width of list *required*|
|items|Array|[]|Array of SwipePropType

### SwipeToRevealOptions


## Example

Controlled usage:

```jsx
var SwipeToRevealOptions = require('react-swipe-to-reveal-options');

var App = React.createClass({
  render() {
    var items = [
      {
        leftOptions: [{
          label: 'Trash',
          class: 'trash'
        }],
        rightOptions: [{
          label: 'Move',
          class: 'move',
        },{
          label: 'Archive',
          class: 'archive',
        }],
        content: "Mail from Mathieu",
        callActionWhenSwipingFarLeft: true,
        callActionWhenSwipingFarRight: true
      },
      {
        leftOptions: [{
          label: 'Trash',
          class: 'trash'
        }],
        rightOptions: [{
          label: 'Move',
          class: 'move',
        },{
          label: 'Archive',
          class: 'archive',
        }],
        content: "Mail from Arseny",
        callActionWhenSwipingFarRight: true,
        callActionWhenSwipingFarLeft: false
      },
      {
        leftOptions: [{
          label: 'Trash',
          class: 'trash'
        }],
        rightOptions: [{
          label: 'Move',
          class: 'move',
        },{
          label: 'Archive',
          class: 'archive',
        }],
        content: "Mail from Bruno",
        callActionWhenSwipingFarRight: false,
        callActionWhenSwipingFarLeft: false
      }
    ];
    return (
      <div>
        items.map(function(item) {
          return (
            <SwipeToRevealOptions
              leftOptions={item.leftOptions}
              rightOptions={item.rightOptions}
              callActionWhenSwipingFarRight={item.callActionWhenSwipingFarRight}
              callActionWhenSwipingFarLeft={item.callActionWhenSwipingFarLeft}
            >
              {item.content}
            </SwipeToRevealOptions>
          );
        })
      </div>
    );
  },

});
```

## API

### Props

All props are optional.

##### rightOptions

Array of objects defining the options on the right. Each object need a `label` (which can be html) and a `class`. Default to [].

##### leftOptions

Array of objects defining the options on the left. Each object need a `label` (which can be html) and a `class`. Default to [].

##### className

Class of the Component

##### actionThreshold

Threshold (in px) before which the default action (if any, see `callActionWhenSwipingFar`) is called. Default to 300.

##### visibilityThreshold

Threshold (in px) before which the options are visible. Default to 50.

##### transitionBackTimeout

Timeout (in ms) of the transition to the default state. Default to 400.

##### callActionWhenSwipingFarLeft

Boolean defining if swiping far to the left should called the right most option. Default to false.

##### callActionWhenSwipingFarRight

Boolean defining if swiping far to the right should called the left most option. Default to false.

##### closeOthers

Function called when swiping. Useful to close other items in a list.

##### onRightClick

Function called when clicking on an option on the right. Received the clicked option as an argument.

Also called swiping far to the left (if applicable).

##### onLeftClick

Function called when clicking on an option on the left. Received the clicked option as an argument.

Also called swiping far to the right (if applicable).

##### transitionBackOnRightClick

Boolean defining if it should transition back to the default state after a right-side item is clicked/tapped. Defaults to true.

##### transitionBackOnLeftClick

Boolean defining if it should transition back to the default state after a left-side item is clicked/tapped. Defaults to true.

##### onReveal

Function called when showing options once the swipe is over. Receive `'left'` or `'right'`as an argument.

##### maxItemWidth

Maximum width (in px) of an option. Default to 120.

##### parentWidth

Width of the parent (in px). Default to the size of the screen.

### Methods

##### close()

Hide the options.

##### revealLeft()

Reveal the left options.

##### revealRight()

Reveal the right options.

## Styles

Look at [react-swipe-to-reveal-options.css](https://github.com/enkidevs/react-swipe-to-reveal-options/blob/master/react-swipe-to-reveal-options.css) for an idea on how to style this component.

## Contribute

To build form source:

```console
$ gulp
```

---


## License

MIT © [mookiejones](https://github.com/mookiejones)