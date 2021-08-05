'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "body {\r\n  background: #bebfbf;\r\n  color: #0099cc;\r\n  font-family: sans-serif;\r\n  overflow-x: hidden; }\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box; }\r\n\r\n.index_stro-content__3LKXX {\r\n  background: #eeefef;\r\n  padding-left: 2em;\r\n  line-height: 65px;\r\n  border-bottom: 1px solid #aaa; }\r\n\r\n#index_root__4PyOE {\r\n  overflow-x: hidden; }\r\n\r\n.index_complete__117g2 {\r\n  color: #fff;\r\n  background: #3498db; }\r\n\r\n.index_archive__kKBQt {\r\n  color: #fff;\r\n  background: #3498db;\r\n  background: #e67e22; }\r\n\r\n.index_undo__Acwcm {\r\n  color: #fff;\r\n  background: #c0392b; }\r\n\r\n.index_stro-container__qKDcP {\r\n  width: 300%;\r\n  margin-left: -100%;\r\n  position: relative;\r\n  height: 65px; }\r\n  .index_stro-container__qKDcP .index_transition-back__1JTbD {\r\n    transition: all 0.4s ease; }\r\n\r\n.index_stro-left__1grGQ,\r\n.index_stro-content__3LKXX,\r\n.index_stro-right__3BUN9 {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 33.33333333%;\r\n  height: 100%;\r\n  vertical-align: top; }\r\n\r\n.index_stro-button__3d-RD {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%; }\r\n  .index_stro-button__3d-RD span {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translate(0, -50%);\r\n    display: block; }\r\n  .index_stro-button__3d-RD .index_stro-right-button__9dHa5 {\r\n    left: 0; }\r\n    .index_stro-button__3d-RD .index_stro-right-button__9dHa5 span {\r\n      left: 0;\r\n      text-align: center; }\r\n  .index_stro-button__3d-RD .index_stro-left-button__2SE-L {\r\n    right: 0; }\r\n    .index_stro-button__3d-RD .index_stro-left-button__2SE-L span {\r\n      right: 0;\r\n      text-align: center; }\r\n\r\n.index_stro-button__3d-RD.index_stro-left-button__2SE-L {\r\n  right: 0; }\r\n  .index_stro-button__3d-RD.index_stro-left-button__2SE-L span {\r\n    right: 0;\r\n    text-align: center; }\r\n\r\n.index_stro-button__3d-RD.index_stro-right-button__9dHa5 {\r\n  left: 0; }\r\n  .index_stro-button__3d-RD.index_stro-right-button__9dHa5 span {\r\n    left: 0;\r\n    text-align: center; }\r\n\r\n.index_stro-container__qKDcP.index_show-right-buttons__DbcQN,\r\n.index_stro-container__qKDcP.index_show-left-buttons__noVuj,\r\n.index_stro-container__qKDcP.index_show-right-buttons__DbcQN .index_stro-button__3d-RD,\r\n.index_stro-container__qKDcP.index_show-left-buttons__noVuj .index_stro-button__3d-RD {\r\n  transition: all 0.3s ease; }\r\n\r\n.index_stro-content__3LKXX {\r\n  background: #eeefef;\r\n  padding-left: 2em;\r\n  line-height: 65px;\r\n  border-bottom: 1px solid #aaa; }\r\n\r\n.index_move__2UjgW {\r\n  color: #fff;\r\n  background: #3498db; }\r\n\r\n.index_archive__kKBQt {\r\n  color: #fff;\r\n  background: #e67e22; }\r\n\r\n.index_trash__1FL1r {\r\n  color: #fff;\r\n  background: #c0392b; }\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box; }\r\n\r\n#index_react-content__eYHUF {\r\n  overflow-x: hidden; }\r\n";
styleInject(css_248z);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var LeftRightButton = function LeftRightButton(_ref) {
	var side = _ref.side,
	    option = _ref.option,
	    index = _ref.index,
	    handleClick = _ref.handleClick,
	    getSpanStyle = _ref.getSpanStyle,
	    getStyle = _ref.getStyle;

	var propsLabel = { style: getSpanStyle(side, index) };
	var labelType = _typeof(option.label);
	console.log('labelType: ' + labelType);
	if (labelType === 'string') {
		propsLabel.dangerouslySetInnerHTML = {
			___html: option.label
		};
	}
	var key = 'swipe-' + side + '-option-' + index;

	var getLabel = function getLabel() {
		if (typeof option.label === 'string') return option.label;
		return option.label();
	};
	return React__default.createElement(
		'div',
		{
			className: 'stro-button stro-' + side + '-button ' + option.class,
			key: key,
			onClick: function onClick(e) {
				handleClick(e, option);

				if (option.handleClick) option.handleClick(e, option);
			},
			style: getStyle(side, index)
		},
		React__default.createElement(
			'span',
			{ style: propsLabel.style },
			getLabel()
		)
	);
};

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('hammerjs') when in a browser. This is safe because Hammer is only
// invoked in componentDidMount, which is not executed on the server.
var Hammer = typeof window !== 'undefined' ? require('hammerjs') : undefined;

