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

var FaEraser = function FaEraser(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm18.6 30.6l7-7.9h-16l-6.9 7.9h15.9z m21-22.3q0.4 0.7 0.2 1.5t-0.6 1.3l-18.6 21.3q-0.8 0.9-2 0.9h-15.9q-0.8 0-1.5-0.4t-1-1.2q-0.3-0.7-0.2-1.5t0.7-1.3l18.6-21.3q0.8-0.9 2-0.9h15.9q0.8 0 1.5 0.4t0.9 1.2z' })
        )
    );
};

exports.default = FaEraser;
module.exports = exports['default'];