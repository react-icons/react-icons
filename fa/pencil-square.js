
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaPencilSquare extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m7 22.8l2.7 2.6-0.9 0.9h-1v-1.6h-1.7v-1l0.9-0.9z m7.2-6.8q0.2 0.2-0.1 0.5l-5 5.1q-0.3 0.3-0.5 0-0.3-0.2 0-0.5l5.1-5q0.3-0.3 0.5-0.1z m-4.8 12l9.5-9.5-5-5-9.5 9.5v5h5z m10.6-10.6l1.6-1.6q0.5-0.5 0.5-1.1t-0.5-1.2l-2.6-2.7q-0.5-0.5-1.2-0.5t-1.2 0.5l-1.6 1.6 5 5z m6.7-6.6v16.6q0 2.1-1.5 3.6t-3.5 1.4h-16.7q-2.1 0-3.5-1.4t-1.5-3.6v-16.6q0-2.1 1.5-3.6t3.5-1.4h16.7q2 0 3.5 1.4t1.5 3.6z"/></g>
            </IconBase>
        );
    }
}
