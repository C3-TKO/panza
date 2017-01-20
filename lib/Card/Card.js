'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = exports.CardHeader = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A very basic card header, which includes an optional avatar,
 * title, subtitle, and children
 * @composes Base, Image, Text
 */

var CardHeader = function CardHeader(_ref) {
  var avatar = _ref.avatar,
      title = _ref.title,
      subtitle = _ref.subtitle,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ['avatar', 'title', 'subtitle', 'children']);

  return _react2.default.createElement(
    _index.Base,
    _extends({ flexDirection: 'row', p: 2 }, other),
    avatar && (typeof avatar === 'string' ? _react2.default.createElement(_index.Image, { width: 40, height: 40, mr: 1, source: { uri: avatar }, circular: true }) : avatar),
    _react2.default.createElement(
      _index.Base,
      { flex: 1 },
      title && (typeof title === 'string' ? _react2.default.createElement(
        _index.Text,
        { bold: true },
        title
      ) : title),
      subtitle && (typeof subtitle === 'string' ? _react2.default.createElement(
        _index.Text,
        { light: true, small: true },
        subtitle
      ) : subtitle)
    ),
    _react2.default.createElement(
      _index.Base,
      { flex: 0, justify: 'center' },
      children
    )
  );
};

exports.CardHeader = CardHeader;
CardHeader.propTypes = {
  avatar: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  subtitle: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  children: _react.PropTypes.node
};

/**
 * A very basic Card wrapper
 * @composes Base
 */

var Card = function Card(_ref2, _ref3) {
  var children = _ref2.children,
      other = _objectWithoutProperties(_ref2, ['children']);

  var panza = _ref3.panza;

  var _config$panza = _extends({}, _index.config, panza),
      borderColor = _config$panza.borderColor;

  return _react2.default.createElement(
    _index.Base,
    _extends({ mt: 1, baseStyle: [{ borderColor: borderColor }, styles.card] }, other),
    children
  );
};

exports.Card = Card;
Card.propTypes = {
  children: _react.PropTypes.node
};

var styles = _reactNative.StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderTopWidth: _reactNative.StyleSheet.hairlineWidth,
    borderBottomWidth: _reactNative.StyleSheet.hairlineWidth
  }
});