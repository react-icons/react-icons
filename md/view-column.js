
var React = require('react');
var IconBase = require('../IconBase');

export default class MdViewColumn extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"/></g>
            </IconBase>
        );
    }
}
