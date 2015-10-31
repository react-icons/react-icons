
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCreditCard extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m36.7 2.9q1.3 0 2.3 1t1 2.3v25.4q0 1.4-1 2.3t-2.3 1h-33.4q-1.3 0-2.3-1t-1-2.3v-25.4q0-1.3 1-2.3t2.3-1h33.4z m-33.4 2.7q-0.2 0-0.4 0.2t-0.2 0.4v4.7h34.6v-4.7q0-0.2-0.2-0.4t-0.4-0.2h-33.4z m33.4 26.6q0.2 0 0.4-0.1t0.2-0.5v-12.7h-34.6v12.7q0 0.3 0.2 0.5t0.4 0.1h33.4z m-31.4-2.6v-2.7h5.4v2.7h-5.4z m8 0v-2.7h8v2.7h-8z"/></g>
            </IconBase>
        );
    }
}
