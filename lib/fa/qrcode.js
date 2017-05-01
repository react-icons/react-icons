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

var FaQrcode = function FaQrcode(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm13.1 25.7v2.9h-2.9v-2.9h2.9z m0-17.1v2.8h-2.9v-2.8h2.9z m17.1 0v2.8h-2.8v-2.8h2.8z m-22.8 22.8h8.5v-8.5h-8.5v8.5z m0-17.1h8.5v-8.6h-8.5v8.6z m17.1 0h8.6v-8.6h-8.6v8.6z m-5.7 5.7v14.3h-14.3v-14.3h14.3z m11.4 11.4v2.9h-2.8v-2.9h2.8z m5.7 0v2.9h-2.8v-2.9h2.8z m0-11.4v8.6h-8.5v-2.9h-2.9v8.6h-2.9v-14.3h8.6v2.9h2.9v-2.9h2.8z m-17.1-17.1v14.2h-14.3v-14.2h14.3z m17.1 0v14.2h-14.3v-14.2h14.3z' })
        )
    );
};

exports.default = FaQrcode;
module.exports = exports['default'];