var privateProps = {
	children: true,
	direction: true,
	options: true,
	recognizeWith: true,
	vertical: true
};

/**
 * Hammer Component
 * ================
 */

var handlerToEvent = {
	action: 'tap press',
	onDoubleTap: 'doubletap',
	onPan: 'pan',
	onPanCancel: 'pancancel',
	onPanEnd: 'panend',
	onPanStart: 'panstart',
	onPinch: 'pinch',
	onPinchCancel: 'pinchcancel',
	onPinchEnd: 'pinchend',
	onPinchIn: 'pinchin',
	onPinchOut: 'pinchout',
	onPinchStart: 'pinchstart',
	onPress: 'press',
	onPressUp: 'pressup',
	onRotate: 'rotate',
	onRotateCancel: 'rotatecancel',
	onRotateEnd: 'rotateend',
	onRotateMove: 'rotatemove',
	onRotateStart: 'rotatestart',
	onSwipe: 'swipe',
	onSwipeRight: 'swiperight',
	onSwipeLeft: 'swipeleft',
	onSwipeUp: 'swipeup',
	onSwipeDown: 'swipedown',
	onTap: 'tap'
};

Object.keys(handlerToEvent).forEach(function (i) {
	privateProps[i] = true;
});

function updateHammer(hammer, props) {
	if (props.hasOwnProperty('vertical')) {
		console.warn('vertical is deprecated, please use `direction` instead');
	}

	var directionProp = props.direction;
	if (directionProp || props.hasOwnProperty('vertical')) {
		var direction = directionProp ? directionProp : props.vertical ? 'DIRECTION_ALL' : 'DIRECTION_HORIZONTAL';
		hammer.get('pan').set({ direction: Hammer[direction] });
		hammer.get('swipe').set({ direction: Hammer[direction] });
	}

	if (props.options) {
		Object.keys(props.options).forEach(function (option) {
			if (option === 'recognizers') {
				Object.keys(props.options.recognizers).forEach(function (gesture) {
					var recognizer = hammer.get(gesture);
					recognizer.set(props.options.recognizers[gesture]);
					if (props.options.recognizers[gesture].requireFailure) {
						recognizer.requireFailure(props.options.recognizers[gesture].requireFailure);
					}
				}, this);
			} else {
				var key = option;
				var optionObj = {};
				optionObj[key] = props.options[option];
				hammer.set(optionObj);
			}
		}, this);
	}

	if (props.recognizeWith) {
		Object.keys(props.recognizeWith).forEach(function (gesture) {
			var recognizer = hammer.get(gesture);
			recognizer.recognizeWith(props.recognizeWith[gesture]);
		}, this);
	}

	Object.keys(props).forEach(function (p) {
		var e = handlerToEvent[p];
		if (e) {
			hammer.off(e);
			hammer.on(e, props[p]);
		}
	});
}

var HammerComponent = function (_React$Component) {
	_inherits(HammerComponent, _React$Component);

	function HammerComponent() {
		_classCallCheck(this, HammerComponent);

		return _possibleConstructorReturn(this, (HammerComponent.__proto__ || Object.getPrototypeOf(HammerComponent)).apply(this, arguments));
	}

	_createClass(HammerComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.hammer = new Hammer(this.domElement);
			updateHammer(this.hammer, this.props);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (this.hammer) {
				updateHammer(this.hammer, this.props);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.hammer) {
				this.hammer.stop();
				this.hammer.destroy();
			}
			this.hammer = null;
		}
	}, {
		key: 'render',
		value: function render() {
			var props = {};

			Object.keys(this.props).forEach(function (i) {
				if (!privateProps[i]) {
					props[i] = this.props[i];
				}
			}, this);

			var self = this;
			props.ref = function (domElement) {
				if (self.props.ref) {
					self.props.ref(domElement);
				}
				self.domElement = domElement;
			};

			// Reuse the child provided
			// This makes it flexible to use whatever element is wanted (div, ul, etc)
			return React__default.cloneElement(React__default.Children.only(this.props.children), props);
		}
	}]);

	return HammerComponent;
}(React__default.Component);

HammerComponent.displayName = 'Hammer';
HammerComponent.propTypes = {
	className: PropTypes.string
};

var hammerOptions = {
	touchAction: 'pan-y',
	cssProps: {
		userSelect: ''
	},
	recognizers: {
		pan: {},
		tap: {
			time: 600,
			threshold: 100
		}
	}
};

