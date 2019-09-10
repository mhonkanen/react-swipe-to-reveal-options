import PropTypes from 'prop-types'


export const OptionType = PropTypes.shape({
    label: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired
})
export const SwipeToRevealListItemPropType = PropTypes.shape({
    leftOptions: PropTypes.arrayOf(OptionType),
    rightOptions: PropTypes.arrayOf(OptionType),
    content: PropTypes.any,
    callActionWhenSwipingFarLeft: PropTypes.bool,
    callActionWhenSwipingFarRight: PropTypes.bool
})


export const SwipeItemPropType = PropTypes.shape({
    disabled: PropTypes.bool,
    onDoubleClick: PropTypes.func,
    onSingleTap: PropTypes.func,
    threshold: PropTypes.number
});