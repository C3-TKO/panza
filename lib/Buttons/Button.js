'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../index');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function mapPropsToStyleProps(props, propsMap) {
  return Object.assign.apply(Object, [{}, buttonPropsMap.default, buttonPropsMap.medium].concat(_toConsumableArray(_lodash2.default.filter(propsMap, function (v, k) {
    return props[k];
  })), [props]));
}

/** Basic button styles **/

var buttonPropsMap = {
  large: { height: 55, px: 3 },
  small: { height: 30, px: 1 },
  medium: { height: 40, px: 2 },
  default: {
    backgroundColor: 'midgray',
    textColor: 'white',
    borderColor: 'midgray',
    underlayColor: 'darken'
  },
  primary: {
    backgroundColor: 'primary',
    textColor: 'white',
    borderColor: 'primary',
    underlayColor: 'darken'
  },
  secondary: {
    backgroundColor: 'secondary',
    textColor: 'white',
    borderColor: 'secondary',
    underlayColor: 'darken'
  },
  positive: {
    backgroundColor: 'positive',
    textColor: 'white',
    borderColor: 'positive',
    underlayColor: 'darken'
  },
  negative: {
    backgroundColor: 'negative',
    textColor: 'white',
    borderColor: 'negative',
    underlayColor: 'darken'
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    underlayColor: '#eee',
    textColor: 'default'
  },
  transparent: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: 'transparent',
    underlayColor: 'transparent',
    textColor: 'default'
  }
};

/**
 * A basic button that inherits from Base, and provides colourization
 * based upon background color configuration.
 */

var Button = function Button(_ref) {
  var block = _ref.block,
      children = _ref.children,
      icon = _ref.icon,
      disabled = _ref.disabled,
      other = _objectWithoutProperties(_ref, ['block', 'children', 'icon', 'disabled']);

  // determine our basic style props
  var props = mapPropsToStyleProps(other, buttonPropsMap);
  var textColor = other.outline ? props.borderColor : props.textColor;

  // create our text component if necessary
  var child = children && typeof children === 'string' ? _react2.default.createElement(
    _index.Text,
    {
      color: textColor,
      large: other.large,
      medium: other.medium,
      small: other.small
    },
    children
  ) : children;

  // create an icon if necessary
  var iconNode = icon && typeof icon === 'string' ? _react2.default.createElement(_index.Icon, { name: icon, mr: 1, size: 25, color: textColor }) : icon;

  return _react2.default.createElement(
    _index.Base,
    _extends({
      Component: _reactNative.TouchableHighlight,
      accessibilityComponentType: 'button',
      disabled: disabled,
      baseStyle: [styles.button, block && styles.block, disabled && styles.disabled]
    }, props),
    _react2.default.createElement(
      _reactNative.View,
      { style: styles.buttonContent },
      iconNode,
      child
    )
  );
};

Button.propTypes = {

  /** button size **/
  small: _react.PropTypes.bool,
  medium: _react.PropTypes.bool,
  large: _react.PropTypes.bool,

  /** button theme **/
  primary: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  positive: _react.PropTypes.bool,
  negative: _react.PropTypes.bool,
  default: _react.PropTypes.bool,

  children: _react.PropTypes.node,

  /** disables the button, and reduces its opacity **/
  disabled: _react.PropTypes.bool,
  onPress: _react.PropTypes.func.isRequired,
  underlayColor: _react.PropTypes.string,
  backgroundColor: _react.PropTypes.string,
  borderColor: _react.PropTypes.string,

  /** stretch the button width **/
  block: _react.PropTypes.bool,

  /** style text colour when using label prop **/
  textColor: _react.PropTypes.string,

  /** optional icon **/
  icon: _react.PropTypes.oneOf([_react.PropTypes.string, _react.PropTypes.node])
};

Button.displayName = 'Button';

Button.defaultProps = {
  theme: 'default',
  size: 'medium',
  disabled: false,
  outline: false,
  block: false,
  rounded: 6
};

var styles = _reactNative.StyleSheet.create({
  button: {
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderWidth: 2
  },
  disabled: {
    opacity: 0.2
  },
  block: {
    alignSelf: 'stretch'
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

exports.default = Button;