'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * InputDatePicker a cross-platform InputRow inputting
 * dates.
 *
 * On iOS devices, the row examples to reveal
 * DatePickerIOS when selected. The humanized date should
 * be supplied as the value prop, and it should be
 * updated when the value of the date-picker changes.
 *
 * On Anroid, the date-picker prompts the user to select
 * a date in a modal menu.
 *
 */

var InputDatePicker = function (_React$Component) {
  _inherits(InputDatePicker, _React$Component);

  function InputDatePicker() {
    _classCallCheck(this, InputDatePicker);

    return _possibleConstructorReturn(this, (InputDatePicker.__proto__ || Object.getPrototypeOf(InputDatePicker)).apply(this, arguments));
  }

  _createClass(InputDatePicker, [{
    key: 'renderIOS',
    value: function renderIOS() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactNative.View,
        {
          style: styles.pickerWrapper
        },
        _react2.default.createElement(_reactNative.DatePickerIOS, {
          date: new Date(this.props.date),
          maximumDate: this.props.maxDate,
          minimumDate: this.props.minDate,
          mode: this.props.mode,
          onDateChange: function onDateChange(date) {
            _this2.props.onDateChange(date);
          }
        })
      );
    }
  }, {
    key: 'toggleDatePicker',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var _ref2, action, year, month, day, code, message;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_reactNative.Platform.OS === 'android')) {
                  _context.next = 16;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return _reactNative.DatePickerAndroid.open({
                  date: this.props.date,
                  minDate: this.props.minDate,
                  maxDate: this.props.maxDate
                });

              case 4:
                _ref2 = _context.sent;
                action = _ref2.action;
                year = _ref2.year;
                month = _ref2.month;
                day = _ref2.day;


                if (action === _reactNative.DatePickerAndroid.dismissedAction) {
                  // console.log('dismissed')
                } else {
                  this.props.onDateChange(new Date(year, month, day));
                }

                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](1);
                code = _context.t0.code;
                message = _context.t0.message;

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 12]]);
      }));

      function toggleDatePicker() {
        return _ref.apply(this, arguments);
      }

      return toggleDatePicker;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          expanded = _props.expanded,
          onToggleExpansion = _props.onToggleExpansion,
          label = _props.label,
          value = _props.value,
          editable = _props.editable,
          other = _objectWithoutProperties(_props, ['expanded', 'onToggleExpansion', 'label', 'value', 'editable']);

      var Row = _react2.default.createElement(_index.TouchableInput, _extends({
        label: label,
        value: value,
        onPress: function onPress() {
          if (_reactNative.Platform.OS === 'ios') {
            onToggleExpansion();
          } else if (_reactNative.Platform.OS === 'android') {
            _this3.toggleDatePicker();
          }
        },
        disabled: !editable
      }, other));

      return _react2.default.createElement(
        _index.InputExpandable,
        {
          expanded: _reactNative.Platform.OS === 'ios' ? expanded : false,
          Row: Row
        },
        _reactNative.Platform.OS === 'ios' && this.renderIOS()
      );
    }
  }]);

  return InputDatePicker;
}(_react2.default.Component);

InputDatePicker.displayName = 'InputDatePicker';
InputDatePicker.propTypes = {
  expanded: _react.PropTypes.bool.isRequired,

  /** function called to toggle the visibility of the date-picker. (iOS only) **/
  onToggleExpansion: _react.PropTypes.func.isRequired,

  /** the currently selected date to be displayed in collapsed row. **/
  value: _react.PropTypes.string,
  maxDate: _react.PropTypes.string,
  minDate: _react.PropTypes.string,
  label: _react.PropTypes.string,
  mode: _react.PropTypes.string,
  date: _react.PropTypes.object.isRequired,
  onDateChange: _react.PropTypes.func.isRequired,
  editable: _react.PropTypes.bool
};
InputDatePicker.defaultProps = {
  editable: true
};


var styles = _reactNative.StyleSheet.create({
  pickerWrapper: {
    flex: 1,
    alignSelf: 'stretch'
  }
});

exports.default = InputDatePicker;