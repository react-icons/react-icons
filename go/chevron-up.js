
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoChevronUp extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 10l-12.5 12.5 5 5 7.5-7.5 7.5 7.5 5-5-12.5-12.5z"/></g>
            </IconBase>
        );
    }
}
