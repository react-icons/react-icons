
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaNeuter extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 13.5q0 3.9-2.6 6.7t-6.3 3.3v10.6q0 0.2-0.1 0.4t-0.4 0.2h-1.2q-0.2 0-0.4-0.2t-0.1-0.4v-10.6q-3.8-0.4-6.3-3.3t-2.6-6.7q0-2 0.8-3.8t2.1-3.2q1.4-1.4 3.2-2.2t3.9-0.8q2 0 3.9 0.8t3.2 2.2q1.3 1.3 2.1 3.2t0.8 3.8z m-15.5 5.5q2.3 2.3 5.5 2.3t5.5-2.3q2.3-2.2 2.3-5.5t-2.3-5.5q-2.3-2.2-5.5-2.2t-5.5 2.2q-2.3 2.3-2.3 5.5t2.3 5.5z"/></g>
            </IconBase>
        );
    }
}
