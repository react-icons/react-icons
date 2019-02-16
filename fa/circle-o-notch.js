
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCircleONotch extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m39.3 20q0 3.9-1.5 7.5t-4.2 6.1-6.1 4.2-7.5 1.5-7.5-1.5-6.2-4.2-4.1-6.1-1.5-7.5q0-4.8 2.2-8.9t5.9-6.8 8.3-3.4v5.1q-4.9 1-8.1 4.9t-3.3 9.1q0 2.9 1.1 5.5t3.1 4.6 4.6 3 5.5 1.2 5.5-1.2 4.6-3 3-4.6 1.2-5.5q0-5.1-3.3-9.1t-8.1-4.9v-5.1q4.6 0.7 8.3 3.4t5.9 6.8 2.2 8.9z"/></g>
            </IconBase>
        );
    }
}
