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

var FaObjectGroup = function FaObjectGroup(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm39.8 10.1h-2.5v19.8h2.5v7.5h-7.5v-2.5h-24.8v2.5h-7.5v-7.5h2.5v-19.8h-2.5v-7.5h7.5v2.5h24.8v-2.5h7.5v7.5z m-5-5v2.5h2.5v-2.5h-2.5z m-32.3 0v2.5h2.5v-2.5h-2.5z m2.5 29.8v-2.5h-2.5v2.5h2.5z m27.3-2.5v-2.5h2.5v-19.8h-2.5v-2.5h-24.8v2.5h-2.5v19.8h2.5v2.5h24.8z m5 2.5v-2.5h-2.5v2.5h2.5z m-12.5-19.9h7.5v14.9h-17.4v-4.9h-7.4v-14.9h17.3v4.9z m-14.9 7.5h12.5v-10h-12.5v10z m19.9 5v-10h-5v7.5h-7.4v2.5h12.4z' })
        )
    );
};

exports.default = FaObjectGroup;
module.exports = exports['default'];