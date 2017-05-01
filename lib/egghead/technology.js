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

var EggheadTechnology = function EggheadTechnology(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 18 11' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Symbols', stroke: 'none', strokeWidth: '1', 'fill-rule': 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'Language', transform: 'translate(0.000000, -6.000000)', stroke: '#B0B6BE', 'fill-rule': 'nonzero' },
                    _react2.default.createElement('path', { d: 'M13.442082,16.5 L1.0500691,16.5 L4.85409634,11.8151769 L5.11001672,11.5 L4.85409634,11.1848231 L1.0500691,6.5 L13.442082,6.5 L17.3645049,11.5 L13.442082,16.5 Z', id: 'ico-technology' })
                )
            )
        )
    );
};

exports.default = EggheadTechnology;
module.exports = exports['default'];