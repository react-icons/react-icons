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

var FaLineChart = function FaLineChart(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm39.8 32.4v2.5h-39.8v-29.8h2.5v27.3h37.3z m-2.5-24.2v8.4q0 0.5-0.4 0.6t-0.7-0.1l-2.3-2.4-12.3 12.3q-0.2 0.2-0.5 0.2t-0.4-0.2l-4.5-4.5-8.1 8.1-3.8-3.8 11.4-11.3q0.2-0.2 0.4-0.2t0.5 0.2l4.5 4.5 9-9-2.3-2.4q-0.3-0.3-0.2-0.6t0.6-0.4h8.4q0.3 0 0.5 0.2t0.2 0.4z' })
        )
    );
};

exports.default = FaLineChart;
module.exports = exports['default'];