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

var EggheadEggheadPlus = function EggheadEggheadPlus(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 20 20' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Page-1', stroke: 'none', 'stroke-width': '1', 'fill-rule': 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'ico_plus' },
                    _react2.default.createElement('path', { d: 'M11.5,9.5 L11.5,3 L9.5,3 L9.5,9.5 L3,9.5 L3,11.5 L9.5,11.5 L9.5,18 L11.5,18 L11.5,11.5 L18,11.5 L18,9.5 L11.5,9.5 Z' })
                )
            )
        )
    );
};

exports.default = EggheadEggheadPlus;
module.exports = exports['default'];