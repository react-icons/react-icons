
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdMenu extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m5 30h30v-3.3h-30v3.3z m0-8.3h30v-3.4h-30v3.4z m0-11.7v3.3h30v-3.3h-30z"/></g>
            </IconBase>
        );
    }
}
