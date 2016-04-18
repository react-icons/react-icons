
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoPencil extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 2.5l-5 5 7.5 7.5 5-5-7.5-7.5z m-27.5 27.5l0 7.5 7.5 0 20-20-7.5-7.5-20 20z m7.5 5h-5v-5h2.5v2.5h2.5v2.5z"/></g>
            </IconBase>
        );
    }
}
