
var React = require('react');
var IconBase = require('../IconBase');

export default class TiArrowRight extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M13.293 7.293c-.391.391-.391 1.023 0 1.414l2.293 2.293h-7.586c-.552 0-1 .448-1 1s.448 1 1 1h7.586l-2.293 2.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l4.707-4.707-4.707-4.707c-.391-.391-1.023-.391-1.414 0z"/></g>
            </IconBase>
        );
    }
}
