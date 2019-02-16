
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdMenu extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m5 10h30v3.4h-30v-3.4z m0 11.6v-3.2h30v3.2h-30z m0 8.4v-3.4h30v3.4h-30z"/></g>
            </IconBase>
        );
    }
}
