import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeToRevealOptions from './SwipeToRevealOptions';
export default class SwipeToRevealList extends Component {
	render() {
		const { items } = this.props;

		return (
			<div>
				{items.map(item => (
					<SwipeToRevealOptions
						leftOptions={item.leftOptions}
						rightOptions={item.rightOptions}
						callActionWhenSwipingFarRight={item.callActionWhenSwipingFarRight}
						callActionWhenSwipingFarLeft={item.callActionWhenSwipingFarLeft}
					>
						{item.content}
					</SwipeToRevealOptions>
				))}
			</div>
		);
	}
}

const OptionType = PropTypes.shape({
	label: PropTypes.string.isRequired,
	class: PropTypes.string.isRequired
});

SwipeToRevealList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			leftOptions: PropTypes.arrayOf(OptionType),
			rightOptions: PropTypes.arrayOf(OptionType),
			content: PropTypes.any,
			callActionWhenSwipingFarLeft: PropTypes.bool,
			callActionWhenSwipingFarRight: PropTypes.bool
		})
	)
};
