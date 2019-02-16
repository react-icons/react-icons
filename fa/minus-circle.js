
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaMinusCircle extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30.1 21.4v-2.8q0-0.6-0.4-1t-1-0.5h-17.1q-0.6 0-1 0.5t-0.5 1v2.8q0 0.6 0.5 1t1 0.5h17.1q0.6 0 1-0.5t0.4-1z m7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"/></g>
            </IconBase>
        );
    }
}
