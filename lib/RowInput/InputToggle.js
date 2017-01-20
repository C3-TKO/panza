'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../index');

var _config2 = require('../config');

var _config3 = _interopRequireDefault(_config2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * An basic input row with a label and Switch, allowing
 * the user to toggle a boolean value.
 */

var InputToggle = function (_React$Component) {
  _inherits(InputToggle, _React$Component);

  function InputToggle() {
    _classCallCheck(this, InputToggle);

    return _possibleConstructorReturn(this, (InputToggle.__proto__ || Object.getPrototypeOf(InputToggle)).apply(this, arguments));
  }

  _createClass(InputToggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          value = _props.value,
          editable = _props.editable,
          onValueChange = _props.onValueChange,
          switchProps = _props.switchProps,
          onTintColor = _props.onTintColor;
      var panza = this.context.panza;

      var _config = _extends({}, _config3.default, panza || {}),
          colors = _config.colors;

      var tintColor = colors[onTintColor];

      return _react2.default.createElement(
        _index.InputRowCell,
        null,
        _react2.default.createElement(
          _index.Base,
          { pl: 2 },
          _react2.default.createElement(
            _index.Text,
            null,
            label
          )
        ),
        _react2.default.createElement(
          _index.Base,
          { flex: 1 },
          _react2.default.createElement(_reactNative.Switch, _extends({
            style: styles.switch,
            value: value,
            edisabled: !editable,
            onTintColor: tintColor
          }, switchProps, {
            onValueChange: onValueChange
          }))
        )
      );
    }
  }]);

  return InputToggle;
}(_react2.default.Component);

InputToggle.displayName = 'InputToggle';
InputToggle.propTypes = {
  style: _react.PropTypes.any,
  value: _react.PropTypes.bool.isRequired,
  backgroundColor: _react.PropTypes.string,
  label: _react.PropTypes.string.isRequired,
  onValueChange: _react.PropTypes.func.isRequired,
  editable: _react.PropTypes.bool,
  switchProps: _react.PropTypes.object,
  onTintColor: _react.PropTypes.string
};
InputToggle.defaultProps = {
  backgroundColor: 'transparent',
  editable: true,
  onTintColor: 'success'
};
InputToggle.contextTypes = {
  panza: _react.PropTypes.object
};


var styles = _reactNative.StyleSheet.create({
  switch: _extends({
    alignSelf: 'flex-end',
    marginRight: 16
  }, _reactNative.Platform.select({
    android: {
      marginVertical: 13
    }
  }))
});

module.exports = InputToggle;