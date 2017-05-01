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

var FaMapSigns = function FaMapSigns(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm39 6.6q0.2 0.3 0.2 0.5t-0.2 0.6l-3.2 3.1q-0.6 0.6-1.5 0.6h-30q-0.6 0-1-0.4t-0.4-1v-5.7q0-0.6 0.4-1t1-0.4h12.8v-1.5q0-0.6 0.5-1t1-0.4h2.8q0.6 0 1 0.4t0.5 1v1.5h11.4q0.9 0 1.5 0.6z m-21.9 20.5h5.8v11.5q0 0.6-0.5 1t-1 0.4h-2.8q-0.6 0-1-0.4t-0.5-1v-11.5z m18.6-10q0.6 0 1 0.5t0.4 1v5.7q0 0.6-0.4 1t-1 0.4h-30q-0.9 0-1.5-0.6l-3.1-3.2q-0.3-0.2-0.3-0.5t0.2-0.5l3.2-3.1q0.6-0.7 1.5-0.7h11.4v-4.2h5.8v4.2h12.8z' })
        )
    );
};

exports.default = FaMapSigns;
module.exports = exports['default'];