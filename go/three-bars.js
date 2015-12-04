
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoThreeBars extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m5 7.5v5h30v-5h-30z m0 15h30v-5h-30v5z m0 10h30v-5h-30v5z"/></g>
            </IconBase>
        );
    }
}
