
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCreditCard extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30.6 5.8q1.1 0 1.9 0.8t0.8 1.9v21.2q0 1.1-0.8 1.9t-1.9 0.8h-27.8q-1.2 0-2-0.8t-0.8-1.9v-21.2q0-1.1 0.8-1.9t2-0.8h27.8z m-27.8 2.2q-0.2 0-0.4 0.2t-0.2 0.3v3.9h28.9v-3.9q0-0.2-0.2-0.3t-0.3-0.2h-27.8z m27.8 22.2q0.2 0 0.3-0.2t0.2-0.3v-10.6h-28.9v10.6q0 0.2 0.2 0.3t0.4 0.2h27.8z m-26.2-2.2v-2.2h4.5v2.2h-4.5z m6.7 0v-2.2h6.7v2.2h-6.7z"/></g>
            </IconBase>
        );
    }
}
