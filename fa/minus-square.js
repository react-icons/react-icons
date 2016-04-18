
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaMinusSquare extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.6 21.4v-2.8q0-0.6-0.5-1t-1-0.5h-20q-0.5 0-1 0.5t-0.4 1v2.8q0 0.6 0.4 1t1 0.5h20q0.6 0 1-0.5t0.5-1z m5.7-12.1v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"/></g>
            </IconBase>
        );
    }
}
