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

var EggheadCross = function EggheadCross(props) {
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
                    { id: 'ico_cross' },
                    _react2.default.createElement('polygon', { points: '16.9999991 15.0259994 15.0259994 16.9999991 9.99999955 11.9739991 4.97399965 16.9999991 3 15.0259994 8.02599982 9.99999955 3 4.97399965 4.97399965 3 9.99999955 8.02599982 15.0259994 3 16.9999991 4.97399965 11.9739991 9.99999955' })
                )
            )
        )
    );
};

exports.default = EggheadCross;
module.exports = exports['default'];