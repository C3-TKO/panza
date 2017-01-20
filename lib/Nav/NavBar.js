'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Base = require('../Base');

var _Base2 = _interopRequireDefault(_Base);

var _NavTitle = require('./NavTitle');

var _NavTitle2 = _interopRequireDefault(_NavTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultNavbarStyle = {
  backgroundColor: 'white',
  borderBottomWidth: 1 / _reactNative.PixelRatio.get(),
  borderBottomColor: 'rgba(0,0,0,0.3)'
};

/**
 * Static navigation bar that mimics that found
 * within ReactNative. To be used when you want a static
 * representation of the NavBar, without transitions.
 */

var Navbar = function Navbar(props) {
  var style = props.style,
      children = props.children,
      title = props.title,
      transparent = props.transparent,
      backgroundColor = props.backgroundColor,
      titleColor = props.titleColor,
      LeftButton = props.LeftButton,
      RightButton = props.RightButton,
      other = _objectWithoutProperties(props, ['style', 'children', 'title', 'transparent', 'backgroundColor', 'titleColor', 'LeftButton', 'RightButton']);

  return _react2.default.createElement(
    _Base2.default,
    _extends({
      baseStyle: styles.navWrapper,
      style: style,
      backgroundColor: backgroundColor
    }, other),
    _react2.default.createElement(
      _reactNative.View,
      {
        style: [styles.navBar, children && styles.hasChildren, transparent && styles.transparent]
      },
      _react2.default.createElement(
        _reactNative.View,
        { style: styles.navTopRow },
        title && _react2.default.createElement(_NavTitle2.default, {
          color: titleColor,
          style: [styles.titleStyle, _extends({}, _reactNative.Platform.select({
            web: {
              left: LeftButton ? '40' : 0
            }
          }))],
          label: title
        }),
        _react2.default.createElement(
          _reactNative.View,
          null,
          LeftButton
        ),
        _react2.default.createElement(
          _reactNative.View,
          null,
          RightButton
        )
      ),
      children && _react2.default.createElement(
        _reactNative.View,
        { style: styles.children },
        children
      )
    )
  );
};

Navbar.displayName = 'NavBar';

Navbar.defaultStyles = defaultNavbarStyle;

Navbar.propTypes = {
  title: _react.PropTypes.string,
  LeftButton: _react.PropTypes.node,
  RightButton: _react.PropTypes.node,
  style: _react.PropTypes.any,
  children: _react.PropTypes.node,
  transparent: _react.PropTypes.bool,
  backgroundColor: _react.PropTypes.string,
  titleColor: _react.PropTypes.string
};

Navbar.totalNavHeight = _reactNative.Platform.select({
  ios: 44 + 20,
  android: 56
});

exports.default = Navbar;


var styles = _reactNative.StyleSheet.create({
  hasChildren: {
    height: Navbar.totalNavHeight + 80
  },
  children: _extends({
    height: 80
  }, _reactNative.Platform.select({
    android: { marginTop: 0 }
  })),
  navTopRow: _extends({
    flexDirection: 'row',
    flex: 1,
    height: Navbar.totalNavHeight,
    justifyContent: 'space-between',
    paddingBottom: 20
  }, _reactNative.Platform.select({
    web: {
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      paddingBottom: 0
    }
  })),
  navBar: _extends({}, defaultNavbarStyle, {
    height: Navbar.totalNavHeight,
    flexDirection: 'column',
    backgroundColor: 'transparent',

    justifyContent: 'flex-start'
  }, _reactNative.Platform.select({
    ios: { paddingTop: 20 },
    android: {
      paddingTop: 0,
      paddingLeft: 5,
      paddingRight: 5
    }
  })),
  titleStyle: _extends({}, _reactNative.Platform.select({
    android: {
      position: 'absolute',
      left: 70,
      right: 0,
      bottom: 15
    },
    ios: {
      position: 'absolute',
      alignItems: 'center',
      right: 0,
      bottom: 30,
      left: 0,
      justifyContent: 'center'
    },
    web: {
      position: 'absolute',
      alignItems: 'flex-start',
      right: 0,
      bottom: 13,
      paddingLeft: 16,
      left: 0
    }
  })),
  transparent: {
    borderBottomWidth: 0,
    backgroundColor: 'transparent'
  }
});