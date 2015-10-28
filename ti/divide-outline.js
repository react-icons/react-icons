
var React = require('react');
var IconBase = require('../IconBase');

export default class TiDivideOutline extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M12 8.5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4c-.552 0-1 .449-1 1s.448 1 1 1 1-.449 1-1-.448-1-1-1zM12 21.5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4c-.552 0-1 .449-1 1s.448 1 1 1 1-.449 1-1-.448-1-1-1zM18 15h-12c-1.654 0-3-1.346-3-3s1.346-3 3-3h12c1.654 0 3 1.346 3 3s-1.346 3-3 3zm-12-4c-.552 0-1 .449-1 1s.448 1 1 1h12c.552 0 1-.449 1-1s-.448-1-1-1h-12z"/></g>
            </IconBase>
        );
    }
}
