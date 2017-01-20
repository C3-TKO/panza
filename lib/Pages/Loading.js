'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Displays a loading indicator, and on iOS an optional
 * loading message.
 */

var Loader = function (_React$Component) {
  _inherits(Loader, _React$Component);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
  }

  _createClass(Loader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          isLoading = _props.isLoading,
          large = _props.large,
          showText = _props.showText,
          loadingText = _props.loadingText,
          alignTop = _props.alignTop,
          other = _objectWithoutProperties(_props, ['color', 'isLoading', 'large', 'showText', 'loadingText', 'alignTop']);

      var size = large ? 'large' : 'small';
      var Indicator = _reactNative.ActivityIndicator || _reactNative.ActivityIndicatorIOS;

      return _react2.default.createElement(
        _index.Base,
        _extends({ flex: 1, align: 'center', justify: alignTop ? 'flex-start' : 'center' }, other),
        _react2.default.createElement(
          _index.Base,
          { row: true, align: 'center', justify: 'center' },
          Indicator && _react2.default.createElement(Indicator, {
            color: color,
            animating: isLoading,
            size: size
          }),
          showText && _react2.default.createElement(
            _index.Text,
            { fontSize: large ? 2 : 4, ml: 1, light: true },
            loadingText
          )
        )
      );
    }
  }]);

  return Loader;
}(_react2.default.Component);

Loader.displayName = 'Loader';
Loader.propTypes = {
  isLoading: _react.PropTypes.bool,
  large: _react.PropTypes.bool,
  color: _react.PropTypes.string,
  showText: _react.PropTypes.bool,
  loadingText: _react.PropTypes.string,
  alignTop: _react.PropTypes.bool
};
Loader.defaultProps = {
  large: false,
  color: 'gray',
  isLoading: true,
  showText: true,
  loadingText: 'Loading...',
  alignTop: false
};
exports.default = Loader;