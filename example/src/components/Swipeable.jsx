import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/swipe-to-reveal-options.css';

export default class Swipeable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			x: null,
			y: null,
			swiping: false,
			start: 0
		};
		this.touchStart=this.touchStart.bind(this);
		this.touchMove=this.touchMove.bind(this);
		this.touchEnd=this.touchEnd.bind(this);
	}
	getInitialState(){
		return {
			x: null,
			y: null,
			swiping: false,
			start: 0
		};
	}

	calculatePos(e) {

		var x = e.changedTouches[0].clientX;
		var y = e.changedTouches[0].clientY;

		var xd = this.state.x - x;
		var yd = this.state.y - y;

		var axd = Math.abs(xd);
		var ayd = Math.abs(yd);

		return {
			deltaX: xd,
			deltaY: yd,
			absX: axd,
			absY: ayd
		};
	}
	touchStart(e) {
		if (e.touches.length > 1) {
			return;
		}
		this.setState({
			start: Date.now(),
			x: e.touches[0].clientX,
			y: e.touches[0].clientY,
			swiping: false
		});
	}

	touchMove(e) {

		const { x, y } = this.state;
		const { delta, onSwipingLeft, onSwipingRight, onSwipingUp, onSwipingDown } = this.props;
		if (!x || !y || e.touches.length > 1) {
			return;
		}

		var cancelPageSwipe = false;
		const { absX, absY, deltaX, deltaY } = this.calculatePos(e);

		if (absX < delta && absY < delta) {
			return;
		}

		if (absX > absY) {
			if (deltaX > 0) {
				if (onSwipingLeft) {
					onSwipingLeft(e, absX);
					cancelPageSwipe = true;
				}
			} else {
				if (onSwipingRight) {
					onSwipingRight(e, absX);
					cancelPageSwipe = true;
				}
			}
		} else {
			if (deltaY > 0) {
				if (onSwipingUp) {
					onSwipingUp(e, absY);
					cancelPageSwipe = true;
				}
			} else {
				if (onSwipingDown) {
					onSwipingDown(e, absY);
					cancelPageSwipe = true;
				}
			}
		}

		this.setState({ swiping: true });

		if (cancelPageSwipe) {
			// debugger;
			// e.preventDefault();
		}
	}

	touchEnd(ev) {
		
		const { swiping, start } = this.state;
		const { flickThreshold, onSwiped, onSwipedLeft, onSwipedRight, onSwipedUp, onSwipedDown } = this.props;
		if (swiping) {
			var pos = this.calculatePos(ev);

			var time = Date.now() - start;
			var velocity = Math.sqrt(pos.absX * pos.absX + pos.absY * pos.absY) / time;
			var isFlick = velocity > flickThreshold;

			onSwiped && onSwiped(ev, pos.deltaX, pos.deltaY, isFlick);

			if (pos.absX > pos.absY) {
				if (pos.deltaX > 0) {
					onSwipedLeft && onSwipedLeft(ev, pos.deltaX);
				} else {
					onSwipedRight && onSwipedRight(ev, pos.deltaX);
				}
			} else {
				if (pos.deltaY > 0) {
					onSwipedUp && onSwipedUp(ev, pos.deltaY);
				} else {
					onSwipedDown && onSwipedDown(ev, pos.deltaY);
				}
			}
		}

		this.setState(this.getInitialState());
	}

	render() {
		var props = Object.assign({}, this.props, {
			onTouchStart: this.touchStart,
			onTouchMove: this.touchMove,
			onTouchEnd: this.touchEnd
		});
		var customPropNames = [
			'onSwiped',
			'onSwipingUp',
			'onSwipingRight',
			'onSwipingLeft',
			'onSwipedUp',
			'onSwipedRight',
			'onSwipedDown',
			'onSwipedLeft',
			'flickThreshold',
			'delta'
		];
		for (let name of customPropNames) {
			 delete props[name];
		}
		return <div {...props}>{this.props.children}</div>;
	}
}


Swipeable.propTypes = {
	onSwiped: PropTypes.func,
	onSwipingUp: PropTypes.func,
	onSwipingRight: PropTypes.func,
	onSwipingDown: PropTypes.func,
	onSwipingLeft: PropTypes.func,
	onSwipedUp: PropTypes.func,
	onSwipedRight: PropTypes.func,
	onSwipedDown: PropTypes.func,
	onSwipedLeft: PropTypes.func,
	flickThreshold: PropTypes.number,
	delta: PropTypes.number
};
Swipeable.defaultProps = {
	flickThreshold: 0.6,
	delta: 10,
	onSwiped:()=>{},
	onSwipingUp:()=>{},
	onSwipingRight:()=>{},
	onSwipingLeft:()=>{},
	onSwipedUp:()=>{},
	onSwipedLeft:()=>{},
	onSwipedRight:()=>{}





};