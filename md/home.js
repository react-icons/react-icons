
var React = require('react');
var IconBase = require('../IconBase');

export default class MdHome extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></g>
            </IconBase>
        );
    }
}
