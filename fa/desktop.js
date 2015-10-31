
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaDesktop extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m37.3 20.9v-17.3q0-0.3-0.2-0.5t-0.4-0.2h-33.4q-0.2 0-0.4 0.2t-0.2 0.5v17.3q0 0.3 0.2 0.5t0.4 0.2h33.4q0.2 0 0.4-0.2t0.2-0.5z m2.7-17.3v22.6q0 1.4-1 2.4t-2.3 1h-11.4q0 0.8 0.4 1.6t0.6 1.5 0.4 0.9q0 0.5-0.4 0.9t-1 0.4h-10.6q-0.6 0-1-0.4t-0.4-0.9q0-0.3 0.4-0.9t0.6-1.5 0.4-1.6h-11.4q-1.3 0-2.3-1t-1-2.4v-22.6q0-1.4 1-2.4t2.3-1h33.4q1.3 0 2.3 1t1 2.4z"/></g>
            </IconBase>
        );
    }
}
