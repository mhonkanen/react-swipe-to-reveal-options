import React from 'react'
import PropTypes from 'prop-types'
const LeftRightButton = ({ side, option, index, handleClick, getSpanStyle, getStyle }) => {
	const propsLabel = { style: getSpanStyle(side, index) }
	const labelType = typeof option.label
	console.log(`labelType: ${labelType}`)
	if (labelType === 'string') {
		propsLabel.dangerouslySetInnerHTML = {
			___html: option.label
		}
	}
	const key = `swipe-${side}-option-${index}`

	const getLabel = () => {
		if (typeof option.label === 'string') return option.label
		return option.label()
	}
	return (
  <div
    className={`stro-button stro-${side}-button ${option.class}`}
    key={key}
    onClick={e => handleClick(e, option)}
    style={getStyle(side, index)}
		>
    <span style={propsLabel.style}>{getLabel()}</span>
  </div>
	)
}

LeftRightButton.defaultProps = {
	side: 'left'
}
LeftRightButton.propTypes = {
	getSpanStyle: PropTypes.func,
	getStyle: PropTypes.func.isRequired,
	handleClick: PropTypes.func.isRequired,
	index: PropTypes.number,
	option: PropTypes.object,
	side: PropTypes.string
}
export default LeftRightButton
