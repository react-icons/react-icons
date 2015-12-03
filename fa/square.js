
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaSquare extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m26.7 10.8v16.6q0 2.1-1.5 3.6t-3.5 1.4h-16.7q-2.1 0-3.5-1.4t-1.5-3.6v-16.6q0-2.1 1.5-3.6t3.5-1.4h16.7q2 0 3.5 1.4t1.5 3.6z"/></g>
            </IconBase>
        );
    }
}
