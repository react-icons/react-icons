
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaUndo extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m36.2 18.9q0 3.3-1.3 6.3t-3.4 5.2-5.2 3.4-6.3 1.3q-3.6 0-6.9-1.5t-5.6-4.3q-0.1-0.3-0.1-0.5t0.2-0.4l2.9-3q0.2-0.1 0.5-0.1 0.3 0 0.5 0.2 1.5 2 3.8 3.1t4.7 1.1q2.2 0 4.2-0.9t3.4-2.3 2.3-3.4 0.9-4.2-0.9-4.2-2.3-3.4-3.4-2.3-4.2-0.9q-2.1 0-4 0.7t-3.3 2.2l2.8 2.9q0.7 0.6 0.3 1.5-0.3 0.8-1.2 0.8h-9.5q-0.5 0-0.9-0.4t-0.4-0.9v-9.5q0-0.9 0.8-1.2 0.9-0.4 1.5 0.3l2.7 2.7q2.3-2.2 5.2-3.3t6-1.2q3.3 0 6.3 1.3t5.2 3.4 3.4 5.2 1.3 6.3z"/></g>
            </IconBase>
        );
    }
}
