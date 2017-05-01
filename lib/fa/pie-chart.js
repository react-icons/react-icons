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

var FaPieChart = function FaPieChart(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm17.6 19.9l12.2 12.2q-2.3 2.4-5.5 3.7t-6.7 1.3q-4.6 0-8.6-2.3t-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3v17z m4.2 0.1h17.3q0 3.5-1.4 6.7t-3.7 5.5z m15.8-2.9h-17.1v-17.1q4.7 0 8.6 2.3t6.2 6.2 2.3 8.6z' })
        )
    );
};

exports.default = FaPieChart;
module.exports = exports['default'];