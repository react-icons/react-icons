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

var EggheadArrowLeft = function EggheadArrowLeft(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 8 12' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Symbols', stroke: 'none', strokeWidth: '1', 'fill-rule': 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: '\uD83D\uDC53Continue-Watching', transform: 'translate(-110.000000, -466.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: 'Group-2', transform: 'translate(62.000000, 464.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'ico-arrow-left', transform: 'translate(44.000000, 0.000000)' },
                            _react2.default.createElement('rect', { id: 'rectangle', opacity: '0.200000003', x: '0', y: '0', width: '16', height: '16' }),
                            _react2.default.createElement('polygon', { transform: 'translate(7.705000, 8.000000) scale(-1, 1) rotate(-90.000000) translate(-7.705000, -8.000000) ', points: '3.11499982 4.29499994 7.7049997 8.87499951 12.2949995 4.29499994 13.7049993 5.7049997 7.7049997 11.7049993 1.70500006 5.7049997' })
                        )
                    )
                )
            )
        )
    );
};

exports.default = EggheadArrowLeft;
module.exports = exports['default'];