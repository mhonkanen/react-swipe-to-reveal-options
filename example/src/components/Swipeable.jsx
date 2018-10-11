import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hammer from 'react-hammerjs';

import '../css/swipe-to-reveal-options.css';

const hammerOptions = {
	touchAction: 'pan-y',
	cssProps: {
		userSelect: ''
	},
	recognizers: {
		pinch: { enable: true },
		pan: { enable: true },
		tap: {
			time: 600,
			threshold: 100
		}
	}
};
export default class Swipeable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			startLeft: 0,
			isTransitioning: false,
			direction: null,
			leftOpen: false,
			rightOpen: false,
			leftActionsWidth: 0,
			rightActionsWidth: 0,
			isActive: false,
			x: null,
			y: null,
			swiping: false,
			start: 0
		};

		this.touchEnd = this.touchEnd.bind(this);
		this.handleSwipe = this.handleSwipe.bind(this);

		this.handleMoveStart = this.handleMoveStart.bind(this);

		this.handlePanEnd = this.handlePanEnd.bind(this);
		this.handlePanCancel = this.handlePanCancel.bind(this);
		this.handleMove = this.handleMove.bind(this);
		this.handleTap = this.handleTap.bind(this);
		this.handleDoubleTap = this.handleDoubleTap.bind(this);
	}

	calculatePos(e) {
		const x = e.changedTouches[0].clientX;
		const y = e.changedTouches[0].clientY;

		const xd = this.state.x - x;
		const yd = this.state.y - y;

		const axd = Math.abs(xd);
		const ayd = Math.abs(yd);

		return {
			deltaX: xd,
			deltaY: yd,
			absX: axd,
			absY: ayd
		};
	}
	closeActions() {
		const { isActive } = this.state;
		if (isActive) return;

		this.setState({
			leftOpen: false,
			rightOpen: false,
			startLeft: 0
		});
	}

	/**
	 * handleMoveStart
	 * @param {*} e
	 */
	handleMoveStart(e) {
		const { disabled } = this.props;

		if (disabled) {
			debugger;
			return;
		}
		const { deltaY, additionalEvent } = e;
		const { clientX, clientY } = this.getPointers(e);
		let state = {
			isTransitioning: false,
			start: Date.now(),
			x: clientX,
			y: clientY,
			swiping: false
		};
		if (deltaY > -5 && deltaY <= 5) {
			let direction = /((?:left|right))/gi.exec(additionalEvent)[0];
			state.leftActionsWidth = direction === 'left' ? 0 : clientX;
			state.rightActionsWidth = direction === 'right' ? 0 : clientY;

			state.startLeft = this.distanceSwiped();
			state.isActive = true;

			if (e.deltaX > 0) state.direction = 'ltr';
			if (e.deltaX < 0) state.direction = 'rtl';
		}
		this.setState(state);
	}

	distanceSwiped() {}
	handleSwipe(e) {
		const direction = e.direction === 1 ? 'right' : 'left';

		console.log(`handlingSwipe: ${direction}`);

		// console.dir(e);
	}

	handleTap(e) {
		console.log('handleTap');
	}

	handleDoubleTap(e) {
		console.log('handleDoubleTap');
	}

	getPointers(e) {
		const { additionalEvent, changedPointers, changedTouches } = e;
		if (changedTouches && changedPointers) {
			debugger;
		}
		if (changedTouches) return changedTouches[0];
		if (changedPointers) return changedPointers[0];
		throw new Error('Fix getPointers');
	}

	/**
	 * calculatePosition
	 * @param {*} e
	 */
	calculatePosition(e) {
		const { x, y } = this.state;
		const pointer = this.getPointers(e);

		const { clientX, clientY } = pointer;

		const xd = x - clientX;
		const yd = y - clientY;

		const axd = Math.abs(xd);
		const ayd = Math.abs(yd);

		return {
			deltaX: xd,
			deltaY: yd,
			absX: axd,
			absY: ayd
		};
	}

	handleMove(e) {
		const { x, y, isActive, startLeft } = this.state;
		const { disabled, delta, onSwipingLeft, onSwipingRight, onSwipingUp, onSwipingDown } = this.props;

		if (!isActive || disabled) return;

		const { touches, pointers } = e;

		const newX = startLeft + e.deltaX;

		if (touches && (!x || !y || e.touches.length > 1)) {
			return;
		}

		if (pointers && (!x || !y || e.pointers.length > 1)) return;

		let cancelPageSwipe = false;

		const { absX, absY, deltaX, deltaY } = this.calculatePosition(e);

		if (absX < delta && absY < delta) {
			return;
		}

		if (absX > absY) {
			if (deltaX > 0) {
				if (onSwipingLeft) {
					onSwipingLeft(e, absX);
					cancelPageSwipe = true;
				}
			} else if (onSwipingRight) {
				onSwipingRight(e, absX);
				cancelPageSwipe = true;
			}
		} else if (deltaY > 0) {
			if (onSwipingUp) {
				onSwipingUp(e, absY);
				cancelPageSwipe = true;
			}
		} else if (onSwipingDown) {
			onSwipingDown(e, absY);
			cancelPageSwipe = true;
		}

		this.setState({ swiping: true });

		if (cancelPageSwipe) {
			// debugger;
			// e.preventDefault();
		}
	}

	handlePanCancel(ev) {
		debugger;
	}

	handlePanEnd(ev) {
		const { swiping, start, isActive } = this.state;
		const {
			disabled,
			flickThreshold,
			onSwiped,
			onSwipedLeft,
			onSwipedRight,
			onSwipedUp,
			onSwipedDown
		} = this.props;

		if (!isActive || disabled) {
			debugger;
			return;
		}
		if (swiping) {
			const { absX, absY, deltaX, deltaY } = this.calculatePosition(ev);

			const time = Date.now() - start;
			const velocity = Math.sqrt(absX * absX + absY * absY) / time;
			const isFlick = velocity > flickThreshold;

			onSwiped && onSwiped(ev, deltaX, deltaY, isFlick);

			if (absX > absY) {
				if (deltaX > 0) {
					onSwipedLeft && onSwipedLeft(ev, deltaX);
				} else {
					onSwipedRight && onSwipedRight(ev, deltaX);
				}
			}
		}

		this.setState({
			x: null,
			y: null,
			swiping: false,
			start: 0
		});
	}

	touchEnd(ev) {
		const { swiping, start } = this.state;
		const { flickThreshold, onSwiped, onSwipedLeft, onSwipedRight, onSwipedUp, onSwipedDown } = this.props;
		if (swiping) {
			const pos = this.calculatePos(ev);

			const time = Date.now() - start;
			const velocity = Math.sqrt(pos.absX * pos.absX + pos.absY * pos.absY) / time;
			const isFlick = velocity > flickThreshold;

			onSwiped && onSwiped(ev, pos.deltaX, pos.deltaY, isFlick);

			if (pos.absX > pos.absY) {
				if (pos.deltaX > 0) {
					onSwipedLeft && onSwipedLeft(ev, pos.deltaX);
				} else {
					onSwipedRight && onSwipedRight(ev, pos.deltaX);
				}
			} else if (pos.deltaY > 0) {
				onSwipedUp && onSwipedUp(ev, pos.deltaY);
			} else {
				onSwipedDown && onSwipedDown(ev, pos.deltaY);
			}
		}

		this.setState({
			x: null,
			y: null,
			swiping: false,
			start: 0
		});
	}

	render() {
		const props = Object.assign({}, this.props, {
			onPanMove: this.handlePanMove,
			onPanStart: this.handleMoveStart,
			onPanLeft: this.handlePanMove,
			onPanRight: this.handlePanMove,
			onTouchStart: this.handlePanStart,
			onTouchMove: this.touchMove,
			onTouchEnd: this.touchEnd
		});
		const { disabled } = this.state;
		const customPropNames = [
			'onSwiped',
			'onSwipingUp',
			'onSwipingRight',
			'onSwipingLeft',
			'onSwipedUp',
			'onSwipedRight',
			'onSwipedDown',
			'onSwipedLeft',
			'flickThreshold',
			'onPanStart',
			'onPanMove',
			'onPanLeft',
			'onPanRight',
			'delta'
		];
		for (const name of customPropNames) {
			delete props[name];
		}

		return (
			<Hammer
				direction="DIRECTION_HORIZONTAL"
				options={hammerOptions}
				onSwipe={disabled ? null : this.handleSwipe}
				onSwipeLeft={disabled ? null : this.onSwipeLeft}
				onSwipeRight={disabled ? null : this.onSwipeRight}
				onPan={disabled ? null : this.handleMove}
				onPanStart={disabled ? null : this.handleMoveStart}
				onPanEnd={disabled ? null : this.handlePanEnd}
				onPanCancel={disabled ? null : this.handlePanCancel}
				onTap={disabled ? null : this.handleTap}
				onDoubleTap={disabled ? null : this.handleDoubleTap}
			>
				<div {...props}>{this.props.children}</div>
			</Hammer>
		);
	}
}

Swipeable.propTypes = {
	delta: PropTypes.number,
	/**Is the item disabled */
	disabled: PropTypes.bool,
	flickThreshold: PropTypes.number,
	onSwiped: PropTypes.func,
	onSwipedDown: PropTypes.func,
	onSwipedLeft: PropTypes.func,
	onSwipedRight: PropTypes.func,
	onSwipingLeft: PropTypes.func,
	onSwipingRight: PropTypes.func,
	threshold: PropTypes.number
};
Swipeable.defaultProps = {
	disabled: false,
	flickThreshold: 0.6,
	delta: 10,
	onSwiped: () => {},
	onSwipingRight: () => {},
	onSwipingLeft: () => {},
	onSwipedLeft: () => {},
	onSwipedRight: () => {},
	threshold: 45
};
