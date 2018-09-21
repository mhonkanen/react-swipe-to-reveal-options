import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LeftRightButton extends Component {
	render() {
		const { side, option, index, handleClick, getSpanStyle, getStyle } = this.props;

		let propsLabel = { style: getSpanStyle(side, index) };
		if (typeof option.label === 'string') {
			propsLabel.dangerouslySetInnerHTML = {
				___html: option.label
			};
		}
		let key = `swipe-${side}-option-${index}`;
		return (
			<div
				className={`stro-button stro-${side}-button ${option.class}`}
				key={key}
				onClick={() => handleClick(this, option)}
				style={getStyle(side, index)}
			>
				<span style={propsLabel.style} dangerouslySetInnerHTML={{ __html: option.label }}>
					{(typeof option.label !== 'string' && option.label) || void 0}
				</span>
			</div>
		);
	}
}

LeftRightButton.defaultProps = {
	side: 'left'
};
LeftRightButton.propTypes = {
	getStyle: PropTypes.func.isRequired,
	handleClick: PropTypes.func.isRequired,
	side: PropTypes.string,
	option: PropTypes.object,
	index: PropTypes.number,
	getSpanStyle: PropTypes.func
};
