import React from 'react'
import PropTypes from 'prop-types'
import SwipeToRevealOptions from './SwipeToRevealOptions.jsx'
import './index.css'
const SwipeToRevealList = ({ items, width }) => (
  <div>
    {items.map((item, index) => {
			const key = `options-key-${index}`
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
			)
		})}
  </div>
)

const OptionType = PropTypes.shape({
	label: PropTypes.string.isRequired,
	class: PropTypes.string.isRequired
})
SwipeToRevealList.defaultProps = {
	width: window.innerWidth
}
SwipeToRevealList.propTypes = {
	width: PropTypes.number.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			leftOptions: PropTypes.arrayOf(OptionType),
			rightOptions: PropTypes.arrayOf(OptionType),
			content: PropTypes.any,
			callActionWhenSwipingFarLeft: PropTypes.bool,
			callActionWhenSwipingFarRight: PropTypes.bool
		})
	)
}

export default SwipeToRevealList
