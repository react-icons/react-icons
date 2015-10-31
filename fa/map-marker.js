
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaMapMarker extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25.1 13.5q0-2.2-1.6-3.8t-3.8-1.6-3.8 1.6-1.6 3.8 1.6 3.8 3.8 1.6 3.8-1.6 1.6-3.8z m5.4 0q0 2.3-0.7 3.8l-7.6 16.3q-0.4 0.7-1 1.1t-1.5 0.4-1.4-0.4-1-1.1l-7.7-16.3q-0.7-1.5-0.7-3.8 0-4.5 3.2-7.6t7.6-3.2 7.7 3.2 3.1 7.6z"/></g>
            </IconBase>
        );
    }
}
