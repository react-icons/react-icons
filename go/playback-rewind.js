
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoPlaybackRewind extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 20l15 10v-20l-15 10z m-15 0l15 10v-20l-15 10z"/></g>
            </IconBase>
        );
    }
}
