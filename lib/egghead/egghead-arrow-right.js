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

var EggheadEggheadArrowRight = function EggheadEggheadArrowRight(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 18 18' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Page-1', stroke: 'none', 'stroke-width': '1', 'fill-rule': 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'ico_arrow_right' },
                    _react2.default.createElement('polygon', { transform: 'translate(10.000000, 9.000000) rotate(-90.000000) translate(-10.000000, -9.000000) ', points: '5.40999984 5.4 10 9.85020237 14.5900001 5.4 16 6.77004037 10 12.6 4 6.77004037' })
                )
            )
        )
    );
};

exports.default = EggheadEggheadArrowRight;
module.exports = exports['default'];