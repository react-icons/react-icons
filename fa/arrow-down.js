
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaArrowDown extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m37.5 18.6q0 1.2-0.9 2l-14.5 14.5q-0.9 0.9-2 0.9-1.2 0-2-0.9l-14.6-14.5q-0.8-0.8-0.8-2 0-1.2 0.8-2.1l1.7-1.6q0.9-0.9 2-0.9 1.2 0 2 0.9l6.6 6.5v-15.7q0-1.1 0.8-2t2-0.8h2.9q1.2 0 2 0.8t0.9 2v15.7l6.5-6.5q0.8-0.9 2-0.9 1.2 0 2.1 0.9l1.6 1.6q0.9 0.9 0.9 2.1z"/></g>
            </IconBase>
        );
    }
}
