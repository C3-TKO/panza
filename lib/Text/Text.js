'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function mapPropsToStyleProps(props, propsMap) {
  return Object.assign.apply(Object, [{}, textPropsMap.medium].concat(_toConsumableArray(_lodash2.default.filter(propsMap, function (v, k) {
    return props[k];
  })), [props]));
}

/** Basic text styles **/

var textPropsMap = {
  tiny: { fontSize: 6, lineHeight: 2 },
  large: { fontSize: 3, lineHeight: 2 },
  small: { fontSize: 5, lineHeight: 2 },
  medium: { fontSize: 4, lineHeight: 2 },
  giant: { fontSize: 2, lineHeight: 2 }
};

var Text = function Text(_ref) {
  var children = _ref.children,
      other = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    _index.TextBase,
    _extends({}, mapPropsToStyleProps(other, textPropsMap), other),
    children
  );
};

Text.propTypes = {
  children: _react.PropTypes.node,

  tiny: _react.PropTypes.bool,
  small: _react.PropTypes.bool,
  medium: _react.PropTypes.bool,
  large: _react.PropTypes.bool,
  giant: _react.PropTypes.bool,

  thin: _react.PropTypes.bool,
  thick: _react.PropTypes.bool,
  bold: _react.PropTypes.bool
};

Text.displayName = 'Text';

Text.defaultProps = {
  size: 'medium'
};

exports.default = Text;