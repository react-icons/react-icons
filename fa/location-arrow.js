
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaLocationArrow extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m24.3 9.6l-11.1 22.2q-0.3 0.6-1 0.6-0.1 0-0.2 0-0.4-0.1-0.7-0.4t-0.2-0.7v-10h-10q-0.4 0-0.7-0.2t-0.4-0.6q-0.1-0.4 0.1-0.8t0.5-0.5l22.2-11.1q0.3-0.1 0.5-0.1 0.5 0 0.8 0.3 0.3 0.3 0.3 0.6t-0.1 0.7z"/></g>
            </IconBase>
        );
    }
}
