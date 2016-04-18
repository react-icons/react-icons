
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoIssueOpened extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 2.5c-9.7 0-17.5 7.8-17.5 17.5s7.8 17.5 17.5 17.5 17.5-7.8 17.5-17.5-7.8-17.5-17.5-17.5z m0 30c-6.9 0-12.5-5.6-12.5-12.5 0-6.9 5.6-12.5 12.5-12.5 6.9 0 12.5 5.6 12.5 12.5 0 6.9-5.6 12.5-12.5 12.5z m-2.5-2.5h5v-5h-5v5z m0-7.5h5v-12.5h-5v12.5z"/></g>
            </IconBase>
        );
    }
}
