import React from 'react';
import { selectV2 as select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {SwipeToRevealList} from '../src/components';
import '../src/css/style.css';
import '../src/css/swipe-to-reveal-options.css';





const component = () => {

    let items = [];

    for(let i =0;indexedDB<25;i++){
        items.push(  {leftOptions: [{
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
          content: `item ${i}`,
          callActionWhenSwipingFarLeft: true,
          callActionWhenSwipingFarRight: true
    });}
    return (
        <div>
            

        <SwipeToRevealList items={items}/>
        </div>
);}

export default component;
