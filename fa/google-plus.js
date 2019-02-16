
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaGooglePlus extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25.2 20.3q0 3.6-1.6 6.5t-4.3 4.4-6.5 1.6q-2.6 0-5-1t-4.1-2.7-2.7-4.1-1-5 1-5 2.7-4.1 4.1-2.7 5-1q5 0 8.6 3.3l-3.5 3.4q-2-2-5.1-2-2.1 0-4 1.1t-2.8 2.9-1.1 4.1 1.1 4.1 2.8 2.9 4 1.1q1.5 0 2.7-0.4t2-1 1.4-1.4 0.8-1.4 0.4-1.3h-7.3v-4.4h12.1q0.3 1.1 0.3 2.1z m15.1-2.1v3.6h-3.6v3.7h-3.7v-3.7h-3.7v-3.6h3.7v-3.7h3.7v3.7h3.6z"/></g>
            </IconBase>
        );
    }
}
