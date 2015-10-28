
var React = require('react');
var IconBase = require('../IconBase');

export default class TiThSmall extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><circle cx="5" cy="19" r="2.5"/><circle cx="5" cy="12" r="2.5"/><circle cx="5" cy="5" r="2.5"/><circle cx="12" cy="19" r="2.5"/><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="5" r="2.5"/><circle cx="19" cy="19" r="2.5"/><circle cx="19" cy="12" r="2.5"/><circle cx="19" cy="5" r="2.5"/></g>
            </IconBase>
        );
    }
}
