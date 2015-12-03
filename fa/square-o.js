
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaSquareO extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m19.4 8h-14.4q-1.1 0-2 0.8t-0.8 2v14.4q0 1.2 0.8 2t2 0.8h14.4q1.2 0 2-0.8t0.8-2v-14.4q0-1.2-0.8-2t-2-0.8z m5 2.8v14.4q0 2.1-1.4 3.5t-3.6 1.5h-14.4q-2.1 0-3.5-1.5t-1.5-3.5v-14.4q0-2.1 1.5-3.6t3.5-1.4h14.4q2.1 0 3.6 1.4t1.4 3.6z"/></g>
            </IconBase>
        );
    }
}
