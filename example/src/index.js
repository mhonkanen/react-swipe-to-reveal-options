import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import './css/swipe-to-reveal-options.css';
import { SwipeToRevealList } from './components';

const leftOptions = [{ label: 'Undo', class: 'undo' }];
const rightOptions = [{ label: 'Complete', class: 'complete' }];

const items = [
	{
		leftOptions,
		rightOptions,
		content: 'Mail from Mathieu',
		callActionWhenSwipingFarLeft: true,
		callActionWhenSwipingFarRight: true
	},
	{
		leftOptions,
		rightOptions,
		content: 'Mail from Arseny',
		callActionWhenSwipingFarRight: true,
		callActionWhenSwipingFarLeft: false
	},
	{
		leftOptions,
		rightOptions,
		content: 'Mail from Bruno',
		callActionWhenSwipingFarRight: false,
		callActionWhenSwipingFarLeft: false
	}
];

const App = () => <SwipeToRevealList items={items} />;

render(<App />, document.getElementById('root'));
// registerServiceWorker();
