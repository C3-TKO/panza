'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Renders text stylized for the Navigation Bar title.
 *
 * On iOS it composes PrimaryText.
 *
 * On Android, it composes LargeText.
 *
 * @composes Text
 */

var NavTitle = function NavTitle(_ref) {
  var label = _ref.label,
      color = _ref.color,
      children = _ref.children,
      style = _ref.style,
      other = _objectWithoutProperties(_ref, ['label', 'color', 'children', 'style']);

  return _react2.default.createElement(
    _reactNative.View,
    { style: [styles.container, style] },
    _reactNative.Platform.OS === 'ios' ? _react2.default.createElement(
      _index.Text,
      _extends({ color: color, bold: true }, other),
      label || children
    ) : _react2.default.createElement(
      _index.Text,
      _extends({ color: color, large: true }, other),
      label || children
    )
  );
};

NavTitle.displayName = 'NavTitle';

NavTitle.propTypes = {
  label: _react.PropTypes.string,
  color: _react.PropTypes.string,
  children: _react.PropTypes.node,
  style: _react.PropTypes.any
};

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

exports.default = NavTitle;