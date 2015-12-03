
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaYcSquare extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m14 21l4.7-8.7h-2l-2.7 5.4q-0.4 0.9-0.8 1.6l-0.7-1.6-2.7-5.4h-2.1l4.6 8.6v5.6h1.7v-5.5z m12.7-10.2v16.6q0 2.1-1.5 3.6t-3.5 1.4h-16.7q-2.1 0-3.5-1.4t-1.5-3.6v-16.6q0-2.1 1.5-3.6t3.5-1.4h16.7q2 0 3.5 1.4t1.5 3.6z"/></g>
            </IconBase>
        );
    }
}
