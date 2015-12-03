
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCoffee extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m27.9 17q1-1 1-2.3t-1-2.4q-1-1-2.3-1h-1.2v6.7h1.2q1.3 0 2.3-1z m-27.9 11h31.1q0 1.8-1.3 3.1t-3.1 1.3h-22.3q-1.8 0-3.1-1.3t-1.3-3.1z m30.3-18.1q1.9 2 1.9 4.8t-1.9 4.7q-2 1.9-4.7 1.9h-1.2v0.6q0 1.6-1.1 2.7t-2.7 1.2h-12.3q-1.6 0-2.7-1.2t-1.2-2.7v-12.8q0-0.5 0.4-0.8t0.8-0.3h20q2.7 0 4.7 1.9z"/></g>
            </IconBase>
        );
    }
}
