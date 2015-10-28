
var React = require('react');
var IconBase = require('../IconBase');

export default class MdPlusOne extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z"/></g>
            </IconBase>
        );
    }
}
