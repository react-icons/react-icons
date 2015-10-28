
var React = require('react');
var IconBase = require('../IconBase');

export default class TiArrowUpThick extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M12 3.172l-6.414 6.414c-.781.781-.781 2.047 0 2.828s2.047.781 2.828 0l1.586-1.586v7.242c0 1.104.895 2 2 2 1.104 0 2-.896 2-2v-7.242l1.586 1.586c.391.391.902.586 1.414.586s1.023-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-6.414-6.414z"/></g>
            </IconBase>
        );
    }
}
