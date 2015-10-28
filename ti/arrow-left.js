
var React = require('react');
var IconBase = require('../IconBase');

export default class TiArrowLeft extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M17 11h-7.586l2.293-2.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-4.707 4.707 4.707 4.707c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-2.293-2.293h7.586c.552 0 1-.448 1-1s-.448-1-1-1z"/></g>
            </IconBase>
        );
    }
}
