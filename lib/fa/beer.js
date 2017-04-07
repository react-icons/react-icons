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

var FaBeer = function FaBeer(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm14.8 20v-8.6h-5.7v5.7q0 1.2 0.8 2.1t2 0.8h2.9z m22.8 10v4.3h-25.7v-4.3l2.9-4.3h-2.9q-3.5 0-6-2.5t-2.5-6.1v-7.1l-1.5-1.4 0.7-2.9h10.8l0.7-2.8h21.4l0.7 4.2-1.4 0.8v17.8z' })
        )
    );
};

exports.default = FaBeer;
module.exports = exports['default'];