var Swipeable = function (_Component) {
	inherits(Swipeable, _Component);

	function Swipeable(props) {
		classCallCheck(this, Swipeable);

		var _this = possibleConstructorReturn(this, (Swipeable.__proto__ || Object.getPrototypeOf(Swipeable)).call(this, props));

		_this.state = {
			x: null,
			y: null,
			swiping: false,
			start: 0
		};
		_this.touchStart = _this.touchStart.bind(_this);
		_this.touchMove = _this.touchMove.bind(_this);
		_this.touchEnd = _this.touchEnd.bind(_this);
		_this.handleSwipe = _this.handleSwipe.bind(_this);

		_this.handlePanStart = _this.handlePanStart.bind(_this);

		_this.handlePanEnd = _this.handlePanEnd.bind(_this);
		_this.handlePanCancel = _this.handlePanCancel.bind(_this);
		_this.handlePan = _this.handlePan.bind(_this);
		return _this;
	}

	createClass(Swipeable, [{
		key: 'getInitialState',
		value: function getInitialState() {
			return {
				x: null,
				y: null,
				swiping: false,
				start: 0
			};
		}
	}, {
		key: 'calculatePos',
		value: function calculatePos(e) {
			var x = e.changedTouches[0].clientX;
			var y = e.changedTouches[0].clientY;

			var xd = this.state.x - x;
			var yd = this.state.y - y;

			var axd = Math.abs(xd);
			var ayd = Math.abs(yd);

			return {
				deltaX: xd,
				deltaY: yd,
				absX: axd,
				absY: ayd
			};
		}
	}, {
		key: 'handlePanStart',
		value: function handlePanStart(e) {
			this.setState({
				start: Date.now(),
				x: e.pointers[0].clientX,
				y: e.pointers[0].clientY,
				swiping: false
			});
		}
	}, {
		key: 'touchStart',
		value: function touchStart(e) {
			if (e.touches.length > 1) {
				return;
			}
			this.setState({
				start: Date.now(),
				x: e.touches[0].clientX,
				y: e.touches[0].clientY,
				swiping: false
			});
		}
	}, {
		key: 'handleSwipe',
		value: function handleSwipe(e) {
			var direction = e.direction == 1 ? 'right' : 'left';
			console.log('handlingSwipe');
		}
	}, {
		key: 'calculatePointers',
		value: function calculatePointers(e) {
			var x = e.changedPointers[0].clientX;
			var y = e.changedPointers[0].clientY;

			var xd = this.state.x - x;
			var yd = this.state.y - y;

			var axd = Math.abs(xd);
			var ayd = Math.abs(yd);

			return {
				deltaX: xd,
				deltaY: yd,
				absX: axd,
				absY: ayd
			};
		}
	}, {
		key: 'handlePan',
		value: function handlePan(e) {
			var _state = this.state,
			    x = _state.x,
			    y = _state.y;
			var _props = this.props,
			    delta = _props.delta,
			    onSwipingLeft = _props.onSwipingLeft,
			    onSwipingRight = _props.onSwipingRight,
			    onSwipingUp = _props.onSwipingUp,
			    onSwipingDown = _props.onSwipingDown;


			if (!x || !y || e.pointers.length > 1) return;

			var _calculatePointers = this.calculatePointers(e),
			    absX = _calculatePointers.absX,
			    absY = _calculatePointers.absY,
			    deltaX = _calculatePointers.deltaX,
			    deltaY = _calculatePointers.deltaY;

			if (absX < delta && absY < delta) {
				return;
			}

			if (absX < delta && absY < delta) {
				return;
			}

			if (absX > absY) {
				if (deltaX > 0) {
					if (onSwipingLeft) {
						onSwipingLeft(e, absX);
					}
				} else if (onSwipingRight) {
					onSwipingRight(e, absX);
				}
			} else if (deltaY > 0) {
				if (onSwipingUp) {
					onSwipingUp(e, absY);
				}
			} else if (onSwipingDown) {
				onSwipingDown(e, absY);
			}

			this.setState({ swiping: true });
		}
	}, {
		key: 'touchMove',
		value: function touchMove(e) {
			var _state2 = this.state,
			    x = _state2.x,
			    y = _state2.y;
			var _props2 = this.props,
			    delta = _props2.delta,
			    onSwipingLeft = _props2.onSwipingLeft,
			    onSwipingRight = _props2.onSwipingRight,
			    onSwipingUp = _props2.onSwipingUp,
			    onSwipingDown = _props2.onSwipingDown;

			if (!x || !y || e.touches.length > 1) {
				return;
			}

			var _calculatePos = this.calculatePos(e),
			    absX = _calculatePos.absX,
			    absY = _calculatePos.absY,
			    deltaX = _calculatePos.deltaX,
			    deltaY = _calculatePos.deltaY;

			if (absX < delta && absY < delta) {
				return;
			}

			if (absX > absY) {
				if (deltaX > 0) {
					if (onSwipingLeft) {
						onSwipingLeft(e, absX);
					}
				} else if (onSwipingRight) {
					onSwipingRight(e, absX);
				}
			} else if (deltaY > 0) {
				if (onSwipingUp) {
					onSwipingUp(e, absY);
				}
			} else if (onSwipingDown) {
				onSwipingDown(e, absY);
			}

			this.setState({ swiping: true });
		}
	}, {
		key: 'handlePanCancel',
		value: function handlePanCancel(ev) {
			debugger;
		}
	}, {
		key: 'handlePanEnd',
		value: function handlePanEnd(ev) {
			var _state3 = this.state,
			    swiping = _state3.swiping,
			    start = _state3.start;
			var _props3 = this.props,
			    flickThreshold = _props3.flickThreshold,
			    onSwiped = _props3.onSwiped,
			    onSwipedLeft = _props3.onSwipedLeft,
			    onSwipedRight = _props3.onSwipedRight,
			    onSwipedUp = _props3.onSwipedUp,
			    onSwipedDown = _props3.onSwipedDown;


			if (swiping) {
				var _calculatePointers2 = this.calculatePointers(ev),
				    absX = _calculatePointers2.absX,
				    absY = _calculatePointers2.absY,
				    deltaX = _calculatePointers2.deltaX,
				    deltaY = _calculatePointers2.deltaY;

				var time = Date.now() - start;
				var velocity = Math.sqrt(absX * absX + absY * absY) / time;
				var isFlick = velocity > flickThreshold;

				onSwiped && onSwiped(ev, deltaX, deltaY, isFlick);

				if (absX > absY) {
					if (deltaX > 0) {
						onSwipedLeft && onSwipedLeft(ev, deltaX);
					} else {
						onSwipedRight && onSwipedRight(ev, deltaX);
					}
				} else if (deltaY > 0) {
					onSwipedUp && onSwipedUp(ev, deltaY);
				} else {
					onSwipedDown && onSwipedDown(ev, deltaY);
				}
			}

			this.setState(this.getInitialState());
		}
	}, {
		key: 'touchEnd',
		value: function touchEnd(ev) {
			var _state4 = this.state,
			    swiping = _state4.swiping,
			    start = _state4.start;
			var _props4 = this.props,
			    flickThreshold = _props4.flickThreshold,
			    onSwiped = _props4.onSwiped,
			    onSwipedLeft = _props4.onSwipedLeft,
			    onSwipedRight = _props4.onSwipedRight,
			    onSwipedUp = _props4.onSwipedUp,
			    onSwipedDown = _props4.onSwipedDown;

			if (swiping) {
				var pos = this.calculatePos(ev);

				var time = Date.now() - start;
				var velocity = Math.sqrt(pos.absX * pos.absX + pos.absY * pos.absY) / time;
				var isFlick = velocity > flickThreshold;

				onSwiped && onSwiped(ev, pos.deltaX, pos.deltaY, isFlick);

				if (pos.absX > pos.absY) {
					if (pos.deltaX > 0) {
						onSwipedLeft && onSwipedLeft(ev, pos.deltaX);
					} else {
						onSwipedRight && onSwipedRight(ev, pos.deltaX);
					}
				} else if (pos.deltaY > 0) {
					onSwipedUp && onSwipedUp(ev, pos.deltaY);
				} else {
					onSwipedDown && onSwipedDown(ev, pos.deltaY);
				}
			}

			this.setState(this.getInitialState());
		}
	}, {
		key: 'render',
		value: function render() {
			var props = Object.assign({}, this.props, {
				onPanMove: this.handlePanMove,
				onPanStart: this.handlePanStart,
				onPanLeft: this.handlePanMove,
				onPanRight: this.handlePanMove,
				onTouchStart: this.touchStart,
				onTouchMove: this.touchMove,
				onTouchEnd: this.touchEnd
			});

			var customPropNames = ['onSwiped', 'onSwipingUp', 'onSwipingRight', 'onSwipingLeft', 'onSwipedUp', 'onSwipedRight', 'onSwipedDown', 'onSwipedLeft', 'flickThreshold', 'onPanStart', 'onPanMove', 'onPanLeft', 'onPanRight', 'delta'];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = customPropNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var name = _step.value;

					delete props[name];
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return React__default.createElement(
				HammerComponent,
				{
					options: hammerOptions,
					onSwipe: this.handleSwipe,
					onSwipeLeft: this.onSwipeLeft,
					onSwipeRight: this.onSwipeRight,
					onPan: this.handlePan,
					onPanStart: this.handlePanStart,
					onPanEnd: this.handlePanEnd,
					onPanCancel: this.handlePanCancel
				},
				React__default.createElement(
					'div',
					props,
					this.props.children
				)
			);
		}
	}]);
	return Swipeable;
}(React.Component);


