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

var FaMailReply = function FaMailReply(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm40 25q0 3.7-2.8 10.1-0.1 0.1-0.3 0.5t-0.3 0.7-0.3 0.5q-0.2 0.3-0.6 0.3-0.3 0-0.5-0.2t-0.2-0.5q0-0.2 0.1-0.6t0-0.6q0.1-1.5 0.1-2.7 0-2.3-0.4-4t-1-3.1-1.8-2.3-2.4-1.5-3-1-3.4-0.5-3.9-0.1h-5v5.7q0 0.6-0.4 1t-1 0.4-1-0.4l-11.5-11.4q-0.4-0.4-0.4-1t0.4-1l11.5-11.4q0.4-0.5 1-0.5t1 0.5 0.4 1v5.7h5q15.9 0 19.5 9 1.2 3 1.2 7.4z' })
        )
    );
};

exports.default = FaMailReply;
module.exports = exports['default'];