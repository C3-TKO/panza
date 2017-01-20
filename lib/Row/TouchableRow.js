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

/**
 * The basic RowCell that I use about 80% of the time. It displays
 * an image, primary text, secondary text, a value,
 * and an arrow right icon if the respective props are
 * specified.
 * @composes TouchableRowCell, Image, Text
 */

var TouchableRow = function TouchableRow(_ref) {
  var primaryText = _ref.primaryText,
      secondaryText = _ref.secondaryText,
      image = _ref.image,
      height = _ref.height,
      onPress = _ref.onPress,
      value = _ref.value,
      other = _objectWithoutProperties(_ref, ['primaryText', 'secondaryText', 'image', 'height', 'onPress', 'value']);

  return _react2.default.createElement(
    _index.TouchableRowCell,
    _extends({
      height: height,
      py: 2,
      onPress: onPress
    }, other),
    image && _react2.default.createElement(_index.Image, { mr: 2, width: 40, height: 40, source: image }),
    _react2.default.createElement(
      _index.Base,
      { flex: 1, row: true, align: 'center', justify: 'space-between' },
      _react2.default.createElement(
        _index.Base,
        { flex: 1 },
        primaryText && _react2.default.createElement(
          _index.Text,
          { lineHeight: 2, numberOfLines: 1 },
          primaryText
        ),
        secondaryText && _react2.default.createElement(
          _index.Text,
          { small: true, lineHeight: 2, light: true, numberOfLines: 1 },
          secondaryText
        )
      ),
      value && _react2.default.createElement(
        _index.Text,
        { light: true },
        value
      )
    )
  );
};

TouchableRow.displayName = 'TouchableRow';

TouchableRow.propTypes = {
  primaryText: _react.PropTypes.string,
  secondaryText: _react.PropTypes.string,
  value: _react.PropTypes.string,
  onPress: _react.PropTypes.func,
  image: _react.PropTypes.object,
  height: _react.PropTypes.number
};

exports.default = TouchableRow;