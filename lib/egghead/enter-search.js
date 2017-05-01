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

var EggheadEnterSearch = function EggheadEnterSearch(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 12 13' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Dashboard', stroke: 'none', strokeWidth: '1', 'fill-rule': 'evenodd', opacity: '0.5' },
                _react2.default.createElement(
                    'g',
                    { id: 'New-Dashboard', transform: 'translate(-1277.000000, -122.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: 'Group-11', transform: 'translate(130.000000, 104.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'Group-5', transform: 'translate(1146.000000, 16.000000)' },
                            _react2.default.createElement('path', { d: 'M5.137931,6.88556562 L6.11724134,7.84577369 L3.64137923,10.2665799 L11.6206897,10.2665799 L11.6206897,3.5045513 L6.17241375,3.5045513 L6.11724134,2 L13,2 C13,2 13,3.29447056 13,3.5045513 C13,3.71463205 13,11.6189857 13,11.6189857 L3.64137923,11.6189857 L6.11724134,14.0397919 L5.137931,15 L1,10.9427828 L5.137931,6.88556562 Z', id: 'ico-enter-search' })
                        )
                    )
                )
            )
        )
    );
};

exports.default = EggheadEnterSearch;
module.exports = exports['default'];