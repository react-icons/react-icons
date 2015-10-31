
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaChild extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.6 11.6l-6.2 6.1v17.4q0 1-0.7 1.7t-1.7 0.7-1.6-0.7-0.7-1.7v-8.1h-1.4v8.1q0 1-0.7 1.7t-1.6 0.7-1.7-0.7-0.7-1.7v-17.4l-6.2-6.1q-0.6-0.6-0.6-1.5t0.6-1.4 1.5-0.6 1.4 0.6l4.8 4.8h7.8l4.8-4.8q0.6-0.6 1.4-0.6t1.5 0.6 0.6 1.4-0.6 1.5z m-6.9-3.5q0 2-1.4 3.3t-3.3 1.4-3.3-1.4-1.4-3.3 1.4-3.3 3.3-1.4 3.3 1.4 1.4 3.3z"/></g>
            </IconBase>
        );
    }
}
