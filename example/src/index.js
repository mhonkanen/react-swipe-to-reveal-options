import React from 'react';
import { render } from 'react-dom';

import './css/style.css';
import './css/swipe-to-reveal-options.css';
import { SwipeToRevealList } from './components';

const leftOptions = [{ label: 'Undo', class: 'undo' }];
const rightOptions = [{ label: 'Complete', class: 'complete' }];
var items = [
	{
		leftOptions: leftOptions,
		rightOptions: rightOptions,
		content: 'Mail from Mathieu',
		callActionWhenSwipingFarLeft: true,
		callActionWhenSwipingFarRight: true
	},
	{
		leftOptions: leftOptions,
		rightOptions: rightOptions,
		content: 'Mail from Arseny',
		callActionWhenSwipingFarRight: true,
		callActionWhenSwipingFarLeft: false
	},
	{
		leftOptions: leftOptions,
		rightOptions: rightOptions,
		content: 'Mail from Bruno',
		callActionWhenSwipingFarRight: false,
		callActionWhenSwipingFarLeft: false
	}
];

const item = {
	leftOptions: [
		{
			label: 'Undo',
			class: 'undo'
		}
	],
	rightOptions: [
		{
			label: 'Complete',
			class: 'complete'
		}
	],
	content: `item `,
	callActionWhenSwipingFarLeft: true,
	callActionWhenSwipingFarRight: true
};

const App = () => <SwipeToRevealList items={items} />;

render(<App />, document.getElementById('root'));
// registerServiceWorker();
