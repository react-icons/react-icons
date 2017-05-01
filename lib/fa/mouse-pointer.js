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

var FaMousePointer = function FaMousePointer(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm32.3 23.3q0.7 0.7 0.3 1.5-0.4 0.9-1.3 0.9h-8.5l4.4 10.6q0.3 0.6 0 1.1t-0.7 0.8l-4 1.7q-0.5 0.2-1.1 0t-0.7-0.8l-4.3-10.1-7 7q-0.4 0.4-1 0.4-0.2 0-0.5-0.1-0.9-0.4-0.9-1.3v-33.6q0-0.9 0.9-1.3 0.3-0.1 0.5-0.1 0.6 0 1 0.4z' })
        )
    );
};

exports.default = FaMousePointer;
module.exports = exports['default'];