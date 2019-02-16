
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaChevronCircleRight extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m19 31.1l10.1-10.1q0.5-0.4 0.5-1t-0.5-1l-10.1-10.1q-0.4-0.5-1-0.5t-1 0.5l-2.3 2.2q-0.4 0.5-0.4 1t0.4 1l6.9 6.9-6.9 6.9q-0.4 0.4-0.4 1t0.4 1l2.3 2.2q0.4 0.5 1 0.5t1-0.5z m18.3-11.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"/></g>
            </IconBase>
        );
    }
}