Swipeable.propTypes = {
	delta: PropTypes.number,
	flickThreshold: PropTypes.number,
	onSwiped: PropTypes.func,
	onSwipedDown: PropTypes.func,
	onSwipedLeft: PropTypes.func,
	onSwipedRight: PropTypes.func,
	onSwipedUp: PropTypes.func,
	onSwipingDown: PropTypes.func,
	onSwipingLeft: PropTypes.func,
	onSwipingRight: PropTypes.func,
	onSwipingUp: PropTypes.func
};
Swipeable.defaultProps = {
	flickThreshold: 0.6,
	delta: 10,
	onSwiped: function onSwiped() {},
	onSwipingUp: function onSwipingUp() {},
	onSwipingRight: function onSwipingRight() {},
	onSwipingLeft: function onSwipingLeft() {},
	onSwipedUp: function onSwipedUp() {},
	onSwipedLeft: function onSwipedLeft() {},
	onSwipedRight: function onSwipedRight() {}
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var translateStyle = function translateStyle(x, measure, y) {
	var _y = y || '0';
	var _x = x || 0;
	if (Number.isNaN(x)) _x = 0;
	var translate = 'translate3d(' + _x + measure + ',' + _y + ',0)';

	return {
		transform: translate,
		WebkitTransform: translate
	};
};

var SwipeToRevealOptions = function (_Component) {
	inherits(SwipeToRevealOptions, _Component);

	function SwipeToRevealOptions(props) {
		classCallCheck(this, SwipeToRevealOptions);

		var _this = possibleConstructorReturn(this, (SwipeToRevealOptions.__proto__ || Object.getPrototypeOf(SwipeToRevealOptions)).call(this, props));

		_this.getItemWidth = function (side) {
			var _this$props = _this.props,
			    leftOptions = _this$props.leftOptions,
			    rightOptions = _this$props.rightOptions,
			    parentWidth = _this$props.parentWidth,
			    maxItemWidth = _this$props.maxItemWidth;

			var nbOptions = side === 'left' ? leftOptions.length : rightOptions.length;
			return Math.min(parentWidth / (nbOptions + 1), maxItemWidth);
		};

		_this.getContainerStyle = function () {
			var _this$state = _this.state,
			    delta = _this$state.delta,
			    showRightButtons = _this$state.showRightButtons,
			    showLeftButtons = _this$state.showLeftButtons;
			var _this$props2 = _this.props,
			    rightOptions = _this$props2.rightOptions,
			    leftOptions = _this$props2.leftOptions;

			var itemWidth = void 0;
			if (delta === 0 && showRightButtons) {
				itemWidth = _this.getItemWidth('right');
				return translateStyle(-rightOptions.length * itemWidth, 'px');
			}

			if (delta === 0 && showLeftButtons) {
				itemWidth = _this.getItemWidth('left');
				return translateStyle(leftOptions.length * itemWidth, 'px');
			}
			return translateStyle(delta, 'px');
		};

		_this.getSpanStyle = function (side, index) {
			var width = _this.getItemWidth(side);
			var factor = side === 'left' ? 1 : -1;

			var _this$props3 = _this.props,
			    leftOptions = _this$props3.leftOptions,
			    rightOptions = _this$props3.rightOptions,
			    actionThreshold = _this$props3.actionThreshold,
			    callActionWhenSwipingFarRight = _this$props3.callActionWhenSwipingFarRight,
			    callActionWhenSwipingFarLeft = _this$props3.callActionWhenSwipingFarLeft;
			var _this$state2 = _this.state,
			    showLeftButtons = _this$state2.showLeftButtons,
			    showRightButtons = _this$state2.showRightButtons,
			    transitionBack = _this$state2.transitionBack,
			    delta = _this$state2.delta;

			var nbOptions = side === 'left' ? leftOptions.length : rightOptions.length;
			var padding = void 0;
			var style = void 0;

			if (transitionBack || side === 'left' && showLeftButtons || showRightButtons) {
				style = translateStyle(0, 'px', '-50%');
				style.width = width;
				return style;
			}

			if (Math.abs(delta) > actionThreshold && (side === 'left' && callActionWhenSwipingFarRight || callActionWhenSwipingFarLeft) && index === nbOptions - 1) {
				padding = 0;
			} else if (nbOptions * width < Math.abs(_this.state.delta)) {
				padding += factor * (Math.abs(delta) - nbOptions * width) * 0.425;
			}
			style = translateStyle(padding, 'px', '-50%');
			style.width = width;

			return style;
		};

		_this.getStyle = function (side, index) {
			var _this$props4 = _this.props,
			    leftOptions = _this$props4.leftOptions,
			    rightOptions = _this$props4.rightOptions,
			    actionThreshold = _this$props4.actionThreshold,
			    callActionWhenSwipingFarRight = _this$props4.callActionWhenSwipingFarRight,
			    callActionWhenSwipingFarLeft = _this$props4.callActionWhenSwipingFarLeft;
			var _this$state3 = _this.state,
			    showLeftButtons = _this$state3.showLeftButtons,
			    showRightButtons = _this$state3.showRightButtons,
			    transitionBack = _this$state3.transitionBack,
			    delta = _this$state3.delta;

			var factor = side === 'left' ? -1 : 1;

			var nbOptions = side === 'left' ? leftOptions.length : rightOptions.length;
			var width = _this.getItemWidth(side);
			var transition = void 0;
			var style = void 0;

			if (transitionBack || side === 'left' && showLeftButtons || showRightButtons) {
				style = translateStyle(factor * index * width, 'px');
				return style;
			}

			var modifier = index * 1 / nbOptions;
			var offset = -factor * modifier * delta;
			if (Math.abs(delta) > actionThreshold && (side === 'left' && callActionWhenSwipingFarRight || callActionWhenSwipingFarLeft) && index === nbOptions - 1) {
				transition = 'transform 0.15s ease-out';
				offset = 0;
			} else if (nbOptions * width < Math.abs(delta)) {
				offset += factor * (Math.abs(delta) - nbOptions * width) * 0.85;
			}
			style = translateStyle(offset, 'px');
			if (transition) {
				style.transition = transition;
			}

			return style;
		};

		_this.handleSwipingLeft = function (event, delta) {
			var _this$props5 = _this.props,
			    visibilityThreshold = _this$props5.visibilityThreshold,
			    actionThreshold = _this$props5.actionThreshold,
			    callActionWhenSwipingFarLeft = _this$props5.callActionWhenSwipingFarLeft;

			if (_this.swipingHandleStylesAndDelta(delta, 'left')) {
				return;
			}

			var action = null;
			if (delta > visibilityThreshold) {
				action = 'rightVisible';
			}
			if (callActionWhenSwipingFarLeft && delta > actionThreshold) {
				action = 'rightAction';
			}

			_this.setState({
				delta: -delta,
				action: action,
				swipingLeft: true
			});
		};

		_this.handleSwipingRight = function (event, delta) {
			var _this$props6 = _this.props,
			    visibilityThreshold = _this$props6.visibilityThreshold,
			    actionThreshold = _this$props6.actionThreshold,
			    callActionWhenSwipingFarRight = _this$props6.callActionWhenSwipingFarRight;

			if (_this.swipingHandleStylesAndDelta(delta, 'right')) {
				return;
			}

			var action = null;
			if (delta > visibilityThreshold) {
				action = 'leftVisible';
			}
			if (callActionWhenSwipingFarRight && delta > actionThreshold) {
				action = 'leftAction';
			}

			_this.setState({
				delta: delta,
				action: action,
				swipingRight: true
			});
		};

		_this.swipingHandleStylesAndDelta = function (delta, direction) {
			if (_this.shouldAbort(direction)) {
				return true;
			}

			_this.shouldTransitionBack(direction);
			_this.shouldCloseOthers(direction);

			return false;
		};

		_this.shouldAbort = function (direction) {
			var _this$state4 = _this.state,
			    transitionBack = _this$state4.transitionBack,
			    showRightButtons = _this$state4.showRightButtons,
			    showLeftButtons = _this$state4.showLeftButtons;
			var _this$props7 = _this.props,
			    leftOptions = _this$props7.leftOptions,
			    rightOptions = _this$props7.rightOptions,
			    callActionWhenSwipingFarRight = _this$props7.callActionWhenSwipingFarRight,
			    callActionWhenSwipingFarLeft = _this$props7.callActionWhenSwipingFarLeft;

			if (transitionBack) {
				return true;
			}
			if (direction === 'right') {
				return !leftOptions.length && !showRightButtons || showLeftButtons && !callActionWhenSwipingFarRight;
			}

			return !rightOptions.length && !showLeftButtons || showRightButtons && !callActionWhenSwipingFarLeft;
		};

		_this.shouldTransitionBack = function (direction) {
			var _this$state5 = _this.state,
			    showRightButtons = _this$state5.showRightButtons,
			    showLeftButtons = _this$state5.showLeftButtons;

			if (direction === 'right' && showRightButtons || showLeftButtons) {
				_this.transitionBack();
			}
		};

		_this.handleOnSwiped = function () {
			var action = _this.state.action;
			var _this$props8 = _this.props,
			    rightOptions = _this$props8.rightOptions,
			    leftOptions = _this$props8.leftOptions,
			    transitionBackTimeout = _this$props8.transitionBackTimeout;


			switch (action) {
				case 'rightVisible':
				case 'leftVisible':
					_this.reveal(/^((?:left|right))/i.exec(action)[0]);
					break;

				case 'leftAction':
					_this.leftClick(leftOptions[0]);
					break;
				case 'rightAction':
					_this.rightClick(rightOptions[rightOptions.length - 1]);
					break;
				default:
					if (action) console.error('need to handle: ' + action);
					break;
			}
			_this.setState({
				delta: 0,
				action: null,
				swipingLeft: false,
				swipingRight: false,
				transitionBack: true
			});
			if (_this._timeout) {
				clearTimeout(_this._timeout);
			}
			_this._timeout = setTimeout(function () {
				return _this.setState({ transitionBack: false });
			}, transitionBackTimeout);
		};

		_this.shouldCloseOthers = function (direction) {
			var closeOthers = _this.props.closeOthers;
			var _this$state6 = _this.state,
			    swipingRight = _this$state6.swipingRight,
			    swipingLeft = _this$state6.swipingLeft;

			if (closeOthers) {
				if (direction === 'right' && !swipingRight || !swipingLeft) {
					closeOthers();
				}
			}
		};

		_this.handleContentClick = function () {
			var closeOthers = _this.props.closeOthers;

			closeOthers();
			_this.transitionBack();
		};

		_this.transitionBack = function () {
			var _this$props9 = _this.props,
			    onClose = _this$props9.onClose,
			    transitionBackTimeout = _this$props9.transitionBackTimeout;

			onClose();
			_this.setState({
				showLeftButtons: false,
				showRightButtons: false,
				transitionBack: true
			});
			if (_this._timeout) {
				clearTimeout(_this._timeout);
			}
			_this._timeout = setTimeout(function () {
				return _this.setState({ transitionBack: false });
			}, transitionBackTimeout);
		};

		_this.close = function () {
			_this.transitionBack();
		};

		_this.leftClick = function (option) {
			var _this$props10 = _this.props,
			    onLeftClick = _this$props10.onLeftClick,
			    transitionBackOnLeftClick = _this$props10.transitionBackOnLeftClick;

			debugger;
			onLeftClick(option);
			if (transitionBackOnLeftClick) _this.transitionBack();
		};

		_this.reveal = function (direction) {
			var onReveal = _this.props.onReveal;

			onReveal(direction);

			_this.setState({
				showRightButtons: direction === 'right',
				showLeftButtons: direction === 'left'
			});
		};

		_this.rightClick = function (option) {
			var _this$props11 = _this.props,
			    onRightClick = _this$props11.onRightClick,
			    transitionBackOnRightClick = _this$props11.transitionBackOnRightClick;

			onRightClick(option);
			if (transitionBackOnRightClick) _this.transitionBack();
		};

		_this.state = {
			delta: 0,
			showRightButtons: false,
			showLeftButtons: false,
			swipingLeft: false,
			swipingRight: false,
			transitionBack: false,
			action: null

			// this.swipingHandleStylesAndDelta=this.swipingHandleStylesAndDelta.bind(this);
		};return _this;
	}

	createClass(SwipeToRevealOptions, [{
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this._timeout) {
				clearTimeout(this._timeout);
			}
			this.handleContentClick = this.handleContentClick.bind(this);
			this.transitionBack = this.transitionBack.bind(this);
		}

		/**
   * getItemWidth
   * @param {'left'|'right'} side
   */


		/**
   * getContainerStyle
   */


		/**
   * getSpanStyle
   * @param {'left'|'right'} side
   * @param {Number} index
   */


		/**
   * getStyle
   * @param {'left'|'right'} side
   * @param {Number} index
   */


		/**
   * @class SwipeToRevealOptions
   * @description handleSwipingLeft
   * @param {Event} event
   * @param {Number} delta
   */


		/**
   * @class SwipeToRevealOptions
   * @description handleSwipingRight
   * @param {Event} event
   * @param {Number} delta
   */


		/**
   * swipingHandleStylesAndDelta
   * @param {Number} delta
   * @param {String} direction
   */


		/**
   * shouldAbort
   * @param {String} direction
   */


		/**
   * shouldTransitionBack
   * @param {string} direction
   */


		/**
   * swiped
   */


		/**
   * shouldCloseOthers
   * @param {'left'|'right'} direction
   */


		/**
   * handleContentClick
   */


		/**
   * transitionBack
   */


		/**
   * close
   */


		/**
   * leftClick
   * @param {LeftRightButton} option
   */


		/**
   * reveal
   * @param {'left'|'right'} direction
   */


		/**
   * rightClick
   * @param {LeftRightButton} option
   */

	}, {
		key: 'render',


		/**
   * render
   */
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    transitionBack = _state.transitionBack,
			    showRightButtons = _state.showRightButtons,
			    showLeftButtons = _state.showLeftButtons;
			var _props = this.props,
			    className = _props.className,
			    leftOptions = _props.leftOptions,
			    rightOptions = _props.rightOptions;


			var classes = classnames(className, {
				'stro-container': true,
				'transition-back': transitionBack,
				'show-right-buttons': showRightButtons,
				'show-left-buttons': showLeftButtons
			});
			var containerStyle = this.getContainerStyle();

			return React__default.createElement(
				'div',
				{ className: classes, style: containerStyle },
				React__default.createElement(
					'div',
					{ className: 'stro-left' },
					leftOptions.map(function (option, index) {
						var key = 'left-' + index;
						return React__default.createElement(LeftRightButton, {
							key: key,
							getSpanStyle: _this2.getSpanStyle,
							index: index,
							getStyle: _this2.getStyle,
							option: option,
							handleClick: _this2.leftClick
						});
					})
				),
				React__default.createElement(
					Swipeable,
					{
						className: 'stro-content',
						onSwipingLeft: this.handleSwipingLeft,
						onClick: function onClick() {
							return _this2.handleContentClick();
						},
						onSwipingRight: this.handleSwipingRight,
						delta: 15,
						onSwiped: this.handleOnSwiped
					},
					this.props.children
				),
				React__default.createElement(
					'div',
					{ className: 'stro-right' },
					rightOptions.map(function (option, index) {
						var key = 'right-' + index;
						return React__default.createElement(LeftRightButton, {
							key: key,
							getSpanStyle: _this2.getSpanStyle,
							side: 'right',
							index: index,
							option: option,
							getStyle: _this2.getStyle,
							handleClick: _this2.rightClick
						});
					})
				)
			);
		}
	}]);
	return SwipeToRevealOptions;
}(React.Component);

