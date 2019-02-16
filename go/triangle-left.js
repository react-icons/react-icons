
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoTriangleLeft extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m12.5 20l15 15v-30l-15 15z"/></g>
            </IconBase>
        );
    }
}
