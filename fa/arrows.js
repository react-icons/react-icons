
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaArrows extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m40 20q0 0.6-0.4 1l-5.7 5.7q-0.5 0.4-1 0.4t-1-0.4-0.5-1v-2.8h-8.5v8.5h2.8q0.6 0 1 0.5t0.4 1-0.4 1l-5.7 5.7q-0.4 0.4-1 0.4t-1-0.4l-5.7-5.7q-0.4-0.5-0.4-1t0.4-1 1-0.5h2.8v-8.5h-8.5v2.8q0 0.6-0.5 1t-1 0.4-1-0.4l-5.7-5.7q-0.4-0.4-0.4-1t0.4-1l5.7-5.7q0.5-0.4 1-0.4t1.1 0.4 0.4 1v2.8h8.5v-8.5h-2.8q-0.6 0-1-0.5t-0.4-1 0.4-1l5.7-5.7q0.4-0.4 1-0.4t1 0.4l5.7 5.7q0.4 0.5 0.4 1t-0.4 1-1 0.5h-2.8v8.5h8.5v-2.8q0-0.6 0.5-1t1-0.4 1 0.4l5.7 5.7q0.4 0.4 0.4 1z"/></g>
            </IconBase>
        );
    }
}
