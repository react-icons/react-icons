
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCheckSquare extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m18.2 27.4l13-12.9q0.4-0.4 0.4-1t-0.4-0.9l-2.1-2.2q-0.5-0.4-1-0.4t-0.9 0.4l-9.9 9.9-4.5-4.5q-0.4-0.4-0.9-0.4t-1 0.4l-2.1 2.2q-0.4 0.4-0.4 0.9t0.4 1l7.6 7.5q0.4 0.4 0.9 0.4t0.9-0.4z m18-18.6v20.2q0 2.5-1.8 4.3t-4.3 1.8h-20.2q-2.5 0-4.3-1.8t-1.8-4.3v-20.2q0-2.5 1.8-4.3t4.3-1.8h20.2q2.5 0 4.3 1.8t1.8 4.3z"/></g>
            </IconBase>
        );
    }
}
