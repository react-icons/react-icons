
var React = require('react');
var IconBase = require('../IconBase');

export default class MdArrowBack extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></g>
            </IconBase>
        );
    }
}
