
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoArrowUp extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 7.5l-12.5 15h7.5v10h10v-10h7.5l-12.5-15z"/></g>
            </IconBase>
        );
    }
}
