import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeToRevealOptions from './SwipeToRevealOptions';
export default class SwipeToRevealList extends Component {
	render() {
		const { items } = this.props;

		const width = window.outerWidth;
		return (
			<div>
				{items.map((item, index) => {
					const key = `options-key-${index}`;
					return (
						<SwipeToRevealOptions
							key={key}
							leftOptions={item.leftOptions}
							rightOptions={item.rightOptions}
							callActionWhenSwipingFarRight={item.callActionWhenSwipingFarRight}
							callActionWhenSwipingFarLeft={item.callActionWhenSwipingFarLeft}
							actionThreshold={width}
						>
							{item.content}
						</SwipeToRevealOptions>
					);
				})}
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