
var React = require('react');
var IconBase = require('../IconBase');

export default class MdChevronLeft extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></g>
            </IconBase>
        );
    }
}
