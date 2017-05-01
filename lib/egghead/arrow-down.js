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

var EggheadArrowDown = function EggheadArrowDown(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 12 8' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Symbols', stroke: 'none', strokeWidth: '1', 'fill-rule': 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: '\uD83D\uDC53Continue-Watching', transform: 'translate(-86.000000, -469.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: 'Group-2', transform: 'translate(62.000000, 464.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'ico-arrow-down', transform: 'translate(22.000000, 0.000000)' },
                            _react2.default.createElement('rect', { id: 'rectangle', opacity: '0.200000003', x: '0', y: '0', width: '16', height: '16' }),
                            _react2.default.createElement('polygon', { transform: 'translate(8.000000, 8.705000) scale(-1, 1) translate(-8.000000, -8.705000) ', points: '3.40999976 5 7.99999964 9.57999958 12.5899995 5 13.9999993 6.40999977 7.99999964 12.4099994 2 6.40999977' })
                        )
                    )
                )
            )
        )
    );
};

exports.default = EggheadArrowDown;
module.exports = exports['default'];