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

var EggheadEggheadCheck = function EggheadEggheadCheck(props) {
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
                    { id: 'ico_check' },
                    _react2.default.createElement('path', { d: 'M19.9060502,4.3812312 L20,4.47203565 L16.834936,7.53113798 L6.62794455,18 L0,11.2020088 L2.24104545,8.91965449 L6.62812026,13.419284 L17.7722832,2 L20,4.28487107 L19.9060502,4.3812312 Z' })
                )
            )
        )
    );
};

exports.default = EggheadEggheadCheck;
module.exports = exports['default'];