
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaImage extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m13.3 13.4q0 1.6-1.2 2.8t-2.8 1.1-2.8-1.1-1.2-2.8 1.2-2.9 2.8-1.1 2.8 1.1 1.2 2.9z m21.3 7.9v9.3h-29.3v-4l6.7-6.6 3.3 3.3 10.6-10.6z m1.9-14.6h-33.2q-0.2 0-0.4 0.2t-0.2 0.5v25.2q0 0.3 0.2 0.5t0.4 0.2h33.2q0.3 0 0.5-0.2t0.2-0.5v-25.2q0-0.3-0.2-0.5t-0.5-0.2z m3.4 0.7v25.2q0 1.4-1 2.4t-2.4 0.9h-33.2q-1.3 0-2.3-0.9t-1-2.4v-25.2q0-1.4 1-2.4t2.3-0.9h33.2q1.4 0 2.4 0.9t1 2.4z"/></g>
            </IconBase>
        );
    }
}
