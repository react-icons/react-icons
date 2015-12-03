
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCheckSquare extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m11.9 26.1l10.7-10.7q0.3-0.3 0.3-0.7t-0.3-0.8l-1.8-1.8q-0.3-0.3-0.8-0.3t-0.8 0.3l-8.1 8.1-3.7-3.7q-0.3-0.3-0.7-0.3t-0.8 0.3l-1.8 1.8q-0.3 0.3-0.3 0.8t0.3 0.8l6.2 6.2q0.4 0.3 0.8 0.3t0.8-0.3z m14.8-15.3v16.6q0 2.1-1.5 3.6t-3.5 1.4h-16.7q-2.1 0-3.5-1.4t-1.5-3.6v-16.6q0-2.1 1.5-3.6t3.5-1.4h16.7q2 0 3.5 1.4t1.5 3.6z"/></g>
            </IconBase>
        );
    }
}
