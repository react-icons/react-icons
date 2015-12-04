
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoIssueOpened extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 2.5c-9.665 0-17.5 7.835000000000001-17.5 17.5s7.835000000000001 17.5 17.5 17.5 17.5-7.835000000000001 17.5-17.5-7.835000000000001-17.5-17.5-17.5z m0 30c-6.904999999999999 0-12.5-5.596250000000001-12.5-12.5s5.595000000000001-12.5 12.5-12.5c6.903749999999999 0 12.5 5.594999999999999 12.5 12.5s-5.596250000000001 12.5-12.5 12.5z m-2.5-2.5h5v-5h-5v5z m0-7.5h5v-12.5h-5v12.5z"/></g>
            </IconBase>
        );
    }
}
