
var React = require('react');
var IconBase = require('../IconBase');

export default class TiDivide extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><circle cx="12" cy="6" r="2.25"/><circle cx="12" cy="18" r="2.25"/><path d="M18 10h-12c-1.104 0-2 .896-2 2s.896 2 2 2h12c1.104 0 2-.896 2-2s-.896-2-2-2z"/></g>
            </IconBase>
        );
    }
}
