
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaTag extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m7.1 12.9q0.7-0.7 0.7-1.6t-0.7-1.6q-0.6-0.6-1.5-0.6t-1.6 0.6q-0.7 0.7-0.7 1.6t0.7 1.6q0.6 0.6 1.6 0.6t1.5-0.6z m19.2 8.4q0 0.9-0.6 1.6l-8.6 8.5q-0.6 0.7-1.5 0.7-1 0-1.6-0.7l-12.4-12.4q-0.7-0.7-1.1-1.8t-0.5-2v-7.2q0-0.9 0.7-1.6t1.5-0.6h7.2q1 0 2.1 0.4t1.7 1.1l12.5 12.4q0.6 0.7 0.6 1.6z"/></g>
            </IconBase>
        );
    }
}
