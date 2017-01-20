'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RevealingRow = function (_React$Component) {
  _inherits(RevealingRow, _React$Component);

  _createClass(RevealingRow, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // animate in
      if (!this.props.showingOptions && nextProps.showingOptions) {
        this.showOptions();

        // animate out
      } else if (!nextProps.showingOptions && this.props.showingOptions) {
        this.hideOptions();
      }
    }
  }]);

  function RevealingRow(props) {
    _classCallCheck(this, RevealingRow);

    var _this = _possibleConstructorReturn(this, (RevealingRow.__proto__ || Object.getPrototypeOf(RevealingRow)).call(this, props));

    _this.onViewLayout = _this.onViewLayout.bind(_this);
    _this.state = {
      leftPosition: new _reactNative.Animated.Value(0),
      rowHeight: 40,
      renderRevealOptions: false,
      revealWidth: -150
    };
    return _this;
  }

  _createClass(RevealingRow, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this._actions) {
        var width = -this._actions.clientWidth;
        if (this.state.revealWidth !== width) {
          this.setState({ revealWidth: width });
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        renderRevealOptions: true,
        rowHeight: this._view.clientHeight
      });
    }
  }, {
    key: 'showOptions',
    value: function showOptions() {
      _reactNative.Animated.spring(this.state.leftPosition, { toValue: this.state.revealWidth }).start();
    }
  }, {
    key: 'hideOptions',
    value: function hideOptions() {
      _reactNative.Animated.spring(this.state.leftPosition, { toValue: 0 }).start();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactNative.View,
        { style: { position: 'relative', flex: 1 } },
        this.state.renderRevealOptions && _react2.default.createElement(
          _reactNative.View,
          { style: [styles.revealContainer, { height: this.state.rowHeight }] },
          _react2.default.createElement(
            'div',
            { style: { display: 'flex', height: this.state.rowHeight, alignSelf: 'flex-end' }, ref: function ref(actions) {
                return _this2._actions = actions;
              } },
            this.props.revealedContent
          )
        ),
        _react2.default.createElement(
          'div',
          { ref: function ref(_ref) {
              return _this2._view = _ref;
            } },
          _react2.default.createElement(
            _reactNative.Animated.View,
            {
              onLayout: this.onViewLayout,
              style: _extends({
                flex: 1,
                backgroundColor: 'white'
              }, _reactNative.Platform.select({
                ios: { transform: [{ translateX: this.state.leftPosition }] },
                android: { transform: [{ translateX: this.state.leftPosition }] },
                web: { left: this.state.leftPosition }
              }))
            },
            this.props.children
          )
        )
      );
    }
  }, {
    key: 'onViewLayout',
    value: function onViewLayout(e) {
      this.setState({
        renderRevealOptions: true,
        rowHeight: e.nativeEvent.layout.height
      });
    }
  }]);

  return RevealingRow;
}(_react2.default.Component);

RevealingRow.propTypes = {
  showingOptions: _react.PropTypes.bool.isRequired,
  revealedContent: _react.PropTypes.node.isRequired
};
RevealingRow.defaultProps = {
  showingOptions: false
};


var styles = _reactNative.StyleSheet.create({
  revealContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  }
});

exports.default = RevealingRow;