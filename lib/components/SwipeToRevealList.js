import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeToRevealOptions from './SwipeToRevealOptions';
export default class SwipeToRevealList extends Component {
  render() {
    const {
      items,
      width
    } = this.props;
    return React.createElement("div", null, items.map((item, index) => {
      const key = `options-key-${index}`;
      return React.createElement(SwipeToRevealOptions, {
        key: key,
        leftOptions: item.leftOptions,
        rightOptions: item.rightOptions,
        callActionWhenSwipingFarRight: item.callActionWhenSwipingFarRight,
        callActionWhenSwipingFarLeft: item.callActionWhenSwipingFarLeft,
        actionThreshold: width
      }, item.content);
    }));
  }

}
const OptionType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired
});
SwipeToRevealList.propTypes = {
  width: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    leftOptions: PropTypes.arrayOf(OptionType),
    rightOptions: PropTypes.arrayOf(OptionType),
    content: PropTypes.any,
    callActionWhenSwipingFarLeft: PropTypes.bool,
    callActionWhenSwipingFarRight: PropTypes.bool
  }))
};