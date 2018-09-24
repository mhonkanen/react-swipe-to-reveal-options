# react-swipe-to-reveal-options


> Simple [React](http://facebook.github.io/react/) component for a swipe-to-reveal-option item.

Ported version from https://github.com/enkidevs/react-swipe-to-reveal-options

### [Demo](http://enkidevs.github.io/react-swipe-to-reveal-options/)

[![Demo](https://cdn.rawgit.com/enki-com/react-swipe-to-reveal-options/master/example/demo.gif "Demo")](https://github.com/enki-com/react-swipe-to-reveal-options/blob/master/example/index.html)

## Install

```console
$ npm install react-swipe-to-reveal-options2 --save
```

or

```console
$ yarn react-swipe-to-reveal-options2
```

## Example

Controlled usage:

```javascript
import SwipeToRevealList from 'react-swipe-to-reveal-options2'

const App = ()=>{
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
      <SwipeToRevealList items={items}/>
    );
} 
```

## API

### Props

#### SwipeToRevealList
##### items
Array of objects defining
```javascript
{
  leftOptions:[
    {
      label:String,
      class:String
    }
  ],
  rightOptions:[
     {
      label:String,
      class:String
    }
  ],
  content:Object,
  callActionWhenSwipingFarLeft:Boolean,
  callActionWhenSwipingFarRight:Boolean,


}
```

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

MIT Licensed
