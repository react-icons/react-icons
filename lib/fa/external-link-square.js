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

var FaExternalLinkSquare = function FaExternalLinkSquare(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.6 20.7v-10.7q0-0.6-0.5-1t-1-0.4h-10.7q-0.9 0-1.3 0.8-0.4 1 0.3 1.6l3.2 3.2-11.9 11.9q-0.4 0.5-0.4 1t0.4 1l2.3 2.3q0.4 0.4 1 0.4t1-0.4l11.9-11.9 3.2 3.2q0.4 0.4 1 0.4 0.3 0 0.6-0.1 0.9-0.3 0.9-1.3z m5.7-11.4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
        )
    );
};

exports.default = FaExternalLinkSquare;
module.exports = exports['default'];