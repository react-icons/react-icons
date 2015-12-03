
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaChild extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20.6 13.1l-5 5v14.3q0 0.8-0.6 1.4t-1.4 0.6q-0.8 0-1.4-0.6t-0.5-1.4v-6.6h-1.1v6.6q0 0.8-0.6 1.4t-1.4 0.6q-0.8 0-1.4-0.6t-0.5-1.4v-14.3l-5.1-5q-0.5-0.5-0.5-1.2t0.5-1.2q0.5-0.5 1.2-0.5t1.2 0.5l3.9 4h6.4l4-4q0.5-0.5 1.1-0.5t1.2 0.5q0.5 0.5 0.5 1.2t-0.5 1.2z m-6.7-5.6q1.1 1.1 1.1 2.7t-1.1 2.8q-1.2 1.1-2.8 1.1t-2.7-1.1q-1.2-1.2-1.2-2.8t1.2-2.7q1.1-1.2 2.7-1.2t2.8 1.2z"/></g>
            </IconBase>
        );
    }
}
