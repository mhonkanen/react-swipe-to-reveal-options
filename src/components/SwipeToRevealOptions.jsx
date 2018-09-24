import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipeable from './Swipeable';
import classnames from 'classnames';
import LeftRightButton from './LeftRightButton';

const translateStyle = (x, measure, y) => {
	var _y = y || '0';

	var _x = x || 0;
	if (Number.isNaN(x)) _x = 0;
	let translate = `translate3d(${_x}${measure},${_y},0)`;

	const result = {
		transform: translate,
		WebkitTransform: translate
	};

	return result;
};

export default class SwipeToRevealOptions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			delta: 0,
			showRightButtons: false,
			showLeftButtons: false,
			swipingLeft: false,
			swipingRight: false,
			transitionBack: false,
			action: null,
			callActionWhenSwipingFarRight: false,
			callActionWhenSwipingFarLeft: false,
			transitionBackOnRightClick: true,
			transitionBackOnLeftClick: true
		};
		this.getStyle = this.getStyle.bind(this);
		this.getSpanStyle = this.getSpanStyle.bind(this);
		this.swipingRight = this.swipingRight.bind(this);
		this.swipingLeft = this.swipingLeft.bind(this);
		this.swiped = this.swiped.bind(this);
		this.rightClick = this.rightClick.bind(this);
		this.leftClick = this.leftClick.bind(this);
		// this.swipingHandleStylesAndDelta=this.swipingHandleStylesAndDelta.bind(this);
	}

	componentWillUnmount() {
		if (this._timeout) {
			clearTimeout(this._timeout);
		}
		this.handleContentClick = this.handleContentClick.bind(this);
		this.transitionBack = this.transitionBack.bind(this);
	}

	/**
	 * @class SwipeToRevealOptions
	 * @description swipingLeft
	 * @param {Event} event
	 * @param {Number} delta
	 */
	swipingLeft(event, delta) {
		const { visibilityThreshold, actionThreshold, callActionWhenSwipingFarLeft } = this.props;
		if (this.swipingHandleStylesAndDelta(delta, 'left')) {
			return;
		}

		var action = null;
		if (delta > visibilityThreshold) {
			action = 'rightVisible';
		}
		if (callActionWhenSwipingFarLeft && delta > actionThreshold) {
			action = 'rightAction';
		}

		this.setState({
			delta: -delta,
			action: action,
			swipingLeft: true
		});
	}

	/**
	 * @class SwipeToRevealOptions
	 * @description swipingRight
	 * @param {Event} event
	 * @param {Number} delta
	 */
	swipingRight(event, delta) {
		const { visibilityThreshold, actionThreshold, callActionWhenSwipingFarRight } = this.props;
		if (this.swipingHandleStylesAndDelta(delta, 'right')) {
			return;
		}

		var action = null;
		if (delta > visibilityThreshold) {
			action = 'leftVisible';
		}
		if (callActionWhenSwipingFarRight && delta > actionThreshold) {
			action = 'leftAction';
		}

		this.setState({
			delta: delta,
			action: action,
			swipingRight: true
		});
	}

	/**
	 * swipingHandleStylesAndDelta
	 * @param {Number} delta
	 * @param {String} direction
	 */
	swipingHandleStylesAndDelta(delta, direction) {
		if (this.shouldAbort(direction)) {
			return true;
		}

		this.shouldTransitionBack(direction);
		this.shouldCloseOthers(direction);

		return false;
	}

	/**
	 * shouldAbort
	 * @param {String} direction
	 */
	shouldAbort(direction) {
		const { transitionBack, showRightButtons, showLeftButtons } = this.state;
		const { leftOptions, rightOptions, callActionWhenSwipingFarRight, callActionWhenSwipingFarLeft } = this.props;
		if (transitionBack) {
			return true;
		}
		if (direction === 'right') {
			return (!leftOptions.length && !showRightButtons) || (showLeftButtons && !callActionWhenSwipingFarRight);
		} else {
			return (!rightOptions.length && !showLeftButtons) || (showRightButtons && !callActionWhenSwipingFarLeft);
		}
	}

	/**
	 * shouldTransitionBack
	 * @param {string} direction
	 */
	shouldTransitionBack(direction) {
		const { showRightButtons, showLeftButtons } = this.state;
		if ((direction === 'right' && showRightButtons) || showLeftButtons) {
			this.transitionBack();
		}
	}

	/**
	 * swiped
	 */
	swiped() {
		const { action } = this.state;
		const { rightOptions, leftOptions, transitionBackTimeout } = this.props;

		switch (action) {
			case 'rightVisible':
			case 'leftVisible':
				let direction = /^((?:left|right))/i.exec(action)[0];
				this.reveal(direction);
				break;

			case 'leftAction':
				this.leftClick(leftOptions[0]);
				break;
			case 'rightAction':
				this.rightClick(rightOptions[rightOptions.length - 1]);
				break;
			default:
				if (action) console.error('need to handle:' + action);
				break;
		}
		this.setState({
			delta: 0,
			action: null,
			swipingLeft: false,
			swipingRight: false,
			secondarySwipe: false,
			transitionBack: true
		});
		if (this._timeout) {
			clearTimeout(this._timeout);
		}
		this._timeout = setTimeout(() => this.setState({ transitionBack: false }), transitionBackTimeout);
	}

	/**
	 * shouldCloseOthers
	 * @param {'left'|'right'} direction
	 */
	shouldCloseOthers(direction) {
		const { closeOthers } = this.props;
		const { swipingRight, swipingLeft } = this.state;
		if (closeOthers) {
			if ((direction === 'right' && !swipingRight) || !swipingLeft) {
				closeOthers();
			}
		}
	}

	/**
	 * handleContentClick
	 */
	handleContentClick() {
		const { closeOthers } = this.props;
		closeOthers();
		this.transitionBack();
	}

	/**
	 * getSpanStyle
	 * @param {'left'|'right'} side
	 * @param {Number} index
	 */
	getSpanStyle(side, index) {
		var width = this.getItemWidth(side);
		var factor = side === 'left' ? 1 : -1;

		const {
			leftOptions,
			rightOptions,
			actionThreshold,
			callActionWhenSwipingFarRight,
			callActionWhenSwipingFarLeft
		} = this.props;
		const { showLeftButtons, showRightButtons, transitionBack, delta } = this.state;
		var nbOptions = side === 'left' ? leftOptions.length : rightOptions.length;
		var padding;
		var style;

		if (transitionBack || ((side === 'left' && showLeftButtons) || showRightButtons)) {
			style = translateStyle(0, 'px', '-50%');
			style.width = width;
			return style;
		}

		if (
			Math.abs(delta) > actionThreshold &&
			((side === 'left' && callActionWhenSwipingFarRight) || callActionWhenSwipingFarLeft) &&
			index === nbOptions - 1
		) {
			padding = 0;
		} else if (nbOptions * width < Math.abs(this.state.delta)) {
			padding += factor * (Math.abs(delta) - nbOptions * width) * 0.425;
		}
		style = translateStyle(padding, 'px', '-50%');
		style.width = width;

		return style;
	}

	/**
	 * getStyle
	 * @param {'left'|'right'} side
	 * @param {Number} index
	 */
	getStyle(side, index) {
		const {
			leftOptions,
			rightOptions,
			actionThreshold,
			callActionWhenSwipingFarRight,
			callActionWhenSwipingFarLeft
		} = this.props;
		const { showLeftButtons, showRightButtons, transitionBack, delta } = this.state;
		var factor = side === 'left' ? -1 : 1;

		var nbOptions = side === 'left' ? leftOptions.length : rightOptions.length;
		var width = this.getItemWidth(side);
		var transition;
		var style;

		if (transitionBack || ((side === 'left' && showLeftButtons) || showRightButtons)) {
			style = translateStyle(factor * index * width, 'px');
			return style;
		}

		var modifier = index * 1 / nbOptions;
		var offset = -factor * modifier * delta;
		if (
			Math.abs(delta) > actionThreshold &&
			((side === 'left' && callActionWhenSwipingFarRight) || callActionWhenSwipingFarLeft) &&
			index === nbOptions - 1
		) {
			transition = 'transform 0.15s ease-out';
			offset = 0;
		} else if (nbOptions * width < Math.abs(delta)) {
			offset += factor * (Math.abs(delta) - nbOptions * width) * 0.85;
		}
		style = translateStyle(offset, 'px');
		if (transition) {
			style.transition = transition;
		}

		return style;
	}

	/**
	 * getItemWidth
	 * @param {'left'|'right'} side
	 */
	getItemWidth(side) {
		const { leftOptions, rightOptions, parentWidth, maxItemWidth } = this.props;
		var nbOptions = side === 'left' ? leftOptions.length : rightOptions.length;
		return Math.min(parentWidth / (nbOptions + 1), maxItemWidth);
	}

	/**
	 * getContainerStyle
	 */
	getContainerStyle() {
		const { delta, showRightButtons, showLeftButtons } = this.state;
		const { rightOptions, leftOptions } = this.props;
		var itemWidth;
		if (delta === 0 && showRightButtons) {
			itemWidth = this.getItemWidth('right');
			return translateStyle(-rightOptions.length * itemWidth, 'px');
		} else if (delta === 0 && showLeftButtons) {
			itemWidth = this.getItemWidth('left');
			return translateStyle(leftOptions.length * itemWidth, 'px');
		}
		return translateStyle(delta, 'px');
	}

	/**
	 * transitionBack
	 */
	transitionBack() {
		const { onClose, transitionBackTimeout } = this.props;
		onClose();
		this.setState({
			showLeftButtons: false,
			showRightButtons: false,
			transitionBack: true
		});
		if (this._timeout) {
			clearTimeout(this._timeout);
		}
		this._timeout = setTimeout(() => this.setState({ transitionBack: false }), transitionBackTimeout);
	}

	/**
	 * close
	 */
	close() {
		this.transitionBack();
	}

	/**
	 * leftClick
	 * @param {LeftRightButton} option
	 */
	leftClick(option) {
		const { onLeftClick, transitionBackOnLeftClick } = this.props;
		onLeftClick(option);
		if (transitionBackOnLeftClick) this.transitionBack();
	}

	/**
	 * reveal
	 * @param {'left'|'right'} direction
	 */
	reveal(direction) {
		const { onReveal } = this.props;
		onReveal(direction);

		this.setState({
			showRightButtons: direction === 'right',
			showLeftButtons: direction === 'left'
		});
	}

	/**
	 * rightClick
	 * @param {LeftRightButton} option
	 */
	rightClick(option) {
		const { onRightClick, transitionBackOnRightClick } = this.props;
		onRightClick(option);
		if (transitionBackOnRightClick) this.transitionBack();
	}

	/**
	 * render
	 */
	render() {
		const { transitionBack, showRightButtons, showLeftButtons } = this.state;
		const { className, leftOptions, rightOptions } = this.props;
		const classes = classnames(className, {
			'stro-container': true,
			'transition-back': transitionBack,
			'show-right-buttons': showRightButtons,
			'show-left-buttons': showLeftButtons
		});
		const containerStyle = this.getContainerStyle();

		return (
			<div className={classes} style={containerStyle}>
				<div className="stro-left">
					{leftOptions.map((option, index) => (
						<LeftRightButton
							key={`left-${index}`}
							getSpanStyle={this.getSpanStyle}
							index={index}
							getStyle={this.getStyle}
							option={option}
							handleClick={this.leftClick}
						/>
					))}
				</div>

				<Swipeable
					className="stro-content"
					onSwipingLeft={this.swipingLeft}
					onClick={() => this.handleContentClick()}
					onSwipingRight={this.swipingRight}
					delta={15}
					onSwiped={this.swiped}
				>
					{this.props.children}
				</Swipeable>
				<div className="stro-right">
					{rightOptions.map((option, index) => (
						<LeftRightButton
							key={`right-${index}`}
							getSpanStyle={this.getSpanStyle}
							side="right"
							index={index}
							option={option}
							getStyle={this.getStyle}
							handleClick={this.rightClick}
						/>
					))}
				</div>
			</div>
		);
	}
}

