
var React = require('react');
var IconBase = require('../IconBase');

export default class MdPause extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></g>
            </IconBase>
        );
    }
}
