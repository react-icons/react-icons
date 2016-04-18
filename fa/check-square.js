
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCheckSquare extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m18.3 29l13.7-13.7q0.4-0.4 0.4-1t-0.4-1l-2.3-2.3q-0.4-0.4-1-0.4t-1 0.4l-10.4 10.4-4.7-4.7q-0.4-0.4-1-0.4t-1 0.4l-2.3 2.3q-0.4 0.4-0.4 1t0.4 1l8 8q0.4 0.4 1 0.4t1-0.4z m19-19.7v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"/></g>
            </IconBase>
        );
    }
}
