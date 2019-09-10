import React from 'react'
import PropTypes from 'prop-types'
import SwipeToRevealOptions from './SwipeToRevealOptions.jsx'
import { SwipeToRevealListItemPropType } from './Props';

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

SwipeToRevealList.defaultProps = {
	width: window.innerWidth
}
SwipeToRevealList.propTypes = {
	width: PropTypes.number.isRequired,
	items: PropTypes.arrayOf(SwipeToRevealListItemPropType)
}

export default SwipeToRevealList
