import PropTypes from 'prop-types'


export const OptionType = PropTypes.shape({
    label: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired
})
export const SwipeItemPropType = PropTypes.shape({
    leftOptions: PropTypes.arrayOf(OptionType),
    rightOptions: PropTypes.arrayOf(OptionType),
    content: PropTypes.any,
    callActionWhenSwipingFarLeft: PropTypes.bool,
    callActionWhenSwipingFarRight: PropTypes.bool
})
