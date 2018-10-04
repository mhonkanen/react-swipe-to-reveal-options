import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class LeftRightButton extends Component {
  render() {
    const {
      side,
      option,
      index,
      handleClick,
      getSpanStyle,
      getStyle
    } = this.props;
    const propsLabel = {
      style: getSpanStyle(side, index)
    };
    const labelType = typeof option.label;

    if (labelType === 'string') {
      propsLabel.dangerouslySetInnerHTML = {
        ___html: option.label
      };
    }

    const key = `swipe-${side}-option-${index}`;
    return React.createElement("div", {
      className: `stro-button stro-${side}-button ${option.class}`,
      key: key,
      onClick: () => handleClick(this, option),
      style: getStyle(side, index)
    }, React.createElement("span", {
      style: propsLabel.style,
      dangerouslySetInnerHTML: {
        __html: option.label
      }
    }, typeof option.label !== 'string' && option.label || option.label()));
  }

}
LeftRightButton.defaultProps = {
  side: 'left'
};
LeftRightButton.propTypes = {
  getSpanStyle: PropTypes.func,
  getStyle: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  index: PropTypes.number,
  option: PropTypes.object,
  side: PropTypes.string
};