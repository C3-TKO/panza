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
 * Fade-in an image when it loads.
 */

var ImageBase = function (_React$Component) {
  _inherits(ImageBase, _React$Component);

  function ImageBase() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageBase.__proto__ || Object.getPrototypeOf(ImageBase)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fade: new _reactNative.Animated.Value(0)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImageBase, [{
    key: 'onLoad',
    value: function onLoad() {

      if (this.props.onLoadEnd) {
        this.props.onLoadEnd();
      }

      if (this.props.fade) {
        _reactNative.Animated.timing(this.state.fade, {
          toValue: 1,
          duration: 250
        }).start();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          source = _props.source,
          height = _props.height,
          width = _props.width,
          circular = _props.circular,
          rounded = _props.rounded,
          resizeMode = _props.resizeMode,
          other = _objectWithoutProperties(_props, ['style', 'source', 'height', 'width', 'circular', 'rounded', 'resizeMode']);

      var sx = [{
        height: height,
        width: width,
        opacity: this.state.fade
      }, style];

      return _react2.default.createElement(_index.Base, _extends({}, other, {
        baseStyle: sx,
        onLoadEnd: function onLoadEnd() {
          _this2.onLoad();
        },
        rounded: circular ? height / 2 : rounded,
        source: source,
        resizeMode: resizeMode,
        Component: _reactNative.Animated.Image
      }));
    }
  }]);

  return ImageBase;
}(_react2.default.Component);

ImageBase.displayName = 'ImageBase';
ImageBase.propTypes = {
  fade: _react.PropTypes.bool,
  onLoadEnd: _react.PropTypes.func,
  height: _react.PropTypes.number,
  width: _react.PropTypes.number,

  /** set the border radius to be fully round (given an equal height/width) **/
  circular: _react.PropTypes.bool,

  style: _react.PropTypes.any,
  source: _react.PropTypes.object.isRequired,
  resizeMode: _react.PropTypes.string,

  /** the border radius of the image **/
  rounded: _react.PropTypes.number
};
ImageBase.defaultProps = {
  fade: true,
  resizeMode: 'cover',
  rounded: false,
  circular: false
};
exports.default = ImageBase;