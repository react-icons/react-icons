
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaPaintBrush extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m35.2 0q1.4 0 2.6 1t1.1 2.4q0 1.4-1 3.2-7 13.3-9.8 15.9-2 1.9-4.6 1.9-2.7 0-4.6-1.9t-1.9-4.7q0-2.7 2-4.4l13.4-12.3q1.3-1.1 2.8-1.1z m-19.2 21.8q0.8 1.6 2.2 2.8t3.2 1.6l0 1.5q0.1 4.5-2.7 7.3t-7.3 2.8q-2.6 0-4.6-1t-3.3-2.7-1.8-3.8-0.6-4.7q0.1 0.1 0.9 0.7t1.3 0.9 1.2 0.8 1 0.3q0.9 0 1.1-0.7 0.6-1.4 1.3-2.4t1.4-1.6 1.9-1 2.2-0.6 2.6-0.2z"/></g>
            </IconBase>
        );
    }
}
