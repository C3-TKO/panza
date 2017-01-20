'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _reactNative = require('react-native');

var _Base = require('./Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/** Props to text-size conversions **/
var size = function size(fontSize, fontSizes, lineHeight, lineHeights) {

  var style = {};

  // 0, 1, 2, 3, 4, 5, 6
  if (typeof fontSize === 'number') {
    style.fontSize = fontSizes[fontSize];
    style.lineHeight = Math.round(fontSizes[fontSize] * lineHeights[lineHeight]);
  }

  return style;
};

/** Custom text styling conversions **/
var propsToStyle = function propsToStyle(props, bold, thin, thick, colors) {

  var style = {};

  if (props.bold) {
    style.fontWeight = bold;
  } else if (props.thin) {
    style.fontWeight = thin;
  } else if (props.thick) {
    style.fontWeight = thick;
  }

  if (props.light) {
    style.color = colors.midgray;
  } else if (props.color && colors[props.color]) {
    style.color = colors[props.color];
  } else if (typeof props.color === 'string') {
    style.color = props.color;
  }

  if (props.textAlign) {
    style.textAlign = props.textAlign;
  }

  return style;
};

/**
 * A general purpose text component which
 * converts props into styles defined in the configuration.
 */

var TextBase = function TextBase(_ref, _ref2) {
  var style = _ref.style,
      fontSize = _ref.fontSize,
      lineHeight = _ref.lineHeight,
      baseStyle = _ref.baseStyle,
      Component = _ref.Component,
      props = _objectWithoutProperties(_ref, ['style', 'fontSize', 'lineHeight', 'baseStyle', 'Component']);

  var panza = _ref2.panza;

  var _config$panza = _extends({}, _config2.default, panza),
      fontSizes = _config$panza.fontSizes,
      lineHeights = _config$panza.lineHeights,
      bold = _config$panza.bold,
      thin = _config$panza.thin,
      thick = _config$panza.thick,
      colors = _config$panza.colors,
      scale = _config$panza.scale;

  var sx = [baseStyle, (0, _Base.margins)(props, scale), (0, _Base.paddings)(props, scale), size(fontSize, fontSizes, lineHeight, lineHeights), propsToStyle(props, bold, thin, thick, colors), style];

  var Element = Component || _reactNative.Text;

  return _react2.default.createElement(
    Element,
    _extends({ style: sx }, props),
    props.children
  );
};

TextBase.displayName = 'TextBase';

TextBase.propTypes = {
  Component: _react.PropTypes.any,
  style: _react.PropTypes.any,
  baseStyle: _react.PropTypes.any,
  children: _react.PropTypes.node,
  fontSize: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  lineHeight: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  color: _react.PropTypes.string,
  textAlign: _react.PropTypes.string,
  bold: _react.PropTypes.bool,
  thin: _react.PropTypes.bool
};

TextBase.defaultProps = {
  color: 'default',
  lineHeight: 1
};

TextBase.contextTypes = {
  panza: _react.PropTypes.object
};

exports.default = TextBase;