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

var FaIndustry = function FaIndustry(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm10 0q0.6 0 1 0.4t0.4 1v19.9l12-9.6q0.4-0.3 0.9-0.3 0.6 0 1 0.5t0.4 1v8.4l12-9.6q0.4-0.3 0.9-0.3 0.5 0 1 0.5t0.4 1v25.7q0 0.5-0.4 1t-1 0.4h-37.2q-0.6 0-1-0.4t-0.4-1v-37.2q0-0.6 0.4-1t1-0.4h8.6z' })
        )
    );
};

exports.default = FaIndustry;
module.exports = exports['default'];