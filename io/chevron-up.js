
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoChevronUp extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m17.5 16.7l-13.6 13.1c-0.3 0.3-0.9 0.3-1.2 0l-2.5-2.4c-0.3-0.3-0.3-0.9 0-1.2l16.7-16c0.1-0.1 0.4-0.2 0.6-0.2s0.5 0.1 0.6 0.2l16.7 16c0.3 0.3 0.3 0.9 0 1.2l-2.5 2.4c-0.3 0.3-0.9 0.3-1.2 0l-13.6-13.1z"/></g>
            </IconBase>
        );
    }
}
