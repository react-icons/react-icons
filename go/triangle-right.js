
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoTriangleRight extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m12.5 5l15 15-15 15v-30z"/></g>
            </IconBase>
        );
    }
}
