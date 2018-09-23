import React from 'react';
import { render } from 'react-dom';

import {SwipeToRevealList,SwipeToRevealOptions,Swipeable,LeftRightButton } from './components';
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




const item={leftOptions: [{
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
  content: `item `,
  callActionWhenSwipingFarLeft: true,
  callActionWhenSwipingFarRight: true
};




const App = () => (

	<div>
<SwipeToRevealList items={items}/>
	</div>
);

render(<App />, document.getElementById('root'));
// registerServiceWorker();
