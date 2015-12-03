
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaPlus extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m24.4 16.3v3.4q0 0.6-0.4 1.1t-1.2 0.5h-7.2v7.2q0 0.7-0.5 1.2t-1.2 0.5h-3.3q-0.7 0-1.2-0.5t-0.5-1.2v-7.2h-7.2q-0.7 0-1.2-0.5t-0.5-1.1v-3.4q0-0.7 0.5-1.2t1.2-0.4h7.2v-7.3q0-0.7 0.5-1.2t1.2-0.4h3.3q0.7 0 1.2 0.4t0.5 1.2v7.3h7.2q0.7 0 1.2 0.4t0.4 1.2z"/></g>
            </IconBase>
        );
    }
}
