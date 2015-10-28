
var React = require('react');
var IconBase = require('../IconBase');

export default class MdMenu extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></g>
            </IconBase>
        );
    }
}
