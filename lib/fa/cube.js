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

var FaCube = function FaCube(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm21.5 36.4l14.3-7.8v-14.2l-14.3 5.2v16.8z m-1.4-19.3l15.5-5.7-15.5-5.7-15.6 5.7z m18.5-5.7v17.2q0 0.8-0.4 1.4t-1.1 1.1l-15.7 8.5q-0.6 0.4-1.3 0.4t-1.4-0.4l-15.7-8.5q-0.7-0.4-1.1-1.1t-0.4-1.4v-17.2q0-0.9 0.5-1.6t1.4-1.1l15.7-5.7q0.5-0.1 1-0.1t1 0.1l15.7 5.8q0.8 0.3 1.3 1t0.5 1.6z' })
        )
    );
};

exports.default = FaCube;
module.exports = exports['default'];