
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaArrowLeft extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m36.2 18.9v2.7q0 1.1-0.7 1.9t-1.8 0.8h-14.8l6.2 6.2q0.8 0.8 0.8 1.9t-0.8 1.9l-1.6 1.6q-0.8 0.8-1.9 0.8-1.1 0-1.9-0.8l-13.8-13.7q-0.8-0.8-0.8-1.9 0-1.1 0.8-2l13.8-13.7q0.8-0.8 1.9-0.8 1.1 0 1.9 0.8l1.6 1.6q0.8 0.8 0.8 1.9t-0.8 1.9l-6.2 6.2h14.8q1.1 0 1.8 0.8t0.7 1.9z"/></g>
            </IconBase>
        );
    }
}
