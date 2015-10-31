
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaPlusCircle extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m29.5 20.3v-2.7q0-0.6-0.4-1t-1-0.4h-5.4v-5.4q0-0.5-0.4-0.9t-0.9-0.4h-2.8q-0.5 0-0.9 0.4t-0.4 0.9v5.4h-5.4q-0.5 0-1 0.4t-0.4 1v2.7q0 0.5 0.4 0.9t1 0.4h5.4v5.4q0 0.6 0.4 1t0.9 0.4h2.8q0.5 0 0.9-0.4t0.4-1v-5.4h5.4q0.5 0 1-0.4t0.4-0.9z m6.7-1.4q0 4.4-2.2 8.1t-5.9 5.9-8.1 2.2-8.1-2.2-5.9-5.9-2.2-8.1 2.2-8.1 5.9-5.9 8.1-2.2 8.1 2.2 5.9 5.9 2.2 8.1z"/></g>
            </IconBase>
        );
    }
}
