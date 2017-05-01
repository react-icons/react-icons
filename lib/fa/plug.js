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

var FaPlug = function FaPlug(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm39.2 10.1q0.8 0.8 0.8 2t-0.8 2.1l-9 8.9 3.4 3.3-3.6 3.6q-3.6 3.6-8.7 4.2t-9.2-2.3l-8.1 8.1h-4v-4l8.1-8.1q-2.8-4.1-2.3-9.2t4.2-8.7l3.6-3.6 3.3 3.4 8.9-9q0.9-0.8 2.1-0.8t2 0.8 0.8 2-0.8 2.1l-8.9 8.9 5.2 5.2 8.9-8.9q0.9-0.8 2.1-0.8t2 0.8z' })
        )
    );
};

exports.default = FaPlug;
module.exports = exports['default'];