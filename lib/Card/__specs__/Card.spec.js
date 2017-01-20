'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _index = require('../../index');

var _reactNative = require('react-native');

var _Button = require('../../Buttons/__specs__/Button.spec');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

describe('<Card />', function () {

  function render(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return (0, _enzyme.shallow)(_react2.default.createElement(
      _index.Card,
      props,
      _react2.default.createElement(
        _index.Text,
        null,
        'Hi'
      )
    )).find(_reactNative.View);
  }

  it('should render with certain props', function () {
    var card = render();
    (0, _chai.expect)(card.props).to.have.properties('mt', 1);
    (0, _Button.shouldContainStyle)(card, 'backgroundColor', 'white');
    (0, _Button.shouldContainStyle)(card, 'borderTopWidth', _reactNative.StyleSheet.hairlineWidth);
    (0, _Button.shouldContainStyle)(card, 'borderBottomWidth', _reactNative.StyleSheet.hairlineWidth);
  });
});

describe('<CardHeader />', function () {

  function render(_ref2) {
    var props = _objectWithoutProperties(_ref2, []);

    return (0, _enzyme.shallow)(_react2.default.createElement(
      _index.CardHeader,
      _extends({
        avatar: 'hi',
        title: 'title',
        subtitle: 'subtitle'
      }, props),
      _react2.default.createElement(
        _index.Text,
        null,
        'Child'
      )
    )).find(_reactNative.View);
  }

  it('should render the appropriate widgets', function () {
    var header = render();
    (0, _chai.expect)(header.find(_index.Image)).to.have.length(1);
    (0, _chai.expect)(header.find(_index.Text)).to.have.length(3);
  });
});