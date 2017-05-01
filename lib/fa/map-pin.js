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

var FaMapPin = function FaMapPin(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm19.9 24.3q1.5 0 2.9-0.3v14.6q0 0.6-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-14.6q1.3 0.3 2.8 0.3z m0-24.3q4.8 0 8.1 3.3t3.4 8.1-3.4 8.1-8.1 3.4-8.1-3.4-3.3-8.1 3.3-8.1 8.1-3.3z m0 5q0.3 0 0.5-0.2t0.2-0.5-0.2-0.5-0.5-0.2q-3.2 0-5.5 2.3t-2.3 5.5q0 0.3 0.2 0.5t0.5 0.2 0.5-0.2 0.2-0.5q0-2.6 1.9-4.5t4.5-1.9z' })
        )
    );
};

exports.default = FaMapPin;
module.exports = exports['default'];