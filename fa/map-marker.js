
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaMapMarker extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25.6 14.3q0-2.4-1.6-4.1t-4.1-1.6-4 1.6-1.7 4.1 1.7 4 4 1.7 4.1-1.7 1.6-4z m5.8 0q0 2.4-0.8 4l-8.1 17.3q-0.4 0.7-1.1 1.1t-1.5 0.4-1.5-0.4-1-1.1l-8.2-17.3q-0.7-1.6-0.7-4 0-4.7 3.3-8.1t8.1-3.3 8.1 3.3 3.4 8.1z"/></g>
            </IconBase>
        );
    }
}
