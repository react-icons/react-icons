
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoMinus extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m5 22.5v-5h30v5h-30z"/></g>
            </IconBase>
        );
    }
}
