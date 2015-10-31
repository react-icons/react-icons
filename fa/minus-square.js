
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaMinusSquare extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30.8 20.3v-2.7q0-0.6-0.4-1t-0.9-0.4h-19q-0.5 0-0.9 0.4t-0.4 1v2.7q0 0.5 0.4 0.9t0.9 0.4h19q0.5 0 0.9-0.4t0.4-0.9z m5.4-11.5v20.2q0 2.5-1.8 4.3t-4.3 1.8h-20.2q-2.5 0-4.3-1.8t-1.8-4.3v-20.2q0-2.5 1.8-4.3t4.3-1.8h20.2q2.5 0 4.3 1.8t1.8 4.3z"/></g>
            </IconBase>
        );
    }
}
