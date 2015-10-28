
var React = require('react');
var IconBase = require('../IconBase');

export default class TiThList extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M19 17h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2z"/><circle cx="5" cy="19" r="2.5"/><circle cx="5" cy="12" r="2.5"/><circle cx="5" cy="5" r="2.5"/></g>
            </IconBase>
        );
    }
}
