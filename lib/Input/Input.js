'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A basic input
 * @composes Text
 */

var Input = function Input(props) {
  return _react2.default.createElement(_index.Text, _extends({
    baseStyle: _extends({}, _reactNative.Platform.select({
      web: { outline: 'none', borderColor: 'transparent' }
    }))
  }, props, {
    Component: _reactNative.TextInput,
    underlineColorAndroid: 'transparent'
  }));
};

Input.propTypes = {
  tiny: _react.PropTypes.bool,
  large: _react.PropTypes.bool,
  small: _react.PropTypes.bool,
  medium: _react.PropTypes.bool,
  giant: _react.PropTypes.bool
};

Input.displayName = 'Input';

exports.default = Input;