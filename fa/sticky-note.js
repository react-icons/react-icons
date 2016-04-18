
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaStickyNote extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25.9 27.9v9.2h-20.8q-0.8 0-1.5-0.6t-0.6-1.5v-30q0-0.9 0.6-1.5t1.5-0.6h30q0.9 0 1.6 0.6t0.6 1.5v20.7h-9.3q-0.9 0-1.5 0.6t-0.6 1.6z m2.8 0.7h8.5q-0.3 1.8-1.4 2.9l-4.1 4.1q-1.2 1.1-3 1.5v-8.5z"/></g>
            </IconBase>
        );
    }
}
