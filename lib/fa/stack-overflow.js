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

var FaStackOverflow = function FaStackOverflow(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.8 36.4h-25v-10.7h-3.6v14.3h32.1v-14.3h-3.5v10.7z m-21.1-11.7l0.8-3.5 17.5 3.7-0.8 3.5z m2.3-8.3l1.5-3.3 16.2 7.6-1.5 3.2z m4.5-8l2.3-2.7 13.7 11.4-2.3 2.8z m8.9-8.4l10.6 14.3-2.8 2.2-10.7-14.4z m-16 32.8v-3.5h17.8v3.5h-17.8z' })
        )
    );
};

exports.default = FaStackOverflow;
module.exports = exports['default'];