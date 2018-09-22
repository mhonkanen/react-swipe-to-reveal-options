import React from 'react';
import { selectV2 as select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {Swipeable} from '../src/components';


const right = action('onSwipingRight');
const left = action('onSwipingLeft');

const data={leftOptions: [{
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
	<Swipeable
	onSwipingLeft={action('onSwipingLeft')}
	onSwipingRight={action('onSwipingRight')}
	
	
	/>
);


{/* 


		isChecked={boolean('isChecked',false)}
		onCheckChange={action('onCheckChange')}
		title={text('title','listtop')}
		role={options.role}
		users={[]}
		connected={boolean('Connected', true)}
		environment={options.environment}
		selectedAssemblyFlow={text('SelectedAssemblyFlow', '')}
		OSName={options.os}
		currentRevision={text('currentRevision', 'mlh_4')}
		currentRoundNumber={text('Current Round', '2')}
		currentUser={USER}
		updateAf={action(args => console.log(args))}
		handleLogout={action(() => console.log('clicked'))}
		users={users}
		logoutUser={() => (userIsActive = false)}

*/}
export default component;
