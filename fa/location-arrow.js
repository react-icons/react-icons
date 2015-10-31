
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaLocationArrow extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m34.7 7.4l-13.5 27q-0.4 0.7-1.2 0.7-0.1 0-0.3 0-0.5-0.1-0.8-0.5t-0.3-0.8v-12.2h-12.1q-0.5 0-0.8-0.3t-0.5-0.7 0.1-0.9 0.6-0.7l27-13.5q0.3-0.1 0.6-0.1 0.6 0 1 0.4 0.3 0.3 0.3 0.7t-0.1 0.9z"/></g>
            </IconBase>
        );
    }
}
