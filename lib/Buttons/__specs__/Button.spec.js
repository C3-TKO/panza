'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenStyle = flattenStyle;
exports.shouldContainStyle = shouldContainStyle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _index = require('../../index');

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function flattenStyle(style) {
  var result = {};
  for (var i = 0, styleLength = style.length; i < styleLength; ++i) {
    var computedStyle = flattenStyle(style[i]);
    if (computedStyle) {
      for (var key in computedStyle) {
        result[key] = computedStyle[key];
      }
    }
  }
  return result;
}

function shouldContainStyle(base, key, value) {
  var styles = base.props().style;
  if (Array.isArray(styles)) {
    styles = Object.assign.apply(null, styles);
  }

  return (0, _chai.expect)(styles[key]).to.equal(value);
}

describe('<Button />', function () {

  function render(_ref, child) {
    var props = _objectWithoutProperties(_ref, []);

    return (0, _enzyme.shallow)(_react2.default.createElement(
      _Button2.default,
      props,
      child || 'Hi'
    )).find(_reactNative.TouchableHighlight);
  }

  it('should render 1 TouchableHighlight component', function () {
    (0, _chai.expect)(render()).to.have.length(1);
  });

  it('should render different types', function () {
    shouldContainStyle(render(), 'backgroundColor', _config2.default.colors.default);
    shouldContainStyle(render({ primary: true }), 'backgroundColor', _config2.default.colors.primary);
    shouldContainStyle(render({ secondary: true }), 'backgroundColor', _config2.default.colors.secondary);
    shouldContainStyle(render({ positive: true }), 'backgroundColor', _config2.default.colors.positive);
    shouldContainStyle(render({ negative: true }), 'backgroundColor', _config2.default.colors.negative);
  });

  it('should render outline types', function () {
    var outline = render({ outline: true });
    shouldContainStyle(outline, 'backgroundColor', 'transparent');
    shouldContainStyle(outline, 'borderColor', _config2.default.colors.default);
    var outlinePrimary = render({ primary: true, outline: true });
    shouldContainStyle(outlinePrimary, 'borderColor', _config2.default.colors.primary);
    shouldContainStyle(outlinePrimary, 'backgroundColor', 'transparent');
  });

  it('should render different sizes', function () {

    // small
    var small = render({ small: true });
    shouldContainStyle(small, 'height', '30');
    var text = small.find(_index.Text);
    shouldContainStyle(text, 'fontSize', _config2.default.fontSizes[6]);

    // large
    shouldContainStyle(render({ large: true }), 'height', '55');
    shouldContainStyle(render({ large: true }).find(_index.Text), 'fontSize', _config2.default.fontSizes[3]);
  });

  it('should render the correct children', function () {
    var basic = render().find(_index.Text);
    (0, _chai.expect)(basic).to.have.length(1);
    var custom = render({}, _react2.default.createElement(_reactNative.View, null)).find(_reactNative.View);
    (0, _chai.expect)(custom).to.have.length(1);
  });

  it('should render icons', function () {
    var basic = render({ icon: 'ios-arrow-left' });
    (0, _chai.expect)(basic.find(_index.Icon)).to.have.length(1);

    var withIcon = render({ icon: _react2.default.createElement(_index.Icon, { name: 'ios-arrow-left' }) });
    (0, _chai.expect)(withIcon.find(_index.Icon)).to.have.length(1);
  });
});