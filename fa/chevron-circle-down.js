
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaChevronCircleDown extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m21.1 29l10.2-10.1q0.4-0.5 0.4-1t-0.4-1l-2.3-2.3q-0.4-0.4-1-0.4t-1 0.4l-6.9 6.8-6.8-6.8q-0.4-0.4-1-0.4t-1 0.4l-2.3 2.3q-0.4 0.4-0.4 1t0.4 1l10.1 10.1q0.5 0.4 1 0.4t1-0.4z m16.2-9q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"/></g>
            </IconBase>
        );
    }
}
