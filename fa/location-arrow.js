
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaLocationArrow extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m35.8 7.8l-14.3 28.6q-0.4 0.7-1.3 0.7-0.1 0-0.3 0-0.5-0.1-0.8-0.5t-0.3-0.9v-12.8h-12.9q-0.5 0-0.9-0.3t-0.5-0.8 0.1-1 0.7-0.6l28.6-14.3q0.2-0.2 0.6-0.2 0.6 0 1 0.4 0.3 0.4 0.4 0.8t-0.1 0.9z"/></g>
            </IconBase>
        );
    }
}
