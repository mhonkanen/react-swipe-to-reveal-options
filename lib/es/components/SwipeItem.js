import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import PropTypes from 'prop-types';
const options = {
  touchAction: 'pan-y'
};
export default class SwipeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hammer: null,
      startLeft: 0,
      isActive: false,
      isTransitioning: false,
      direction: null,
      hasLeft: 'left' in this.$slots,
      hasRight: 'right' in this.$slots,
      leftOpen: false,
      rightOpen: false,
      leftActionsWidth: 0,
      rightActionsWidth: 0
    };
    this.handleDoubleTap = this.handleDoubleTap.bind(this);
    this.handleTap = this.handleTap.bind(this);
    this.handlePanStart = this.handlePanStart.bind(this);
    this.handlePanEnd = this.handlePanEnd.bind(this);
    this.handleSwipe = this.handleSwipe.bind(this);
  }

  closeActions() {
    if (this.isActive) return;

    this._animateSlide(0, this._distanceSwiped());

    this.leftOpen = false;
    this.rightOpen = false;
    this.startLeft = 0;
  }

  revealLeft() {
    const {
      isActive,
      leftActionsWidth
    } = this.state;
    if (isActive) return;
    const oldLeft = this.$refs.content.getBoundingClientRect().left;
    this.setState({
      leftOpen: true
    });

    this._animateSlide(leftActionsWidth, oldLeft);
  }

  revealRight() {
    const {
      isActive,
      rightActionsWidth
    } = this.state;
    if (isActive) return;
    const oldLeft = this.$refs.content.getBoundingClientRect().left;
    this.setState({
      rightOpen: true
    });

    this._animateSlide(-rightActionsWidth, oldLeft);
  }

  animateSlide(num, old) {}

  closeActions() {
    const {
      isActive
    } = this.state;
    if (isActive) return;
    this.animateSlide(0, this._distanceSwiped());
    this.setState({
      leftOpen: false,
      rightOpen: false,
      startLeft: 0
    });
  }

  handleTap(e) {}

  handleDoubleTap(e) {}

  handleSwipe(e) {}

  handlePanStart({
    deltaX,
    deltaY
  }) {
    if (this.disbaled) return null;
    const {
      isTransitioning
    } = this.state;
    this.setState({
      isTransitioning: false
    });

    if (deltaY >= -5 && deltaY <= 5) {
      const leftActionsWidth = this.$refs.left ? this.$refs.left.clientWidth : 0;
      const rightActionsWidth = this.$refs.right ? this.$refs.right.clientWidth : 0;
      this.startLeft = this._distanceSwiped();
      this.isActive = true;
      let direction = 'ltr';
      if (deltaX > 0) direction = 'ltr';
      if (deltaX < 0) direction = 'rtl';
      this.setState({
        leftActionsWidth,
        rightActionsWidth,
        direction
      });
    }

    this.closeActions();
  }

  handlePanEnd(event) {
    const {
      isActive,
      startLeft,
      leftActionsWidth,
      rightActionsWidth
    } = this.state;
    const {
      disabled,
      threshold
    } = this.props;
    if (!isActive || disabled) return;
    const oldLeft = this.$refs.content.getBoundingClientRect().left;
    this.isActive = false; // close left actions

    if (startLeft > 0 && event.deltaX <= -threshold) this.closeActions(); // _animateSlide(0, oldLeft);
    // close right actions

    if (startLeft < 0 && event.deltaX >= threshold) this.closeActions(); // this._animateSlide(0, oldLeft);

    const currentLeft = this.startLeft + event.deltaX; // reveal left actions

    if (this.startLeft === 0 && this.direction === 'ltr' && currentLeft >= this.threshold) return animateSlide(leftActionsWidth, oldLeft); // reveal right actions

    if (this.startLeft === 0 && this.direction === 'rtl' && currentLeft <= -this.threshold) return animateSlide(-rightActionsWidth, oldLeft);
    return this.animateSlide(this.startLeft, oldLeft);
  }

  render() {
    const {
      disabled,
      onSingleTap,
      onDoubleTap
    } = this.props;
    return React.createElement(Hammer, {
      onDoubleTap: disabled ? null : onDoubleTap,
      onTap: disabled ? null : onTap,
      onPanStart: disabled ? null : this.handlePanStart,
      onPanEnd: disabled ? null : this.handlePanEnd,
      onSwipe: this.handleSwipe
    });
  }

}
SwipeItem.defaultProps = {
  threshold: 45,
  disabled: false
};
SwipeItem.propTypes = {
  disabled: PropTypes.bool,
  onDoubleClick: PropTypes.func,
  onSingleTap: PropTypes.func,
  threshold: PropTypes.number
};