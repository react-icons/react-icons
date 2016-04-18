
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdDragHandle extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m6.6 25v-3.4h26.8v3.4h-26.8z m26.8-10v3.4h-26.8v-3.4h26.8z"/></g>
            </IconBase>
        );
    }
}
