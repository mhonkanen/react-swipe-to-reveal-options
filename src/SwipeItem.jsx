import React, { useState, useRef } from 'react'
import Hammer from 'react-hammerjs'
import PropTypes from 'prop-types'
import './index.css'

const SwipeItem = ({ disabled, threshold, onSingleTap, onDoubleTap ,onTap}) => {
	const [state, toggleState] = useState({
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
	})

	const swipeRef = useRef()

	const animateSlide = (num, old) => {}

	const closeActions = () => {
		const { isActive } = state
		if (isActive) return

		animateSlide(0, distanceSwiped())
		this.toggleState({ ...state, leftOpen: false, rightOpen: false, startLeft: 0 })
	}

	const reveal = (left = true) => {
		const { isActive, leftActionsWidth, rightActionsWidth } = state
		if (isActive) return

		const item = left ? 'left' : 'right'
		const action = left ? leftActionsWidth : -rightActionsWidth

		const oldLeft = swipeRef.current.content.getBoundingClientRect().left
		toggleState({ ...state, [`${item}Open`]: true })

		animateSlide(action, oldLeft)
	}

	const revealLeft = () => reveal()
	const revealRight = () => reveal(false)

	const handleTap = e => {}

	const handleDoubleTap = e => {}

	const handleSwipe = e => {}

	handlePanStart = ({ deltaX, deltaY }) => {
		if (this.disbaled) return null
		const { isTransitioning } = this.state
		this.setState({ isTransitioning: false })

		if (deltaY >= -5 && deltaY <= 5) {
			const leftActionsWidth = this.$refs.left ? this.$refs.left.clientWidth : 0
			const rightActionsWidth = this.$refs.right ? this.$refs.right.clientWidth : 0

			this.startLeft = this._distanceSwiped()
			this.isActive = true

			let direction = 'ltr'

			if (deltaX > 0) direction = 'ltr'
			if (deltaX < 0) direction = 'rtl'

			this.setState({
				leftActionsWidth,
				rightActionsWidth,
				direction
			})
		}

		this.closeActions()
	}

	const handlePanEnd = event => {
		const { isActive, direction, startLeft, leftActionsWidth, rightActionsWidth } = state

		if (!isActive || disabled) return

		const oldLeft = swipeRef.current.content.getBoundingClientRect().left
		toggleState({ ...state, isActive: false })

		// close left actions
		if (startLeft > 0 && event.deltaX <= -threshold) closeActions() // _animateSlide(0, oldLeft);

		// close right actions
		if (startLeft < 0 && event.deltaX >= threshold) closeActions() // this._animateSlide(0, oldLeft);

		const currentLeft = startLeft + event.deltaX

		// reveal left actions
		if (startLeft === 0 && direction === 'ltr' && currentLeft >= threshold) {
			return animateSlide(leftActionsWidth, oldLeft)
		}

		// reveal right actions
		if (startLeft === 0 && direction === 'rtl' && currentLeft <= -threshold) {
			return animateSlide(-rightActionsWidth, oldLeft)
		}

		return animateSlide(this.startLeft, oldLeft)
	}

	return (
  <Hammer
    onDoubleTap={disabled ? null : onDoubleTap}
    onTap={disabled ? null : onTap}
    onPanStart={disabled ? null : handlePanStart}
    onPanEnd={disabled ? null : handlePanEnd}
    onSwipe={handleSwipe}
		/>
	)
}
SwipeItem.defaultProps = {
	threshold: 45,
	disabled: false
}
SwipeItem.propTypes = {
	disabled: PropTypes.bool,
	onDoubleClick: PropTypes.func,
	onSingleTap: PropTypes.func,
	threshold: PropTypes.number
}

export default SwipeItem
