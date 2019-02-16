
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoTriangleUp extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 10l-15 15h30l-15-15z"/></g>
            </IconBase>
        );
    }
}
