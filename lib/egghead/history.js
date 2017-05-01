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

var EggheadHistory = function EggheadHistory(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 20 18' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Dashboard', stroke: 'none', strokeWidth: '1', 'fill-rule': 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'New-Dashboard', transform: 'translate(-985.000000, -371.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: '\uD83D\uDCC9Stats', transform: 'translate(930.000000, 196.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'Stats/LessonsWatched', transform: 'translate(28.000000, 112.000000)' },
                            _react2.default.createElement(
                                'g',
                                { id: 'button/browse-history', transform: 'translate(26.000000, 61.000000)' },
                                _react2.default.createElement(
                                    'g',
                                    { id: 'Page-1' },
                                    _react2.default.createElement('path', { d: 'M12.4285714,2 C7.69523784,2 3.85714286,6.0300002 3.85714286,11 L1,11 L4.70476177,14.8899993 L4.7714286,15.0299987 L8.61904762,11 L5.76190476,11 C5.76190476,7.13000011 8.74285725,4 12.4285714,4 C16.1142847,4 19.0952381,7.13000011 19.0952381,11 C19.0952381,14.8699998 16.1142847,18 12.4285714,18 C10.5904758,18 8.92380923,17.209999 7.72380901,15.9400005 L6.37142798,17.3600006 C7.92380995,18.9899997 10.057143,20 12.4285714,20 C17.1619059,20 21,15.9699993 21,11 C21,6.03000068 17.1619041,2 12.4285714,2 Z M11.4761905,7 L11.4761905,12 L15.5523815,14.5399999 L16.2380952,13.3299999 L12.9047619,11.25 L12.9047619,7 L11.4761905,7 Z', id: 'ico-history' })
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

exports.default = EggheadHistory;
module.exports = exports['default'];