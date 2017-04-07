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

var FaCreditCard = function FaCreditCard(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm36.5 4.1q1.4 0 2.4 0.9t1 2.4v25.2q0 1.4-1 2.4t-2.4 0.9h-33.2q-1.3 0-2.3-0.9t-1-2.4v-25.2q0-1.4 1-2.4t2.3-0.9h33.2z m-33.2 2.6q-0.2 0-0.4 0.2t-0.2 0.5v4.6h34.5v-4.6q0-0.3-0.2-0.5t-0.5-0.2h-33.2z m33.2 26.6q0.3 0 0.5-0.2t0.2-0.5v-12.6h-34.5v12.6q0 0.3 0.2 0.5t0.4 0.2h33.2z m-31.2-2.7v-2.6h5.3v2.6h-5.3z m8 0v-2.6h8v2.6h-8z' })
        )
    );
};

exports.default = FaCreditCard;
module.exports = exports['default'];