
var React = require('react');
var IconBase = require('../IconBase');

export default class MdChevronRight extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></g>
            </IconBase>
        );
    }
}
