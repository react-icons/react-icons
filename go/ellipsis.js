
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoEllipsis extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 12.5h-20s-5 2.5-5 5v5s2.5 5 5 5h20s5-2.5 5-5v-5s-2.5-5-5-5z m-15 10h-5v-5h5v5z m7.5 0h-5v-5h5v5z m7.5 0h-5v-5h5v5z"/></g>
            </IconBase>
        );
    }
}
