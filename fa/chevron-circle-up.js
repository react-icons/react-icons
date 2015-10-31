
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaChevronCircleUp extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m28.4 24l2.1-2.1q0.4-0.4 0.4-1t-0.4-0.9l-9.6-9.6q-0.4-0.4-0.9-0.4t-0.9 0.4l-9.6 9.6q-0.4 0.4-0.4 0.9t0.4 1l2.1 2.1q0.4 0.4 1 0.4t0.9-0.4l6.5-6.4 6.5 6.4q0.4 0.4 0.9 0.4t1-0.4z m7.8-5.1q0 4.4-2.2 8.1t-5.9 5.9-8.1 2.2-8.1-2.2-5.9-5.9-2.2-8.1 2.2-8.1 5.9-5.9 8.1-2.2 8.1 2.2 5.9 5.9 2.2 8.1z"/></g>
            </IconBase>
        );
    }
}
