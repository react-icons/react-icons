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

var FaGamepad = function FaGamepad(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm17.3 24v-2.7q0-0.3-0.2-0.4t-0.5-0.2h-4v-4q0-0.3-0.2-0.5t-0.4-0.2h-2.7q-0.3 0-0.5 0.2t-0.2 0.5v4h-3.9q-0.3 0-0.5 0.1t-0.2 0.5v2.7q0 0.3 0.2 0.5t0.5 0.2h3.9v3.9q0 0.3 0.2 0.5t0.5 0.2h2.7q0.3 0 0.4-0.2t0.2-0.5v-3.9h4q0.3 0 0.5-0.2t0.2-0.5z m11.9 1.3q0-1.1-0.7-1.9t-1.9-0.7-1.9 0.7-0.8 1.9 0.8 1.9 1.9 0.8 1.9-0.8 0.7-1.9z m5.4-5.3q0-1.1-0.8-1.9t-1.9-0.8-1.9 0.8-0.8 1.9 0.8 1.9 1.9 0.8 1.9-0.8 0.8-1.9z m5.3 2.7q0 4.4-3.1 7.5t-7.6 3.1q-4 0-7-2.7h-4.6q-3 2.7-7 2.7-4.4 0-7.5-3.1t-3.1-7.5 3.1-7.6 7.5-3.1h18.6q4.4 0 7.6 3.1t3.1 7.6z' })
        )
    );
};

exports.default = FaGamepad;
module.exports = exports['default'];