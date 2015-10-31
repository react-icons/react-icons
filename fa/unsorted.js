
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaUnsorted extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30.5 23q0 0.5-0.4 0.9l-9.5 9.5q-0.4 0.4-0.9 0.4t-1-0.4l-9.4-9.5q-0.4-0.4-0.4-0.9t0.4-1 0.9-0.4h18.9q0.6 0 1 0.4t0.4 1z m0-8.1q0 0.5-0.4 0.9t-1 0.4h-18.9q-0.5 0-0.9-0.4t-0.4-0.9 0.4-1l9.4-9.4q0.4-0.4 1-0.4t0.9 0.4l9.5 9.4q0.4 0.4 0.4 1z"/></g>
            </IconBase>
        );
    }
}
