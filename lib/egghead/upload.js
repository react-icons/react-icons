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

var EggheadUpload = function EggheadUpload(props) {
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
                    { id: 'ico_upload' },
                    _react2.default.createElement('path', { d: 'M7.42857143,14 L12.5714286,14 L12.5714286,8.46153846 L16,8.46153846 L10,2 L4,8.46153846 L7.42857143,8.46153846 L7.42857143,14 Z M4,15.2352941 L16,15.2352941 L16,17 L4,17 L4,15.2352941 Z' })
                )
            )
        )
    );
};

exports.default = EggheadUpload;
module.exports = exports['default'];