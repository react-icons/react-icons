
var React = require('react');
var IconBase = require('../IconBase');

export default class MdArrowForward extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></g>
            </IconBase>
        );
    }
}
