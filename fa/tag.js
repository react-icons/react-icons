
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaTag extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m13.2 9.5q0-1.2-0.7-2t-2-0.7-1.9 0.7-0.8 2 0.8 1.9 1.9 0.8 2-0.8 0.7-1.9z m22.6 12.1q0 1.1-0.8 1.9l-10.4 10.4q-0.8 0.8-1.9 0.8-1.1 0-1.9-0.8l-15.1-15.1q-0.8-0.8-1.3-2.2t-0.6-2.4v-8.8q0-1.1 0.8-1.9t1.9-0.8h8.8q1.1 0 2.4 0.6t2.2 1.3l15.1 15.1q0.8 0.8 0.8 1.9z"/></g>
            </IconBase>
        );
    }
}