SwipeToRevealOptions.propTypes = {
	actionThreshold: PropTypes.number,
	callActionWhenSwipingFarLeft: PropTypes.bool,
	callActionWhenSwipingFarRight: PropTypes.bool,
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
	closeOthers: PropTypes.func,
	leftOptions: PropTypes.array,
	maxItemWidth: PropTypes.number,
	onClose: PropTypes.func,
	onLeftClick: PropTypes.func,
	onReveal: PropTypes.func,
	onRightClick: PropTypes.func,
	parentWidth: PropTypes.number,
	rightOptions: PropTypes.array,
	transitionBackOnLeftClick: PropTypes.bool,
	transitionBackOnRightClick: PropTypes.bool,
	transitionBackTimeout: PropTypes.number,
	visibilityThreshold: PropTypes.number
};

SwipeToRevealOptions.defaultProps = {
	rightOptions: [],
	leftOptions: [],
	className: '',
	actionThreshold: 300,
	visibilityThreshold: 50,
	transitionBackTimeout: 400,
	onRightClick: function onRightClick() {},
	onLeftClick: function onLeftClick() {},
	onReveal: function onReveal() {},
	onClose: function onClose() {},
	closeOthers: function closeOthers() {},
	maxItemWidth: 120,
	parentWidth: typeof window !== 'undefined' && window.outerWidth || typeof window.screen !== 'undefined' && window.screen.width || 320
};

