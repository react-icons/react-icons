
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaFlickr extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30.9 2.9q2.6 0 4.5 1.8t1.9 4.6v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5z m-12.3 17.1q0-2-1.4-3.3t-3.4-1.4-3.3 1.4-1.4 3.3 1.4 3.3 3.3 1.4 3.4-1.4 1.4-3.3z m12.6 0q0-2-1.4-3.3t-3.4-1.4-3.3 1.4-1.4 3.3 1.4 3.3 3.3 1.4 3.4-1.4 1.4-3.3z"/></g>
            </IconBase>
        );
    }
}
