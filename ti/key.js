
var React = require('react');
var IconBase = require('../IconBase');

export default class TiKey extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M8.5 11c0 .732.166 1.424.449 2.051l-3.949 3.949v1.5s.896 1.5 2 1.5h2v-2h2v-2h2.5c2.762 0 5-2.238 5-5s-2.238-5-5-5-5 2.238-5 5zm5 2c-1.104 0-2-.896-2-2 0-1.105.896-2.002 2-2.002 1.105 0 2 .896 2 2.002 0 1.104-.895 2-2 2z"/></g>
            </IconBase>
        );
    }
}
