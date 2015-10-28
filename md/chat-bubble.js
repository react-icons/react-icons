
var React = require('react');
var IconBase = require('../IconBase');

export default class MdChatBubble extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></g>
            </IconBase>
        );
    }
}
