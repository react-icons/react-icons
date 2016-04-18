
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoBookmark extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m12.5 5v30l7.5-5 7.5 5v-30h-15z m12.4 7.7l-2.9 2 1.1 3.3c0.1 0.3 0 0.4-0.3 0.2l-2.8-2-2.8 2c-0.3 0.2-0.4 0.1-0.3-0.2l1.1-3.3-2.9-2c-0.2-0.2-0.1-0.4 0.2-0.4l3.4 0 1.1-3.2c0.1-0.4 0.3-0.4 0.4 0l1.1 3.2 3.4 0c0.4 0 0.4 0.2 0.2 0.4z"/></g>
            </IconBase>
        );
    }
}
