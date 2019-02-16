
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoPrimitiveSquare extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 30h-20v-20h20v20z"/></g>
            </IconBase>
        );
    }
}
