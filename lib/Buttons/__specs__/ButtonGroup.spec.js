'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _index = require('../../index');

var _reactNative = require('react-native');

var _Button = require('./Button.spec');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

describe('<ButtonGroup />', function () {

  function render(_ref, children) {
    var props = _objectWithoutProperties(_ref, []);

    return (0, _enzyme.shallow)(_react2.default.createElement(
      _index.ButtonGroup,
      props,
      _react2.default.createElement(
        _index.Button,
        null,
        'One'
      ),
      _react2.default.createElement(
        _index.Button,
        null,
        'Two'
      ),
      _react2.default.createElement(
        _index.Button,
        null,
        'Three'
      )
    )).find(_reactNative.View);
  }

  it('should render 1 component', function () {
    (0, _chai.expect)(render()).to.have.length(1);
  });

  it('should render the button children', function () {
    (0, _chai.expect)(render().children).to.have.length(3);
  });

  it('should add certain props to children', function () {
    var group = render();
    (0, _chai.expect)(group.find('Button').props).to.have.property('flex', 1);

    var seg = render({ segmented: true });
    (0, _chai.expect)(seg.find('Button').props).to.have.property('rounded', false);
    (0, _chai.expect)(seg.find('Button').props).to.have.property('block', true);
  });

  it('should support the rounded prop', function () {
    var group = render({ rounded: 5 });
    (0, _Button.shouldContainStyle)(group.find('Button'), 'borderTopLeftRadius', 5);
    (0, _Button.shouldContainStyle)(group.find('Button'), 'borderBottomLeftRadius', 5);
  });

  it('be horizontal by default', function () {
    var group = render();
    (0, _chai.expect)(group.props).to.have.property('flexDirection', 'row');
    (0, _chai.expect)(group.props).to.have.property('flex', 1);
  });

  it('should support vertical prop', function () {
    var group = render({ vertical: true, rounded: true });
    (0, _Button.shouldContainStyle)(group.find('Button'), 'borderTopLeftRadius', 5);
    (0, _Button.shouldContainStyle)(group.find('Button'), 'borderTopRightRadius', 5);
    (0, _chai.expect)(group.props).to.have.property('flexDirection', 'column');
    (0, _chai.expect)(group.props).to.have.property('flex', 0);
  });
});