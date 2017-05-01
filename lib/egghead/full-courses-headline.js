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

var EggheadFullCoursesHeadline = function EggheadFullCoursesHeadline(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 24 24' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Dashboard', stroke: 'none', strokeWidth: '1', 'fill-rule': 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: '1-3-1-Browse-RxJS', transform: 'translate(-563.000000, -912.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: 'Group-14', transform: 'translate(0.000000, 824.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'Group-9', transform: 'translate(531.000000, 85.000000)' },
                            _react2.default.createElement(
                                'g',
                                { id: 'Icon/FullCourses', transform: 'translate(0.000000, 3.000000)' },
                                _react2.default.createElement('path', { d: 'M44,24 C37.372583,24 32,18.627417 32,12 C32,5.372583 37.372583,0 44,0 C50.627417,0 56,5.372583 56,12 C56,18.627417 50.627417,24 44,24 Z M42,17 L48,12 L42,7 L42,17 Z', id: 'ico_full_courses_headline' })
                            )
                        )
                    )
                )
            )
        )
    );
};

exports.default = EggheadFullCoursesHeadline;
module.exports = exports['default'];