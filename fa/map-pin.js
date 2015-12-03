
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaMapPin extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m8.9 22.4q1.1 0 2.2-0.2v11.3q0 0.5-0.3 0.8t-0.8 0.4h-2.2q-0.5 0-0.8-0.4t-0.3-0.8v-11.3q1 0.2 2.2 0.2z m-6.3-16.3q2.6-2.6 6.3-2.6t6.3 2.6q2.6 2.6 2.6 6.3t-2.6 6.3q-2.6 2.6-6.3 2.6t-6.3-2.6q-2.6-2.6-2.6-6.3t2.6-6.3z m6.3 1.3q0.2 0 0.4-0.1t0.1-0.4q0-0.3-0.1-0.4t-0.4-0.2q-2.5 0-4.3 1.8t-1.8 4.3q0 0.3 0.1 0.4t0.4 0.2q0.3 0 0.4-0.2t0.2-0.4q0-2 1.5-3.5t3.5-1.5z"/></g>
            </IconBase>
        );
    }
}
