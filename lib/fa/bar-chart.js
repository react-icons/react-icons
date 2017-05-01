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

var FaBarChart = function FaBarChart(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm12.4 20v9.9h-4.9v-9.9h4.9z m7.5-9.9v19.8h-5v-19.8h5z m19.9 22.3v2.5h-39.8v-29.8h2.5v27.3h37.3z m-12.5-17.4v14.9h-4.9v-14.9h4.9z m7.5-7.4v22.3h-5v-22.3h5z' })
        )
    );
};

exports.default = FaBarChart;
module.exports = exports['default'];