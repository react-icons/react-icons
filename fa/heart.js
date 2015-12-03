
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaHeart extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m16.3 32.1q-0.3 0.3-0.7 0.3t-0.8-0.3l-10.8-10.4q-0.2-0.2-0.5-0.5t-1-1.1q-0.6-0.8-1.2-1.7t-0.9-2.1q-0.4-1.2-0.4-2.4 0-3.8 2.2-6t6.1-2.1q1.1 0 2.2 0.3t2.1 1q0.9 0.7 1.6 1.2t1.4 1.2q0.6-0.6 1.3-1.2t1.6-1.2q1-0.6 2.1-1t2.2-0.3q3.9 0 6.1 2.1t2.2 6q0 3.8-4 7.8l-10.8 10.4z"/></g>
            </IconBase>
        );
    }
}
