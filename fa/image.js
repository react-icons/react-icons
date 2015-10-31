
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaImage extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m13.3 12.2q0 1.7-1.1 2.9t-2.9 1.1-2.8-1.1-1.2-2.9 1.2-2.8 2.8-1.2 2.9 1.2 1.1 2.8z m21.4 8v9.4h-29.4v-4l6.7-6.7 3.3 3.3 10.7-10.6z m2-14.6h-33.4q-0.2 0-0.4 0.2t-0.2 0.4v25.4q0 0.3 0.2 0.5t0.4 0.1h33.4q0.2 0 0.4-0.1t0.2-0.5v-25.4q0-0.2-0.2-0.4t-0.4-0.2z m3.3 0.6v25.4q0 1.4-1 2.3t-2.3 1h-33.4q-1.3 0-2.3-1t-1-2.3v-25.4q0-1.3 1-2.3t2.3-1h33.4q1.3 0 2.3 1t1 2.3z"/></g>
            </IconBase>
        );
    }
}
