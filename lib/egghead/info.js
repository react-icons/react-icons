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

var EggheadInfo = function EggheadInfo(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 20 20' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Page-1', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'ico_info' },
                    _react2.default.createElement('path', { d: 'M11,16 L9,16 L9,8 L11,8 L11,16 Z M11,6 L9,6 L9,4 L11,4 L11,6 Z' })
                )
            )
        )
    );
};

exports.default = EggheadInfo;
module.exports = exports['default'];