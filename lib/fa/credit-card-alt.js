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

var FaCreditCardAlt = function FaCreditCardAlt(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm0 30.6v-10.6h40.3v10.6q0 1.2-0.8 2t-2 0.8h-34.7q-1.2 0-2-0.8t-0.8-2z m11.2-3.9v2.3h6.7v-2.3h-6.7z m-6.7 0v2.3h4.5v-2.3h-4.5z m33-20.1q1.2 0 2 0.8t0.8 2v3.9h-40.3v-3.9q0-1.2 0.8-2t2-0.8h34.7z' })
        )
    );
};

exports.default = FaCreditCardAlt;
module.exports = exports['default'];