SwipeToRevealOptions.propTypes = {
	rightOptions: PropTypes.array,
	leftOptions: PropTypes.array,
	className: PropTypes.string,
	actionThreshold: PropTypes.number,
	visibilityThreshold: PropTypes.number,
	transitionBackTimeout: PropTypes.number,
	callActionWhenSwipingFarLeft: PropTypes.bool,
	callActionWhenSwipingFarRight: PropTypes.bool,
	transitionBackOnRightClick: PropTypes.bool,
	transitionBackOnLeftClick: PropTypes.bool,
	closeOthers: PropTypes.func,
	onRightClick: PropTypes.func,
	onLeftClick: PropTypes.func,
	onReveal: PropTypes.func,
	onClose: PropTypes.func,
	maxItemWidth: PropTypes.number,
	parentWidth: PropTypes.number
};

SwipeToRevealOptions.defaultProps = {
	rightOptions: [],
	leftOptions: [],
	className: '',
	actionThreshold: 300,
	visibilityThreshold: 50,
	transitionBackTimeout: 400,
	onRightClick: () => {},
	onLeftClick: () => {},
	onReveal: () => {},
	onClose: () => {},
	closeOthers: () => {},
	maxItemWidth: 120,
	parentWidth:
		(typeof window !== 'undefined' && window.outerWidth) ||
		(typeof window.screen !== 'undefined' && window.screen.width) ||
		320
};