var OptionType = PropTypes.shape({
    label: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired
});
var SwipeToRevealListItemPropType = PropTypes.shape({
    leftOptions: PropTypes.arrayOf(OptionType),
    rightOptions: PropTypes.arrayOf(OptionType),
    content: PropTypes.any,
    callActionWhenSwipingFarLeft: PropTypes.bool,
    callActionWhenSwipingFarRight: PropTypes.bool
});

var SwipeItemPropType = PropTypes.shape({
    disabled: PropTypes.bool,
    onDoubleClick: PropTypes.func,
    onSingleTap: PropTypes.func,
    threshold: PropTypes.number
});

var SwipeToRevealList = function SwipeToRevealList(_ref) {
	var items = _ref.items,
	    width = _ref.width;
	return React__default.createElement(
		'div',
		null,
		items.map(function (_ref2, index) {
			var content = _ref2.content,
			    item = objectWithoutProperties(_ref2, ['content']);

			var key = 'options-key-' + index;
			return React__default.createElement(
				SwipeToRevealOptions,
				_extends({
					key: key
				}, item, {
					actionThreshold: width
				}),
				content
			);
		})
	);
};

SwipeToRevealList.defaultProps = {
	width: window.innerWidth
};
SwipeToRevealList.propTypes = {
	items: PropTypes.arrayOf(SwipeToRevealListItemPropType),
	width: PropTypes.number.isRequired
};

exports.LeftRightButton = LeftRightButton;
exports.Swipeable = Swipeable;
exports.SwipeToRevealList = SwipeToRevealList;
exports.SwipeToRevealOptions = SwipeToRevealOptions;
//# sourceMappingURL=index.js.map
