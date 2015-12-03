
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCheckCircle extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m22.3 16.3q0-0.5-0.3-0.8l-1.6-1.6q-0.3-0.3-0.8-0.3t-0.8 0.3l-7 7.1-4-3.9q-0.3-0.4-0.8-0.4t-0.7 0.4l-1.6 1.5q-0.3 0.3-0.3 0.8 0 0.5 0.3 0.8l6.3 6.3q0.3 0.3 0.8 0.3 0.4 0 0.8-0.3l9.4-9.4q0.3-0.3 0.3-0.8z m2.6-3.9q1.8 3.1 1.8 6.7t-1.8 6.7q-1.8 3.1-4.9 4.8t-6.7 1.8q-3.6 0-6.7-1.8t-4.8-4.8q-1.8-3.1-1.8-6.7t1.8-6.7q1.8-3.1 4.8-4.8t6.7-1.8q3.7 0 6.7 1.8t4.9 4.8z"/></g>
            </IconBase>
        );
    }
}
