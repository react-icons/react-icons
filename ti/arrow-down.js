
var React = require('react');
var IconBase = require('../IconBase');

export default class TiArrowDown extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M16.707 13.293c-.391-.391-1.023-.391-1.414 0l-2.293 2.293v-7.586c0-.552-.447-1-1-1s-1 .448-1 1v7.586l-2.293-2.293c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l4.707 4.707 4.707-4.707c.391-.391.391-1.023 0-1.414z"/></g>
            </IconBase>
        );
    }
}
