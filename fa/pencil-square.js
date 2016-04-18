
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaPencilSquare extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m12 24.7l3.4 3.4-1.1 1.2h-1.3v-2.2h-2.1v-1.2z m9.3-8.7q0.3 0.3-0.1 0.7l-6.5 6.5q-0.4 0.4-0.7 0.1-0.3-0.3 0.1-0.7l6.5-6.5q0.4-0.4 0.7-0.1z m-6.2 15.4l12.2-12.1-6.4-6.4-12.2 12.1v6.4h6.4z m13.6-13.5l2.1-2.1q0.6-0.6 0.6-1.5t-0.6-1.5l-3.4-3.4q-0.6-0.7-1.5-0.7t-1.6 0.7l-2 2z m8.6-8.6v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"/></g>
            </IconBase>
        );
    }
}
