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

var FaTwitch = function FaTwitch(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 9.7v9.7h-3.2v-9.7h3.2z m8.9 0v9.7h-3.3v-9.7h3.3z m0 17l5.6-5.7v-17.8h-26.6v23.4h7.3v4.9l4.8-4.9h8.9z m8.9-26.7v22.6l-9.7 9.7h-7.3l-4.8 4.8h-4.9v-4.8h-8.9v-25.8l2.5-6.5h33.1z' })
        )
    );
};

exports.default = FaTwitch;
module.exports = exports['default'];