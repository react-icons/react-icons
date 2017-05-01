'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = require('react-icon-base');

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaInbox = function FaInbox(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm25.8 21.4h7.1q0 0-0.1-0.1t0-0.2l-4.8-11.1h-15.8l-4.7 11.1q0 0 0 0.2t-0.1 0.1h7.1l2.1 4.3h7.1z m11.5 0.7v10.8q0 0.5-0.4 1t-1 0.4h-31.5q-0.6 0-1-0.4t-0.4-1v-10.8q0-1.4 0.6-2.7l5.3-12.4q0.2-0.5 0.8-0.9t1.2-0.4h18.5q0.6 0 1.2 0.4t0.8 0.9l5.3 12.4q0.6 1.3 0.6 2.7z' })
        )
    );
};

exports.default = FaInbox;
module.exports = exports['default'];