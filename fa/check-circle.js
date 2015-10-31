
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCheckCircle extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30.9 15.5q0-0.6-0.4-1l-1.9-1.9q-0.4-0.4-1-0.4t-0.9 0.4l-8.6 8.6-4.8-4.8q-0.4-0.4-0.9-0.4t-1 0.4l-1.9 1.9q-0.4 0.4-0.4 1 0 0.6 0.4 1l7.6 7.6q0.4 0.4 1 0.4 0.5 0 1-0.4l11.4-11.5q0.4-0.3 0.4-0.9z m5.3 3.4q0 4.4-2.2 8.1t-5.9 5.9-8.1 2.2-8.1-2.2-5.9-5.9-2.2-8.1 2.2-8.1 5.9-5.9 8.1-2.2 8.1 2.2 5.9 5.9 2.2 8.1z"/></g>
            </IconBase>
        );
    }
}
