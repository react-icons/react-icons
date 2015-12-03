
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaFlickr extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m21.7 5.8q2 0 3.5 1.4t1.5 3.6v16.6q0 2.1-1.5 3.6t-3.5 1.4h-16.7q-2.1 0-3.5-1.4t-1.5-3.6v-16.6q0-2.1 1.5-3.6t3.5-1.4h16.7z m-10.7 15.9q1.1-1.1 1.1-2.6t-1.1-2.6q-1-1.1-2.6-1.1t-2.6 1.1q-1 1.1-1 2.6t1 2.6q1.1 1.1 2.6 1.1t2.6-1.1z m9.8 0q1.1-1.1 1.1-2.6t-1.1-2.6q-1-1.1-2.6-1.1t-2.6 1.1q-1.1 1.1-1.1 2.6t1.1 2.6q1.1 1.1 2.6 1.1t2.6-1.1z"/></g>
            </IconBase>
        );
    }
}
