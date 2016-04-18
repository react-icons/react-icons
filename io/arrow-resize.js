
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoArrowResize extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m22.5 7.5h10v10l-3.9-3.9-15 15 3.9 3.9h-10v-10l3.9 3.9 15-15z"/></g>
            </IconBase>
        );
    }
}
