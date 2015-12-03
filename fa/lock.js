
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaLock extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m5.6 16.9h8.8v-3.4q0-1.8-1.3-3.1t-3.1-1.3q-1.8 0-3.1 1.3t-1.3 3.1v3.4z m14.4 1.6v10q0 0.7-0.5 1.2t-1.2 0.5h-16.6q-0.7 0-1.2-0.5t-0.5-1.2v-10q0-0.7 0.5-1.1t1.2-0.5h0.5v-3.4q0-3.2 2.3-5.4t5.5-2.3q3.2 0 5.5 2.3t2.3 5.4v3.4h0.5q0.7 0 1.2 0.5t0.5 1.1z"/></g>
            </IconBase>
        );
    }
}
