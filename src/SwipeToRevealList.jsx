import React from 'react'
import PropTypes from 'prop-types'
import SwipeToRevealOptions from './SwipeToRevealOptions.jsx'
import { SwipeToRevealListItemPropType } from './Props.jsx';

import './index.css'
const SwipeToRevealList = ({ items, width }) => (
	<div>
		{items.map(({content, ...item}, index) => {
			const key = `options-key-${index}`
			return (
				<SwipeToRevealOptions
					key={key}
					{...item}
					actionThreshold={width}
				>
					{content}
				</SwipeToRevealOptions>
			)
		})}
	</div>
)

SwipeToRevealList.defaultProps = {
	width: window.innerWidth
}
SwipeToRevealList.propTypes = {
	items: PropTypes.arrayOf(SwipeToRevealListItemPropType),
	width: PropTypes.number.isRequired
}

export default SwipeToRevealList
