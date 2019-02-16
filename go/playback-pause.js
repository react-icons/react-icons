
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoPlaybackPause extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m10 32.5h7.5v-25h-7.5v25z m12.5-25v25h7.5v-25h-7.5z"/></g>
            </IconBase>
        );
    }
}
