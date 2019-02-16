
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaSignIn extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m29.4 20q0 0.6-0.4 1l-12.1 12.1q-0.5 0.5-1 0.5t-1-0.5-0.5-1v-6.4h-10q-0.5 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h10v-6.4q0-0.6 0.5-1t1-0.5 1 0.5l12.1 12.1q0.4 0.4 0.4 1z m7.9-7.9v15.8q0 2.6-1.9 4.5t-4.5 1.9h-7.2q-0.3 0-0.5-0.2t-0.2-0.5q0-0.1 0-0.5t0-0.6 0-0.5 0.3-0.4 0.4-0.2h7.2q1.4 0 2.5-1t1-2.5v-15.8q0-1.4-1-2.5t-2.5-1h-7l-0.3-0.1-0.2 0-0.2-0.1-0.2-0.2 0-0.3q0-0.1 0-0.5t0-0.6 0-0.5 0.3-0.4 0.4-0.2h7.2q2.6 0 4.5 1.9t1.9 4.5z"/></g>
            </IconBase>
        );
    }
}
