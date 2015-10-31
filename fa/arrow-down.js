
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaArrowDown extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m36.4 17.6q0 1.1-0.7 1.9l-13.8 13.7q-0.8 0.8-1.9 0.8-1.1 0-1.9-0.8l-13.7-13.7q-0.8-0.8-0.8-1.9 0-1.2 0.8-2l1.5-1.5q0.9-0.8 1.9-0.8 1.2 0 1.9 0.8l6.2 6.2v-14.9q0-1.1 0.9-1.9t1.8-0.8h2.8q1 0 1.8 0.8t0.9 1.9v14.9l6.2-6.2q0.7-0.8 1.9-0.8 1 0 1.9 0.8l1.6 1.5q0.7 0.9 0.7 2z"/></g>
            </IconBase>
        );
    }
}
