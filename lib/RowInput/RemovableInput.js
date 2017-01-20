'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveButton = exports.RowAction = exports.RowActions = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../index');

var _RevealingRow = require('./RevealingRow');

var _RevealingRow2 = _interopRequireDefault(_RevealingRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function noop() {}

var VerticalDivider = function VerticalDivider() {
  return _react2.default.createElement(_reactNative.View, { style: { width: 1, backgroundColor: 'white' } });
};

/**
 * A collection of RowActions to be displayed behind
 * a revealing row.
 */

var RowActions = function RowActions(_ref) {
  var children = _ref.children,
      style = _ref.style,
      other = _objectWithoutProperties(_ref, ['children', 'style']);

  var buttons = [];

  if (Array.isArray(children)) {
    children.forEach(function (child, i) {
      var isNotLast = i < children.length - 1;
      buttons.push(child);
      if (isNotLast) {
        buttons.push(_react2.default.createElement(VerticalDivider, { key: 'divider' + i }));
      }
    });
  } else {
    buttons = children;
  }

  return _react2.default.createElement(
    _index.Base,
    _extends({
      baseStyle: [{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }, style]
    }, other),
    buttons
  );
};

exports.RowActions = RowActions;
RowActions.propTypes = {
  children: _react.PropTypes.node,
  style: _react.PropTypes.any
};

/**
 * A row action that hide underneath the row, such
 * as 'Delete', or 'Edit', etc.
 */

var RowAction = function RowAction(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ['children']);

  return _react2.default.createElement(
    _index.Base,
    _extends({
      justify: 'center',
      underlayColor: 'darken',
      px: 2,
      baseStyle: _reactNative.Platform.select({ web: { outline: 'none' } }),
      Component: _reactNative.TouchableHighlight
    }, props),
    _react2.default.createElement(
      _reactNative.View,
      null,
      children
    )
  );
};

exports.RowAction = RowAction;
RowAction.propTypes = {
  children: _react.PropTypes.node
};

/**
 * Remove button
 */

var RemoveButton = exports.RemoveButton = function RemoveButton(props) {
  return _react2.default.createElement(
    _index.Base,
    _extends({
      Component: _reactNative.TouchableOpacity,
      backgroundColor: 'error',
      baseStyle: styles.iconButton
    }, props),
    _react2.default.createElement(_index.Icon, {
      name: 'md-remove',
      size: 15,
      color: 'white'
    })
  );
};

/**
 * A removable input
 */

var RemovableInput = function (_React$Component) {
  _inherits(RemovableInput, _React$Component);

  function RemovableInput(props) {
    _classCallCheck(this, RemovableInput);

    var _this = _possibleConstructorReturn(this, (RemovableInput.__proto__ || Object.getPrototypeOf(RemovableInput)).call(this, props));

    _this.state = {
      showingOptions: false
    };
    return _this;
  }

  _createClass(RemovableInput, [{
    key: 'renderLabel',
    value: function renderLabel() {
      var _this2 = this;

      if (!this.props.label) return null;

      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        {
          style: [styles.label, this.props.labelWidth && { width: this.props.labelWidth }, this.props.vertical && { marginTop: 16 }],
          disabled: !this.props.editable || !this.props.onSelectLabel,
          onPress: function onPress() {
            if (_this2.state.showDelete) {
              _this2.hideDelete();
            }
            _this2.props.onSelectLabel();
          }
        },
        _react2.default.createElement(
          _index.Text,
          {
            color: this.props.editable && this.props.onSelectLabel ? 'primary' : 'default',
            baseStyle: styles.labelText
          },
          this.props.label
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var revealed = _react2.default.createElement(
        RowActions,
        null,
        _react2.default.createElement(
          RowAction,
          {
            key: 'cancel',
            onPress: function onPress() {
              _this3.setState({ showingOptions: false });
            },
            backgroundColor: '#eee'
          },
          _react2.default.createElement(
            _index.Text,
            { small: true },
            'Cancel'
          )
        ),
        _react2.default.createElement(
          RowAction,
          {
            key: 'delete',
            onPress: function onPress() {
              _this3.setState({ showingOptions: false });
              _this3.props.onRequestRemove();
            },
            backgroundColor: 'red'
          },
          _react2.default.createElement(
            _index.Text,
            { small: true, color: 'white' },
            'Remove'
          )
        )
      );

      var height = this.props.height;

      if (this.props.vertical) {
        height = this.props.verticalHeight;
      }

      if (height === 'auto') {
        height = null;
      }

      return _react2.default.createElement(
        _RevealingRow2.default,
        {
          style: { flex: 1, alignSelf: 'stretch' },
          showingOptions: this.state.showingOptions,
          revealedContent: revealed
        },
        _react2.default.createElement(
          _index.InputRowCell,
          { height: height },
          _react2.default.createElement(
            _index.Base,
            { row: this.props.removable, style: { alignSelf: 'stretch' }, flex: 1, pl: 2 },
            this.props.removable && _react2.default.createElement(RemoveButton, {
              style: { marginRight: 16 },
              onPress: function onPress() {
                _this3.setState({ showingOptions: true });
              }
            }),
            _react2.default.createElement(
              _index.Base,
              {
                flex: 1,
                style: { alignSelf: 'stretch' },
                row: !this.props.vertical
              },
              this.renderLabel(),
              this.props.editable ? _react2.default.createElement(_index.Input, {
                autoFocus: this.props.autoFocus,
                disabled: !this.props.editable,
                placeholder: this.props.placeholder,
                style: [styles.input, (this.props.vertical || !this.props.label) && { paddingLeft: 0 }],
                value: this.props.value,
                onChangeText: this.props.onChangeText
              }) : _react2.default.createElement(
                _index.Base,
                { px: 0, flex: 1, justifyContent: 'center' },
                _react2.default.createElement(
                  _index.Text,
                  { numberOfLines: 1 },
                  this.props.value
                )
              )
            )
          )
        )
      );
    }
  }]);

  return RemovableInput;
}(_react2.default.Component);

RemovableInput.displayName = 'RemovableInput';
RemovableInput.propTypes = {
  label: _react.PropTypes.string,
  autoFocus: _react.PropTypes.bool,
  removable: _react.PropTypes.bool,
  placeholder: _react.PropTypes.string,
  vertical: _react.PropTypes.bool,
  onSelectLabel: _react.PropTypes.func.isRequired,
  onChangeText: _react.PropTypes.func.isRequired,
  value: _react.PropTypes.string,
  backgroundColor: _react.PropTypes.string,
  editable: _react.PropTypes.bool,
  labelWidth: _react.PropTypes.number,
  verticalHeight: _react.PropTypes.number,
  onRequestRemove: _react.PropTypes.func,
  height: _react.PropTypes.number
};
RemovableInput.defaultProps = {
  removable: true,
  editable: true,
  backgroundColor: 'white',
  textAlign: 'right',
  keyboardType: 'numeric',
  autoFocus: true,
  vertical: false,
  onRequestRemove: noop,
  verticalHeight: 80,
  height: 50
};


var styles = _reactNative.StyleSheet.create({
  input: _extends({
    flex: 1,
    alignSelf: 'stretch',
    paddingRight: 16,
    paddingLeft: 16
  }, _reactNative.Platform.select({
    web: { height: '100%' }
  })),
  label: {
    flex: 0,
    alignItems: 'center',
    flexDirection: 'row'
  },
  labelText: {
    marginRight: 5
  },
  iconButton: {
    height: 20,
    width: 20,
    overflow: 'hidden',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 5
  }
});

exports.default = RemovableInput;