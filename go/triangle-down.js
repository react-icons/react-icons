
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoTriangleDown extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m5 15l15 15 15-15h-30z"/></g>
            </IconBase>
        );
    }
}
