
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaLock extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m13.2 16.2h10.8v-4q0-2.3-1.6-3.9t-3.8-1.5-3.8 1.5-1.6 3.9v4z m17.6 2v12.2q0 0.8-0.6 1.4t-1.5 0.6h-20.2q-0.9 0-1.5-0.6t-0.5-1.4v-12.2q0-0.8 0.5-1.4t1.5-0.6h0.7v-4q0-3.9 2.7-6.7t6.7-2.8 6.7 2.8 2.8 6.7v4h0.6q0.9 0 1.5 0.6t0.6 1.4z"/></g>
            </IconBase>
        );
    }
}
