
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoColorMode extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m5 5v30h30v-30h-30z m2.5 27.5v-25h25l-25 25z"/></g>
            </IconBase>
        );
    }
}
