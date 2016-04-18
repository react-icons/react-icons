
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaColumns extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m5.1 34.3h13.5v-25.7h-14.2v25q0 0.3 0.2 0.5t0.5 0.2z m30.7-0.7v-25h-14.3v25.7h13.6q0.3 0 0.5-0.2t0.2-0.5z m2.8-27.2v27.2q0 1.4-1 2.5t-2.5 1h-30q-1.5 0-2.5-1t-1.1-2.5v-27.2q0-1.4 1-2.5t2.6-1h30q1.4 0 2.5 1t1 2.5z"/></g>
            </IconBase>
        );
    }
}
