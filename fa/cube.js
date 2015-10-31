
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCube extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 34.4l13.5-7.4v-13.4l-13.5 4.9v15.9z m-1.4-18.3l14.8-5.3-14.8-5.4-14.7 5.4z m17.6-5.3v16.2q0 0.7-0.4 1.4t-1 1l-14.9 8.1q-0.6 0.3-1.3 0.3t-1.2-0.3l-14.9-8.1q-0.6-0.4-1-1t-0.4-1.4v-16.2q0-0.8 0.5-1.5t1.3-1l14.8-5.4q0.5-0.2 0.9-0.2t1 0.2l14.8 5.4q0.8 0.3 1.3 1t0.5 1.5z"/></g>
            </IconBase>
        );
    }
}
