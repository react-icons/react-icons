
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaArrowDown extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m28 18q0 0.9-0.7 1.5l-11.3 11.4q-0.7 0.6-1.6 0.6-0.9 0-1.5-0.6l-11.3-11.4q-0.7-0.6-0.7-1.5 0-0.9 0.7-1.6l1.3-1.3q0.6-0.6 1.5-0.6 1 0 1.6 0.6l5.1 5.1v-12.2q0-0.9 0.7-1.6t1.5-0.6h2.3q0.9 0 1.5 0.6t0.7 1.6v12.2l5.1-5.1q0.6-0.6 1.5-0.6 0.9 0 1.6 0.6l1.3 1.3q0.7 0.7 0.7 1.6z"/></g>
            </IconBase>
        );
    }
}
