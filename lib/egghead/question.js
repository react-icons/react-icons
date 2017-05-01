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

var EggheadQuestion = function EggheadQuestion(props) {
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
                    { id: 'ico_question' },
                    _react2.default.createElement('path', { d: 'M11.625,17.9999992 L9.375,17.9999992 L9.375,15.714285 L11.625,15.714285 L11.625,17.9999992 Z M13.9537495,9.14285677 L12.94125,10.1942853 C12.1312498,11.0285705 11.625,11.7142852 11.625,13.4285708 L9.375,13.4285708 L9.375,12.8571423 C9.375,11.599999 9.88124978,10.457142 10.69125,9.62285674 L12.0862498,8.18285659 C12.5024997,7.77142838 12.75,7.19999994 12.75,6.57142833 C12.75,5.31428564 11.7375003,4.28571417 10.5,4.28571417 C9.26249955,4.28571417 8.25,5.31428564 8.25,6.57142833 L6,6.57142833 C6,4.04571413 8.01374995,2 10.5,2 C12.98625,2 15,4.04571413 15,6.57142833 C15,7.57714269 14.5950003,8.49142857 13.9537495,9.14285677 Z' })
                )
            )
        )
    );
};

exports.default = EggheadQuestion;
module.exports = exports['default'];