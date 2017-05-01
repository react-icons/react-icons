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

var FaYCombinator = function FaYCombinator(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm21.1 22.4l5.9-11.1h-2.5l-3.5 6.9q-0.5 1.1-1 2.1l-0.9-2.1-3.5-6.9h-2.7l5.9 11v7.2h2.3v-7.1z m16.2-19.5v34.2h-34.3v-34.2h34.3z' })
        )
    );
};

exports.default = FaYCombinator;
module.exports = exports['default'];