
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaSquareO extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m28.8 5.4h-17.6q-1.4 0-2.4 1t-1 2.4v17.5q0 1.4 1 2.4t2.4 1h17.6q1.4 0 2.4-1t1-2.4v-17.5q0-1.4-1-2.4t-2.4-1z m6.1 3.4v17.5q0 2.5-1.8 4.3t-4.3 1.8h-17.6q-2.5 0-4.3-1.8t-1.8-4.3v-17.5q0-2.5 1.8-4.3t4.3-1.8h17.6q2.5 0 4.3 1.8t1.8 4.3z"/></g>
            </IconBase>
        );
    }
}
