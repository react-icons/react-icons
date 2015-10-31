
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaClose extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m32.5 27.9q0 0.8-0.6 1.4l-2.8 2.9q-0.6 0.6-1.5 0.6t-1.4-0.6l-6.2-6.2-6.2 6.2q-0.6 0.6-1.4 0.6t-1.5-0.6l-2.8-2.9q-0.6-0.6-0.6-1.4t0.6-1.4l6.2-6.2-6.2-6.2q-0.6-0.6-0.6-1.5t0.6-1.4l2.8-2.9q0.6-0.6 1.5-0.6t1.4 0.6l6.2 6.2 6.2-6.2q0.6-0.6 1.4-0.6t1.5 0.6l2.8 2.9q0.6 0.6 0.6 1.4t-0.6 1.5l-6.2 6.2 6.2 6.2q0.6 0.5 0.6 1.4z"/></g>
            </IconBase>
        );
    }
}
