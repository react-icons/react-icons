
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaSpoon extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m12.2 12.7q0 2.5-1 4.2t-2.6 2.4l0.8 14.2q0 0.5-0.3 0.8t-0.8 0.4h-3.3q-0.5 0-0.8-0.4t-0.2-0.8l0.7-14.2q-1.6-0.7-2.6-2.4t-1-4.2q0-2.2 0.7-4.3t2.1-3.5q1.3-1.4 2.8-1.4t2.7 1.4q1.3 1.4 2.1 3.5t0.7 4.3z"/></g>
            </IconBase>
        );
    }
}
