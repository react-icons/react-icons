
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaChevronCircleLeft extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m23 29.4l2.1-2.1q0.4-0.4 0.4-1t-0.4-0.9l-6.5-6.5 6.5-6.5q0.4-0.4 0.4-0.9t-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-0.9 0.4l-9.6 9.6q-0.4 0.4-0.4 0.9t0.4 1l9.6 9.5q0.4 0.4 0.9 0.4t1-0.4z m13.2-10.5q0 4.4-2.2 8.1t-5.9 5.9-8.1 2.2-8.1-2.2-5.9-5.9-2.2-8.1 2.2-8.1 5.9-5.9 8.1-2.2 8.1 2.2 5.9 5.9 2.2 8.1z"/></g>
            </IconBase>
        );
    }
}
