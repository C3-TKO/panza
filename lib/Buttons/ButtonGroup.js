'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ButtonGroup = function ButtonGroup(_ref) {
  var children = _ref.children,
      rounded = _ref.rounded,
      segmented = _ref.segmented,
      vertical = _ref.vertical,
      other = _objectWithoutProperties(_ref, ['children', 'rounded', 'segmented', 'vertical']);

  var round = rounded ? typeof rounded === 'number' ? rounded : 2 : 0;

  var total = children.length;
  var kids = _react2.default.Children.map(children, function (child, i) {
    var isFirst = i === 0;
    var isLast = i === total - 1;
    var isOutline = child.props.outline;
    var w = 2;

    var style = vertical ? [isOutline && { borderBottomWidth: w / 2, borderTopWidth: w / 2 }, isOutline && isFirst && { borderTopWidth: w }, isOutline && isLast && { borderBottomWidth: w }, isFirst && rounded && { borderTopLeftRadius: round, borderTopRightRadius: round }, isLast && rounded && { borderBottomLeftRadius: round, borderBottomRightRadius: round }] : [isOutline && { borderLeftWidth: w / 2, borderRightWidth: w / 2 }, isOutline && isFirst && { borderLeftWidth: w }, isOutline && isLast && { borderRightWidth: w }, isFirst && rounded && { borderTopLeftRadius: round, borderBottomLeftRadius: round }, isLast && rounded && { borderTopRightRadius: round, borderBottomRightRadius: round }];

    var newProps = {
      flex: 1,
      style: style
    };

    if (segmented) {
      newProps.block = true;
      newProps.rounded = false;
    }

    return _react2.default.cloneElement(child, newProps);
  });

  return _react2.default.createElement(
    _index.Base,
    _extends({
      flexDirection: vertical ? 'column' : 'row',
      flex: vertical ? 0 : 1
    }, other),
    kids
  );
};

ButtonGroup.propTypes = {
  children: _react.PropTypes.node,
  rounded: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number]),
  vertical: _react.PropTypes.bool,

  /** A helper to create segemented controls that align together **/
  segmented: _react.PropTypes.bool
};

exports.default = ButtonGroup;