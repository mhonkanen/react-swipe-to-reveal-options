import React from 'react';
import { selectV2 as select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {SwipeToRevealOptions} from '../src/components';
const right = action('onSwipingRight');
const left = action('onSwipingLeft');



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


const component = () => (
	<SwipeToRevealOptions

    leftOptions={item.leftOptions}
    rightOptions={item.rightOptions}
    callActionWhenSwipingFarRight={item.callActionWhenSwipingFarRight}
    callActionWhenSwipingFarLeft={item.callActionWhenSwipingFarLeft}
    onSwipingLeft={action('onSwipingLeft')}
    onSwipingRight={action('onSwipingRight')}
    onSwipedLeft={action('onSwipingLeft')}
	  onSwipedRight={action('onSwipingRight')}

	/>
);

export default component;
