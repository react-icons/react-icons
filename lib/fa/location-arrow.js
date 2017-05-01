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

var FaLocationArrow = function FaLocationArrow(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm35.8 7.8l-14.3 28.6q-0.4 0.7-1.3 0.7-0.1 0-0.3 0-0.5-0.1-0.8-0.5t-0.3-0.9v-12.8h-12.9q-0.5 0-0.9-0.3t-0.5-0.8 0.1-1 0.7-0.6l28.6-14.3q0.2-0.2 0.6-0.2 0.6 0 1 0.4 0.3 0.4 0.4 0.8t-0.1 0.9z' })
        )
    );
};

exports.default = FaLocationArrow;
module.exports = exports['default'];