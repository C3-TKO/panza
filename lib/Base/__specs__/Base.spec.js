'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _enzyme = require('enzyme');

var _chai = require('chai');

var _Base = require('../Base');

var _Base2 = _interopRequireDefault(_Base);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

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

describe('<Base />', function () {

  function renderWithProps(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return (0, _enzyme.shallow)(_react2.default.createElement(_Base2.default, props)).find(_reactNative.View);
  }

  function doesContainStyle(styles, style) {
    var key = Object.keys(style);
    return styles[style];
  }

  function shouldContainStyle(base, key, value) {
    var styles = base.props().style;
    if (Array.isArray(styles)) {
      styles = Object.assign.apply(null, styles);
    }

    return (0, _chai.expect)(styles[key]).to.equal(value);
  }

  it('it should render 1 view component', function () {
    (0, _chai.expect)(renderWithProps()).to.have.length(1);
  });

  it('should apply the proper padding', function () {

    shouldContainStyle(renderWithProps({ p: 1 }), 'padding', _config2.default.scale[1]);
    shouldContainStyle(renderWithProps({ p: 2 }), 'padding', _config2.default.scale[2]);
    shouldContainStyle(renderWithProps({ p: 3 }), 'padding', _config2.default.scale[3]);
    shouldContainStyle(renderWithProps({ p: 4 }), 'padding', _config2.default.scale[4]);

    shouldContainStyle(renderWithProps({ py: 1 }), 'paddingTop', _config2.default.scale[1]);
    shouldContainStyle(renderWithProps({ py: 1 }), 'paddingBottom', _config2.default.scale[1]);

    shouldContainStyle(renderWithProps({ pl: 1 }), 'paddingLeft', _config2.default.scale[1]);
    shouldContainStyle(renderWithProps({ pt: 1 }), 'paddingTop', _config2.default.scale[1]);
    shouldContainStyle(renderWithProps({ pb: 1 }), 'paddingBottom', _config2.default.scale[1]);
    shouldContainStyle(renderWithProps({ pr: 1 }), 'paddingRight', _config2.default.scale[1]);

    shouldContainStyle(renderWithProps({ px: 1 }), 'paddingLeft', _config2.default.scale[1]);
    shouldContainStyle(renderWithProps({ px: 1 }), 'paddingRight', _config2.default.scale[1]);
  });

  it('should apply the proper margins', function () {
    shouldContainStyle(renderWithProps({ m: 1 }), 'margin', _config2.default.scale[1]);
    shouldContainStyle(renderWithProps({ m: 2 }), 'margin', _config2.default.scale[2]);
    shouldContainStyle(renderWithProps({ m: 3 }), 'margin', _config2.default.scale[3]);
    shouldContainStyle(renderWithProps({ m: 4 }), 'margin', _config2.default.scale[4]);

    shouldContainStyle(renderWithProps({ my: 1 }), 'marginTop', _config2.default.scale[1]);
    shouldContainStyle(renderWithProps({ my: 1 }), 'marginBottom', _config2.default.scale[1]);

    shouldContainStyle(renderWithProps({ ml: 1 }), 'marginLeft', _config2.default.scale[1]);
    shouldContainStyle(renderWithProps({ mt: 1, mb: 1 }), 'marginTop', _config2.default.scale[1]);
    shouldContainStyle(renderWithProps({ mb: 1, mx: 1 }), 'marginBottom', _config2.default.scale[1]);
    shouldContainStyle(renderWithProps({ mr: 1 }), 'marginRight', _config2.default.scale[1]);

    shouldContainStyle(renderWithProps({ mx: 1 }), 'marginLeft', _config2.default.scale[1]);
    shouldContainStyle(renderWithProps({ mx: 1 }), 'marginRight', _config2.default.scale[1]);
  });

  it('should render a custom component', function () {
    var el = (0, _enzyme.shallow)(_react2.default.createElement(_Base2.default, { Component: _reactNative.TouchableHighlight })).find(_reactNative.TouchableHighlight);
    (0, _chai.expect)(el).to.have.length(1);
  });

  it('should support darken underlayColors', function () {
    var el = (0, _enzyme.shallow)(_react2.default.createElement(_Base2.default, { Component: _reactNative.TouchableHighlight, backgroundColor: 'primary', underlayColor: 'darken' })).find(_reactNative.TouchableHighlight);
    (0, _chai.expect)(el.props().underlayColor).to.equal('#0079D6');
  });

  it('should support other underlay colors', function () {
    var el = (0, _enzyme.shallow)(_react2.default.createElement(_Base2.default, { Component: _reactNative.TouchableHighlight, backgroundColor: 'primary', underlayColor: '#eee' })).find(_reactNative.TouchableHighlight);
    (0, _chai.expect)(el.props().underlayColor).to.equal('#eee');
  });

  it('should convert backgroundColor into style props', function () {
    shouldContainStyle(renderWithProps({ backgroundColor: '#eee' }), 'backgroundColor', '#eee');
  });

  it('should convert config specified colours (primary, etc.) to the appropriate colour', function () {
    Object.keys(_config2.default.colors).forEach(function (color) {
      shouldContainStyle(renderWithProps({ backgroundColor: color }), 'backgroundColor', _config2.default.colors[color]);
    });
  });

  it('should convert flex props to styles', function () {
    shouldContainStyle(renderWithProps({ flex: 1 }), 'flex', 1);
    shouldContainStyle(renderWithProps({ justify: 'flex-start' }), 'justifyContent', 'flex-start');
    shouldContainStyle(renderWithProps({ align: 'center' }), 'alignItems', 'center');
    shouldContainStyle(renderWithProps({ row: true }), 'flexDirection', 'row');
    shouldContainStyle(renderWithProps({ column: true }), 'flexDirection', 'column');
    shouldContainStyle(renderWithProps({ wrap: true }), 'flexWrap', 'wrap');
  });

  it('should support the rounded prop', function () {
    shouldContainStyle(renderWithProps({ rounded: true }), 'borderRadius', _config2.default.borderRadius);
    shouldContainStyle(renderWithProps({ rounded: 10 }), 'borderRadius', 10);
    shouldContainStyle(renderWithProps({ rounded: false }), 'borderRadius', 0);
  });

  it('should attach other props', function () {
    var el = (0, _enzyme.shallow)(_react2.default.createElement(_Base2.default, { Component: _reactNative.TouchableHighlight, activeOpacity: 0.1, backgroundColor: 'primary', underlayColor: '#eee' })).find(_reactNative.TouchableHighlight);
    (0, _chai.expect)(el.props().activeOpacity).to.equal(0.1);
  });
});