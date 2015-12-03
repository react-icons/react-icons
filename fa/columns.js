
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaColumns extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m2.8 30.2h10.5v-20h-11.1v19.5q0 0.2 0.2 0.3t0.4 0.2z m23.9-0.5v-19.5h-11.1v20h10.5q0.2 0 0.4-0.2t0.2-0.3z m2.2-21.2v21.2q0 1.1-0.8 1.9t-2 0.8h-23.3q-1.2 0-2-0.8t-0.8-1.9v-21.2q0-1.1 0.8-1.9t2-0.8h23.3q1.2 0 2 0.8t0.8 1.9z"/></g>
            </IconBase>
        );
    }
}
