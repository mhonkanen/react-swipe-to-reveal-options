import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipeable from './Swipeable';
import classnames from 'classnames';
import LeftRightButton from './LeftRightButton';
import '../css/swipe-to-reveal-options.css';

const translateStyle = (x, measure, y) => {
	var _y = y || '0';
	return {
		transform: 'translate3d(' + x + measure + ', ' + _y + ', 0)',
		WebkitTransform: 'translate3d(' + x + measure + ', ' + _y + ', 0)'
	};
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
	}
	componentWillUnmount() {
		if (this._timeout) {
			clearTimeout(this._timeout);
		}
		this.handleContentClick = this.handleContentClick.bind(this);
		this.transitionBack = this.transitionBack.bind(this);
	}

	swipingLeft(event, delta) {
		if (this.swipingHandleStylesAndDelta(delta, 'left')) {
			return;
		}

		var action = null;
		if (delta > this.props.visibilityThreshold) {
			action = 'rightVisible';
		}
		if (this.props.callActionWhenSwipingFarLeft && delta > this.props.actionThreshold) {
			action = 'rightAction';
		}

		this.setState({
			delta: -delta,
			action: action,
			swipingLeft: true
		});
	}

	swipingRight(event, delta) {
		if (this.swipingHandleStylesAndDelta(delta, 'right')) {
			return;
		}

		var action = null;
		if (delta > this.props.visibilityThreshold) {
			action = 'leftVisible';
		}
		if (this.props.callActionWhenSwipingFarRight && delta > this.props.actionThreshold) {
			action = 'leftAction';
		}

		this.setState({
			delta: delta,
			action: action,
			swipingRight: true
		});
	}
	swipingHandleStylesAndDelta(delta, direction) {
		if (this.shouldAbort(direction)) {
			return true;
		}

		this.shouldTransitionBack(direction);
		this.shouldCloseOthers(direction);

		return false;
	}

	shouldAbort(direction) {
		console.log('shouldAbort');
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
	shouldTransitionBack(direction) {
		console.log('shouldTransitionBack');
		const { showRightButtons, showLeftButtons } = this.state;
		if ((direction === 'right' && showRightButtons) || showLeftButtons) {
			this.transitionBack();
		}
	}

	swiped() {
		const { action } = this.state;
		console.log('swiped :' + action);
		switch (this.state.action) {
			case 'rightVisible':
				this.revealRight();
				break;
			case 'leftVisible':
				this.revealLeft();
				break;
			case 'leftAction':
				this.leftClick(this.props.leftOptions[0]);
				break;
			case 'rightAction':
				this.rightClick(this.props.rightOptions[this.props.rightOptions.length - 1]);
				break;
			default:
				console.error('need to handle');
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
		this._timeout = setTimeout(
			function() {
				this.setState({ transitionBack: false });
			}.bind(this),
			this.props.transitionBackTimeout
		);
	}

	shouldCloseOthers(direction) {
		console.log('shouldCloseOthers');
		const { closeOthers } = this.props;
		const { swipingRight, swipingLeft } = this.state;
		if (closeOthers) {
			if ((direction === 'right' && !swipingRight) || !swipingLeft) {
				closeOthers();
			}
		}
	}

	handleContentClick(event) {
		console.log('handleContentClick');
		const { closeOthers } = this.props;
		closeOthers();
		this.transitionBack();
	}

	getSpanStyle(side, index) {
		var width = this.getItemWidth(side);
		var factor = side === 'left' ? 1 : -1;
		var nbOptions = side === 'left' ? this.props.leftOptions.length : this.props.rightOptions.length;
		var padding;
		var style;

		if (
			this.state.transitionBack ||
			((side === 'left' && this.state.showLeftButtons) || this.state.showRightButtons)
		) {
			style = translateStyle(0, 'px', '-50%');
			style.width = width;
			return style;
		}

		if (
			Math.abs(this.state.delta) > this.props.actionThreshold &&
			((side === 'left' && this.props.callActionWhenSwipingFarRight) ||
				this.props.callActionWhenSwipingFarLeft) &&
			index === nbOptions - 1
		) {
			padding = 0;
		} else if (nbOptions * width < Math.abs(this.state.delta)) {
			padding += factor * (Math.abs(this.state.delta) - nbOptions * width) * 0.425;
		}
		style = translateStyle(padding, 'px', '-50%');
		style.width = width;

		return style;
	}
	getStyle(side, index) {
		var factor = side === 'left' ? -1 : 1;
		var nbOptions = side === 'left' ? this.props.leftOptions.length : this.props.rightOptions.length;
		var width = this.getItemWidth(side);
		var transition;
		var style;

		if (
			this.state.transitionBack ||
			((side === 'left' && this.state.showLeftButtons) || this.state.showRightButtons)
		) {
			style = translateStyle(factor * index * width, 'px');
			return style;
		}

		var modifier = index * 1 / nbOptions;
		var offset = -factor * modifier * this.state.delta;
		if (
			Math.abs(this.state.delta) > this.props.actionThreshold &&
			((side === 'left' && this.props.callActionWhenSwipingFarRight) ||
				this.props.callActionWhenSwipingFarLeft) &&
			index === nbOptions - 1
		) {
			transition = 'transform 0.15s ease-out';
			offset = 0;
		} else if (nbOptions * width < Math.abs(this.state.delta)) {
			offset += factor * (Math.abs(this.state.delta) - nbOptions * width) * 0.85;
		}
		style = translateStyle(offset, 'px');
		if (transition) {
			style.transition = transition;
		}

		return style;
	}

	getItemWidth(side) {
		var nbOptions = side === 'left' ? this.props.leftOptions.length : this.props.rightOptions.length;
		return Math.min(this.props.parentWidth / (nbOptions + 1), this.props.maxItemWidth);
	}

	getContainerStyle() {
		var itemWidth;
		if (this.state.delta === 0 && this.state.showRightButtons) {
			itemWidth = this.getItemWidth('right');
			return translateStyle(-this.props.rightOptions.length * itemWidth, 'px');
		} else if (this.state.delta === 0 && this.state.showLeftButtons) {
			itemWidth = this.getItemWidth('left');
			return translateStyle(this.props.leftOptions.length * itemWidth, 'px');
		}
		return translateStyle(this.state.delta, 'px');
	}
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

	close() {
		this.transitionBack();
	}

	leftClick(option) {
		console.log('leftClick');

		const { onLeftClick, transitionBackOnLeftClick } = this.props;
		onLeftClick(option);
		if (transitionBackOnLeftClick) this.transitionBack();
	}

	revealLeft() {
		console.log('revealLeft');
		const { onReveal } = this.props;
		onReveal('left');
		this.setState({ showRightButtons: false, showLeftButtons: true });
	}
	revealRight() {
		console.log('revealRight');
		const { onReveal } = this.props;
		onReveal('right');
		this.setState({ showRightButtons: true, showLeftButtons: false });
	}
	rightClick(option) {
		console.log('rightClick');
		const { onRightClick, transitionBackOnRightClick } = this.props;
		onRightClick(option);
		if (transitionBackOnRightClick) this.transitionBack();
	}

	render() {
		const { transitionBack, showRightButtons, showLeftButtons } = this.state;
		const { className, leftOptions, rightOptions } = this.props;
		const classes = classnames(className, {
			'stro-container': true,
			'transition-back': transitionBack,
			'show-right-buttons': showRightButtons,
			'show-left-buttons': showLeftButtons
		});

		return (
			<div className={classes} style={this.getContainerStyle()}>
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
