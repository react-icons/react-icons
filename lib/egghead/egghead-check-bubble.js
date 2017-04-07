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

var EggheadEggheadCheckBubble = function EggheadEggheadCheckBubble(props) {
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
                    { id: 'ico_check_bubble' },
                    _react2.default.createElement('path', { d: 'M0,10 C0,4.4771525 4.47593818,0 10,0 L10,0 C15.5228475,0 20,4.47593818 20,10 L20,10 C20,15.5228475 15.5240618,20 10,20 L10,20 C4.4771525,20 0,15.5240618 0,10 L0,10 Z M14.1985738,5.54876706 L15.7129595,7.03859052 L8.17794207,14.4513959 L4.28575799,10.6223399 L5.80851376,9.13483208 L8.17810767,11.465993 L14.1985738,5.54876706 Z', id: 'Combined-Shape' })
                )
            )
        )
    );
};

exports.default = EggheadEggheadCheckBubble;
module.exports = exports['default'];