import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Swipeable from './Swipeable';
import SwipeToRevealList from './SwipeToRevealList';
import SwipeToRevealOptions from './SwipeToRevealOptions';
import { Button, Welcome } from '@storybook/react/demo';

import '../src/css/swipe-to-reveal-options.css';
const knobOptions = {
	knobs: {
		timestamps: true, // Doesn't emit events while user is typing.
		escapeHTML: true // Escapes strings to be safe for inserting as innerHTML. This option is true by default in storybook for Vue, Angular, and Polymer, because those frameworks allow rendering plain HTML.
		// You can still set it to false, but it's strongly unrecommendend in cases when you host your storybook on some route of your main site or web app.
	}
};

const stories = storiesOf('Welcome', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories
  .addDecorator(withKnobs)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
  .add('SwipeToRevealList',()=><SwipeToRevealList/>,knobOptions)
  .add('SwipeToRevealOptions',()=><SwipeToRevealOptions/>,knobOptions)
  .add('Swipeable', ()=><Swipeable/>, knobOptions);


const buttons=storiesOf('Button', module)
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
buttons.addDecorator(withKnobs);
buttons.add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
buttons.add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
